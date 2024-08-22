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
    ctx.globalCompositeOperation = 'destination-out'
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    drawCircle(clientX, clientY, 50);
  };

  const drawCircle = (x, y, radius) => {
    const ctx = canvas.current.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  };

  return (
    <div className="relative w-full h-full">
      {dimension.width == 0 && (
        <div className="absolute w-full h-full bg-black"></div>
      )}
      <canvas
        onMouseMove={manageMouseMove}
        ref={canvas}
        height={dimension.height}
        width={dimension.width}
      />
    </div>
  );
}
