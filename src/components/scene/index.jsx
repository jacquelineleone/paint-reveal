"use client";
import React, { useEffect, useRef } from "react";
import useWindow from "@/hooks/useWindow";

export default function Scene() {
  const { dimension } = useWindow();
  const canvas = useRef();

  useEffect(() => {
    dimension.width > 0 && init();
  }, [dimension]);

  const init = () => {
    const ctx = canvas.current.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, dimension.width, dimension.height);
  };

  console.log(dimension);

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvas} height={dimension.height} width={dimension.width} />
    </div>
  );
}
