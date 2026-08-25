"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string;
}

export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (!hasError) {
          setImgSrc(fallbackSrc);
          setHasError(true);
        }
      }}
    />
  );
}
