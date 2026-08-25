export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#000000] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B7C3] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00B7C3]"></span>
        </div>
        <p
          className="text-[#00B7C3] text-[12px] tracking-[0.2em] uppercase font-medium animate-pulse"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          LOADING_SEQUENCE...
        </p>
      </div>
    </div>
  );
}
