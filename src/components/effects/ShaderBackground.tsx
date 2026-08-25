"use client";

import { useEffect, useRef } from "react";

export default function ShaderBackground({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>(0);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* --- Reduced motion check --- */
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /* --- Resize handling --- */
    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      
      // Cap devicePixelRatio to prevent excessive rendering on high-DPI displays
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      
      const renderWidth = Math.floor(w * dpr);
      const renderHeight = Math.floor(h * dpr);
      
      if (canvas.width !== renderWidth || canvas.height !== renderHeight) {
        canvas.width = renderWidth;
        canvas.height = renderHeight;
        
        // Update CSS to maintain correct display size
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
      }
    };

    const resizeObserver = new ResizeObserver(syncSize);
    resizeObserver.observe(canvas);
    syncSize();

    /* --- WebGL setup --- */
    const gl = (canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    vec2 uv = v_texCoord;
    float d = length(uv - vec2(0.5 + sin(u_time * 0.5) * 0.2, 0.5 + cos(u_time * 0.3) * 0.2));
    vec3 color = mix(vec3(0.01), vec3(0.0), smoothstep(0.0, 0.8, d));
    float n = (noise(uv + u_time * 0.01) - 0.5) * 0.02;
    color += n;
    gl_FragColor = vec4(color, 1.0);
}`;

    function createShader(
      glCtx: WebGLRenderingContext,
      type: number,
      src: string
    ) {
      const s = glCtx.createShader(type);
      if (!s) return null;
      glCtx.shaderSource(s, src);
      glCtx.compileShader(s);
      return s;
    }

    const prog = gl.createProgram();
    if (!prog) return;

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vs);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    gl.attachShader(prog, vertShader);
    gl.attachShader(prog, fragShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        mouse.x = ((event.clientX - rect.left) / rect.width) * canvas.width;
        mouse.y =
          (1.0 - (event.clientY - rect.top) / rect.height) * canvas.height;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    /* --- IntersectionObserver: pause rendering when offscreen --- */
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    visibilityObserver.observe(canvas);

    /* --- Render loop --- */
    let animationRunning = false;
    
    if (prefersReduced) {
      // Static dark frame for reduced motion
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, 0);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    } else {
      animationRunning = true;
      
      function render(t: number) {
        if (!animationRunning) return;
        
        if (isVisibleRef.current && gl && canvas) {
          gl.viewport(0, 0, canvas.width, canvas.height);
          if (uTime) gl.uniform1f(uTime, t * 0.001);
          if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
          if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
          gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
        
        if (animationRunning) {
          animationIdRef.current = requestAnimationFrame(render);
        }
      }
      
      animationIdRef.current = requestAnimationFrame(render);
    }

    return () => {
      animationRunning = false;
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      role="presentation"
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
