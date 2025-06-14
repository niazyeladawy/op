"use client";

import React, { ReactNode, useEffect, useRef } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const updateLeftOffset = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      // Add 32px as per your original logic
      document.documentElement.style.setProperty(
        "--container-left-offset",
        `${rect.left + 32}px`
      );
    }
  };

  useEffect(() => {
    updateLeftOffset();
    window.addEventListener("resize", updateLeftOffset);
    return () => window.removeEventListener("resize", updateLeftOffset);
  }, []);

  return (
    <div
      className={`w-full mx-auto md:w-5xl px-4 sm:px-6 lg:px-8 ${className} container`}
      ref={containerRef}
    >
      {children}
    </div>
  );
}

const LeftAlignedFullWidth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="w-full ps-4 md:ps-0"
      style={{
        paddingLeft: "var(--container-left-offset)",
      }}
    >
      {children}
    </div>
  );
};

export { LeftAlignedFullWidth };
