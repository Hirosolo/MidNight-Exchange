"use client";

import { useEffect, useRef, useState } from "react";

const heroImages = [
  { src: "/images/banner-1.png", alt: "Midnight banner 1" },
  { src: "/images/banner-2.png", alt: "Midnight banner 2" },
  { src: "/images/banner-3.png", alt: "Midnight banner 3" },
  { src: "/images/banner-4.png", alt: "Midnight banner 4" },
  { src: "/images/banner-5.png", alt: "Midnight banner 5" },
  { src: "/images/banner-6.png", alt: "Midnight banner 6" },
  { src: "/images/banner-7.png", alt: "Midnight banner 7" },
  { src: "/images/banner-8.png", alt: "Midnight banner 8" },
];

const HOLD_DURATION_MS = 4200;
const GLITCH_DURATION_MS = 700;

export default function HeroBannerSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isGlitching, setIsGlitching] = useState(false);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    let holdTimeoutId: ReturnType<typeof setTimeout> | undefined;
    let glitchTimeoutId: ReturnType<typeof setTimeout> | undefined;
    let isCancelled = false;

    const scheduleNextTransition = () => {
      holdTimeoutId = setTimeout(() => {
        if (isCancelled) return;

        const upcomingIndex = (currentIndexRef.current + 1) % heroImages.length;
        setNextIndex(upcomingIndex);
        setIsGlitching(true);

        glitchTimeoutId = setTimeout(() => {
          if (isCancelled) return;

          currentIndexRef.current = upcomingIndex;
          setCurrentIndex(upcomingIndex);
          setIsGlitching(false);
          scheduleNextTransition();
        }, GLITCH_DURATION_MS);
      }, HOLD_DURATION_MS);
    };

    scheduleNextTransition();

    return () => {
      isCancelled = true;
      clearTimeout(holdTimeoutId);
      clearTimeout(glitchTimeoutId);
    };
  }, []);

  const currentImage = heroImages[currentIndex];
  const upcomingImage = heroImages[nextIndex];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      <div className="hero-banner-stage">
        <img
          alt={currentImage.alt}
          className={`hero-banner-image ${isGlitching ? "hero-banner-image--glitching" : ""}`}
          src={currentImage.src}
        />

        {isGlitching && (
          <>
            <img
              alt=""
              aria-hidden="true"
              className="hero-banner-image hero-banner-image--glitch-layer hero-banner-image--glitch-layer-top"
              src={upcomingImage.src}
            />
            <img
              alt=""
              aria-hidden="true"
              className="hero-banner-image hero-banner-image--glitch-layer hero-banner-image--glitch-layer-mid"
              src={upcomingImage.src}
            />
            <img
              alt=""
              aria-hidden="true"
              className="hero-banner-image hero-banner-image--glitch-layer hero-banner-image--glitch-layer-bottom"
              src={upcomingImage.src}
            />
            <div className="hero-banner-glitch-noise" />
          </>
        )}
      </div>
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}