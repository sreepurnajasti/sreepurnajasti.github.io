
import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0, xf = 0, yf = 0;
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor.current) {
        cursor.current.style.left = `${mouseX}px`;
        cursor.current.style.top = `${mouseY}px`;
      }
    };
    const loop = () => {
      xf += (mouseX - xf) * 0.16;
      yf += (mouseY - yf) * 0.16;
      if (follower.current) {
        follower.current.style.left = `${xf}px`;
        follower.current.style.top = `${yf}px`;
      }
      requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMove);
    loop();
    return () => {
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  // Hide cursor on touch devices
  useEffect(() => {
    const onTouch = () => {
      if (cursor.current) cursor.current.style.display = "none";
      if (follower.current) follower.current.style.display = "none";
    }
    window.addEventListener('touchstart', onTouch, { once: true });
    return () => {
      window.removeEventListener('touchstart', onTouch);
    };
  }, []);

  return (
    <>
      <div ref={cursor}
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          width: 20, height: 20, background: "#00f5ff",
          mixBlendMode: "difference",
          transition: "transform 0.1s ease",
        }} />
      <div ref={follower}
        className="fixed pointer-events-none z-[9998] border-2 border-primary rounded-full"
        style={{
          width: 40, height: 40,
          transition: "all 0.28s cubic-bezier(.43,1.5,.31,1), border-color 0.2s",
        }} />
    </>
  );
}
