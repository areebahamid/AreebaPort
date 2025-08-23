"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen(): JSX.Element | null {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    // Hide component after fade animation completes (1 second fade)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${isFading ? "fading" : ""}`}>
      <div className="loading-screen__content">
        <Image
          src="/a16.svg"
          alt="Loading Logo"
          width={120}
          height={120}
          className="loading-screen__logo"
          priority
        />
      </div>
    </div>
  );
}
