"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with enhanced configuration
    lenisRef.current = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.6,
      touchMultiplier: 1.2,
      infinite: false,
      lerp: 0.035,
    });

    const lenis = lenisRef.current;

    // Enhanced RAF loop with better performance
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Add scroll event listener for custom interactions
    lenis.on("scroll", (e: any) => {
      // You can add custom scroll-triggered animations here
      const scrollY = e.scroll;
      const progress = e.progress;

      // Update scroll progress indicator
      const scrollIndicator = document.querySelector(".scroll-indicator");
      if (scrollIndicator) {
        const progressBar =
          scrollIndicator.querySelector("::after") || scrollIndicator;
        if (progressBar instanceof HTMLElement) {
          progressBar.style.width = `${progress * 100}%`;
        }
      }

      // Example: Parallax effect for elements with data-parallax attribute
      document.querySelectorAll("[data-parallax]").forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(
          element.getAttribute("data-parallax") || "0.5"
        );
        const yPos = -(scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });

      // Example: Fade in elements on scroll
      document.querySelectorAll("[data-fade-in]").forEach((el) => {
        const element = el as HTMLElement;
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      });
    });

    // Handle hash links for smooth scrolling to sections
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const href = target.getAttribute("href");
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement && lenis) {
            lenis.scrollTo(targetElement as HTMLElement, {
              duration: 2,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              offset: -80, // Account for header height
            });
          }
        }
      }
    };

    document.addEventListener("click", handleHashClick);

    // Add scroll to top functionality
    const scrollToTop = () => {
      if (lenis) {
        lenis.scrollTo(0, {
          duration: 2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    };

    // Add scroll to top button if it doesn't exist
    if (!document.querySelector(".scroll-to-top")) {
      const scrollTopBtn = document.createElement("button");
      scrollTopBtn.className = "scroll-to-top";
      scrollTopBtn.innerHTML = "↑";
      scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 20px;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
        display: none;
      `;

      scrollTopBtn.addEventListener("click", scrollToTop);
      document.body.appendChild(scrollTopBtn);

      // Show/hide scroll to top button based on scroll position
      lenis.on("scroll", () => {
        if (lenis.scroll > 500) {
          scrollTopBtn.style.display = "block";
          scrollTopBtn.style.opacity = "1";
        } else {
          scrollTopBtn.style.opacity = "0";
          setTimeout(() => {
            if (lenis.scroll <= 500) {
              scrollTopBtn.style.display = "none";
            }
          }, 300);
        }
      });
    }

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleHashClick);
      const scrollTopBtn = document.querySelector(".scroll-to-top");
      if (scrollTopBtn) {
        scrollTopBtn.remove();
      }
    };
  }, []);

  return <>{children}</>;
}
