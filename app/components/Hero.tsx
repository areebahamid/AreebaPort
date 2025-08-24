"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "../styles/components/hero.css";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../contexts/ThemeContext";

interface MousePosition {
  x: number;
  y: number;
}

export default function Hero(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const originalCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const animationRef = useRef<number | null>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const originalCanvas = originalCanvasRef.current;
    if (!canvas || !originalCanvas) return;

    const ctx = canvas.getContext("2d");
    const originalCtx = originalCanvas.getContext("2d");
    if (!ctx || !originalCtx) return;

    // Load the actual image based on theme
    const img = new window.Image();
    img.crossOrigin = "anonymous"; // Handle CORS if needed
    img.src = isDarkMode ? "/al1.svg" : "/a16.svg";

    img.onload = () => {
      // Set canvas size to match image aspect ratio
      const maxWidth = 2000;
      const maxHeight = 2000; // Increased from 2000 to 3000 for taller logo

      let { width, height } = img;

      // Scale image to fit within max dimensions while maintaining aspect ratio
      if (width > maxWidth || height > maxHeight) {
        const scale = Math.min(maxWidth / width, maxHeight / height);
        width *= scale;
        height *= scale;
      }

      // Increase height by 50% for a taller logo
      height = height * 1;

      canvas.width = width;
      canvas.height = height;
      originalCanvas.width = width;
      originalCanvas.height = height;

      // Draw image to original canvas
      originalCtx.drawImage(img, 0, 0, width, height);

      // Draw initial state
      ctx.drawImage(originalCanvas, 0, 0);
    };

    img.onerror = () => {
      // Fallback if image doesn't load - create sample content
      const width = 800;
      const height = 400;

      canvas.width = width;
      canvas.height = height;
      originalCanvas.width = width;
      originalCanvas.height = height;

      // Create fallback content
      originalCtx.fillStyle = "#f5f5f5";
      originalCtx.fillRect(0, 0, width, height);

      originalCtx.fillStyle = "#1a1a1a";
      originalCtx.font = "bold 120px Arial";
      originalCtx.textAlign = "center";
      originalCtx.textBaseline = "middle";
      originalCtx.fillText("AREEBA", width / 2, height / 2);

      // Draw initial state
      ctx.drawImage(originalCanvas, 0, 0);
    };

    const applyGlitchEffect = (): void => {
      if (!isHovering) {
        ctx.drawImage(originalCanvas, 0, 0);
        return;
      }

      // Apply glitch effect continuously while hovering (like zajno website)

      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      const mouseX = mousePos.x * scaleX;
      const mouseY = mousePos.y * scaleY;

      // Clear and redraw original
      ctx.drawImage(originalCanvas, 0, 0);

      const radius = 270;
      const glitchIntensity = 80;

      // Get the area around the mouse
      const startX = Math.max(0, Math.floor(mouseX - radius));
      const startY = Math.max(0, Math.floor(mouseY - radius));
      const endX = Math.min(canvas.width, Math.ceil(mouseX + radius));
      const endY = Math.min(canvas.height, Math.ceil(mouseY + radius));

      const width = endX - startX;
      const height = endY - startY;

      if (width <= 0 || height <= 0) return;

      try {
        const imageData = ctx.getImageData(startX, startY, width, height);
        const data = imageData.data;
        const newData = new Uint8ClampedArray(data);

        // Calculate mouse direction vector (from center to mouse)
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const dirX = mouseX - centerX;
        const dirY = mouseY - centerY;
        const dirLength = Math.sqrt(dirX * dirX + dirY * dirY);
        const normalizedDirX = dirLength > 0 ? dirX / dirLength : 0;
        const normalizedDirY = dirLength > 0 ? dirY / dirLength : 0;

        // Aggressive block-based glitch effect like zajno website
        const blockSize = 36; // Much bigger blocks for dramatic effect
        const time = Date.now() * 0.006; // Faster animation for more aggressive glitch

        // Apply aggressive glitch layers
        for (let layer = 0; layer < 5; layer++) {
          const layerOffset = layer * 0.3;

          for (let blockY = 0; blockY < height; blockY += blockSize) {
            for (let blockX = 0; blockX < width; blockX += blockSize) {
              const pixelX = startX + blockX;
              const pixelY = startY + blockY;

              // Calculate distance from mouse
              const dx = pixelX - mouseX;
              const dy = pixelY - mouseY;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < radius) {
                const intensity =
                  Math.pow(1 - distance / radius, 1.5) * (1 - layer * 0.3);

                // Always apply glitch effect (no random) for smooth animation
                // Create smooth block displacement using sine waves
                const waveX = Math.sin(time + blockX * 0.03 + layerOffset);
                const waveY = Math.cos(time + blockY * 0.03 + layerOffset);

                const displaceX = waveX * intensity * glitchIntensity * 1.5;
                const displaceY = waveY * intensity * glitchIntensity * 1;

                // Source block position
                const sourceX = Math.round(blockX - displaceX);
                const sourceY = Math.round(blockY - displaceY);

                // Check bounds
                if (
                  sourceX >= 0 &&
                  sourceX < width - blockSize &&
                  sourceY >= 0 &&
                  sourceY < height - blockSize
                ) {
                  // Copy entire block of pixels
                  for (let by = 0; by < blockSize; by++) {
                    for (let bx = 0; bx < blockSize; bx++) {
                      const targetIndex =
                        ((blockY + by) * width + (blockX + bx)) * 4;
                      const sourceIndex =
                        ((sourceY + by) * width + (sourceX + bx)) * 4;

                      if (
                        targetIndex < newData.length - 3 &&
                        sourceIndex < data.length - 3
                      ) {
                        // Copy pixel data
                        newData[targetIndex] = data[sourceIndex]; // R
                        newData[targetIndex + 1] = data[sourceIndex + 1]; // G
                        newData[targetIndex + 2] = data[sourceIndex + 2]; // B
                        newData[targetIndex + 3] = data[sourceIndex + 3]; // A
                      }
                    }
                  }
                }
              }
            }
          }
        }

        const newImageData = new ImageData(newData, width, height);
        ctx.putImageData(newImageData, startX, startY);
      } catch (error) {
        console.error("Error applying glitch effect:", error);
      }
    };

    const handleMouseMove = (e: MouseEvent): void => {
      if (!isHovering) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePos({ x, y });
    };

    // Animation loop
    const animate = (): void => {
      applyGlitchEffect();
      animationRef.current = requestAnimationFrame(animate);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering, mousePos.x, mousePos.y, isDarkMode]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        isMobileMenuOpen &&
        !target.closest(".hero__mobile-menu") &&
        !target.closest(".hero__mobile-overlay")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (): void => setIsHovering(true);

  const handleMouseLeave = (): void => {
    setIsHovering(false);
    // Reset to original image when not hovering
    const canvas = canvasRef.current;
    const originalCanvas = originalCanvasRef.current;
    if (canvas && originalCanvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(originalCanvas, 0, 0);
      }
    }
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="hero">
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator"></div>

      {/* Header Elements */}
      <header className="hero__header">
        {/* Top-Left */}
        <div className="hero__header-left">
          <div className="hero__brand-logo">
            <Image
              src={isDarkMode ? "/al1.svg" : "/a16.svg"}
              alt="Areeba Logo"
              width={70}
              height={20}
              className="hero__header-logo"
              priority
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hero__header-center desktop-only">
          <div className="hero__center-links">
            <a href="#work">projects</a>

            <a href="#services">services</a>
            <a href="#contact">contact</a>
          </div>
        </div>

        {/* Desktop Social Links */}
        <div className="hero__header-right desktop-only">
          <div className="hero__social-links">
            <a
              href="https://www.linkedin.com/in/areebahamid22/"
              target="_blank"
              rel="noopener noreferrer">
              linkedin
            </a>
            <a
              href="https://www.dribbble.com/areebahamid"
              target="_blank"
              rel="noopener noreferrer">
              dribble
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="hero__mobile-menu mobile-only">
          <button
            className="hero__hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu">
            <span
              className={`hero__hamburger-line ${
                isMobileMenuOpen ? "open" : ""
              }`}></span>
            <span
              className={`hero__hamburger-line ${
                isMobileMenuOpen ? "open" : ""
              }`}></span>
            <span
              className={`hero__hamburger-line ${
                isMobileMenuOpen ? "open" : ""
              }`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`hero__mobile-overlay ${isMobileMenuOpen ? "open" : ""}`}>
        <nav className="hero__mobile-nav">
          <div className="hero__mobile-nav-links">
            <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>
              projects
            </a>
            <a href="#studio" onClick={() => setIsMobileMenuOpen(false)}>
              about
            </a>
            <a href="#methodology" onClick={() => setIsMobileMenuOpen(false)}>
              methodology
            </a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>
              services
            </a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              contact
            </a>
            <a
              href="https://www.linkedin.com/in/areebahamid22/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}>
              linkedin
            </a>
          </div>
        </nav>
      </div>

      {/* Central Logo with Glitch Effect */}
      <div className="hero__logo-container">
        <canvas ref={originalCanvasRef} style={{ display: "none" }} />
        <canvas
          ref={canvasRef}
          className="hero__logo"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
}
