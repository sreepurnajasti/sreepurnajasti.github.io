
import React, { useEffect, useRef } from "react";

const staticShapes = [
  { w: 80, h: 80, top: "20%", left: "10%", delay: 0 },
  { w: 120, h: 120, top: "60%", left: "80%", delay: -5 },
  { w: 60, h: 60, top: "80%", left: "20%", delay: -10 },
  { w: 100, h: 100, top: "40%", left: "60%", delay: -15 }
];

export default function AnimatedBackground() {
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating shapes (dynamic, every 3s)
    const parent = shapesRef.current;
    if (!parent) return;

    function createFloatingShape() {
      const d = document.createElement("div");
      d.className = "pointer-events-none rounded-full absolute animate-float";
      d.style.left = Math.random() * 100 + "%";
      d.style.top = Math.random() * 100 + "%";
      const sz = Math.random() * 60 + 40;
      d.style.width = `${sz}px`;
      d.style.height = `${sz}px`;
      d.style.background =
        "linear-gradient(45deg, #00f5ff,#ff006e)";
      d.style.opacity = "0.08";
      d.style.animationDuration = (Math.random() * 10 + 15) + "s";
      d.style.animationDelay = Math.random() * 5 + "s";
      parent.appendChild(d);
      setTimeout(() => d.remove(), 25000);
    }

    const i = setInterval(createFloatingShape, 3000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden">
      <div className="absolute w-full h-full" ref={shapesRef}>
        {/* Static shapes */}
        {staticShapes.map((s, idx) => (
          <div
            key={idx}
            className="rounded-full pointer-events-none animate-float absolute"
            style={{
              width: s.w,
              height: s.h,
              top: s.top,
              left: s.left,
              background: "linear-gradient(45deg,#00f5ff,#ff006e)",
              opacity: 0.07,
              animationDelay: `${s.delay}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
