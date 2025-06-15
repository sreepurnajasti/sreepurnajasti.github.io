
import React, { useEffect, useRef, useState } from "react";

export default function SectionFadeIn({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.13, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(node);
    return () => { observer.disconnect(); };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${visible ? "visible" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
