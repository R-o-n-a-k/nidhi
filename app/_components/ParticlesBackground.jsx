"use client";
import { useEffect } from "react";

export default function ParticlesBackground() {
  useEffect(() => {
    const loadParticles = () => {
      if (typeof window !== "undefined" && window.particlesJS) {
        window.particlesJS.load(
          "particles-js",
          "/particles-config.json",
          () => {}
        );
      }
    };

    // Add delay to ensure particlesJS is available
    setTimeout(loadParticles, 100);
  }, []);

  return (
    <div
      id="particles-js"
      className="fixed top-0 left-0 w-full h-3/5 -z-10 pointer-events-none bg-snow-background dark:bg-muted-bg"
    />
  );
}
