"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const topBandRef = useRef<HTMLDivElement>(null);
  const bottomBandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topBand = topBandRef.current;
    const bottomBand = bottomBandRef.current;

    if (!topBand || !bottomBand) return;

    let lastScrollY = window.scrollY;
    let topBandPosition = 0;
    let bottomBandPosition = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 1 : -1;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY) * 1;

      // Update band positions based on scroll direction
      if (scrollDirection > 0) {
        // Scrolling down - top band moves right, bottom band moves left
        topBandPosition += scrollDelta;
        bottomBandPosition -= scrollDelta;
      } else {
        // Scrolling up - reverse the movement
        topBandPosition -= scrollDelta;
        bottomBandPosition += scrollDelta;
      }

      // Reset positions when they get too far to create infinite scroll
      const bandWidth = 10000; // Increased width to accommodate longer text content
      if (topBandPosition > bandWidth) topBandPosition -= bandWidth;
      if (topBandPosition < -bandWidth) topBandPosition += bandWidth;
      if (bottomBandPosition > bandWidth) bottomBandPosition -= bandWidth;
      if (bottomBandPosition < -bandWidth) bottomBandPosition += bandWidth;

      // Apply transforms
      topBand.style.transform = `translateX(${topBandPosition}px)`;
      bottomBand.style.transform = `translateX(${bottomBandPosition}px)`;

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="studio" className="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">aesthetics meets functionality!</h2>

          <div className="about__text">
            <p>
              I transform complex user problems into elegant, intuitive
              solutions through human-centered design thinking and data-driven
              insights. Every pixel, interaction, and user flow is crafted with
              purpose—because exceptional UX isn't just beautiful, it's
              functional, accessible, and meaningful.
            </p>

            <p>
              My approach bridges the gap between user needs and business
              objectives, creating interfaces that don't just look good—they
              perform. I believe the best designs are invisible, guiding users
              seamlessly through their journey while exceeding their
              expectations at every touchpoint. From wireframes to prototypes, I
              ensure every decision serves both the user and the bottom line.
            </p>

            <p>
              This philosophy transforms good products into exceptional
              experiences that users love, businesses value, and competitors
              envy.
            </p>
          </div>

          <a
            href="/AreebaResumeUpdated.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="about__resume-btn">
            DOWNLOAD MY RESUME
          </a>
        </div>

        {/* Moving Bands */}
        <div className="about__bands">
          <div className="band band--top" ref={topBandRef}>
            <div className="band-content">
              <span>USER EXPERIENCE DESIGN</span>
              <span>INTERFACE DESIGN</span>
              <span>USER RESEARCH</span>
              <span>PROTOTYPING</span>
              <span>USABILITY TESTING</span>
              <span>INFORMATION ARCHITECTURE</span>
              <span>INTERACTION DESIGN</span>
              <span>VISUAL DESIGN</span>
              <span>USER TESTING</span>
              <span>WIREFRAMING</span>
              <span>DESIGN SYSTEMS</span>
              <span>ACCESSIBILITY</span>
              <span>USER EXPERIENCE DESIGN</span>
              <span>INTERFACE DESIGN</span>
              <span>USER RESEARCH</span>
              <span>PROTOTYPING</span>
              <span>USABILITY TESTING</span>
              <span>INFORMATION ARCHITECTURE</span>
              <span>INTERACTION DESIGN</span>
              <span>VISUAL DESIGN</span>
              <span>USER TESTING</span>
              <span>WIREFRAMING</span>
              <span>DESIGN SYSTEMS</span>
              <span>ACCESSIBILITY</span>
              <span>USER EXPERIENCE DESIGN</span>
              <span>INTERFACE DESIGN</span>
              <span>USER RESEARCH</span>
              <span>PROTOTYPING</span>
              <span>USABILITY TESTING</span>
              <span>INFORMATION ARCHITECTURE</span>
              <span>INTERACTION DESIGN</span>
              <span>VISUAL DESIGN</span>
              <span>USER TESTING</span>
              <span>WIREFRAMING</span>
              <span>DESIGN SYSTEMS</span>
              <span>ACCESSIBILITY</span>
            </div>
            <div className="band-content">
              <span>USER EXPERIENCE DESIGN</span>
              <span>INTERFACE DESIGN</span>
              <span>USER RESEARCH</span>
              <span>PROTOTYPING</span>
              <span>USABILITY TESTING</span>
              <span>INFORMATION ARCHITECTURE</span>
              <span>INTERACTION DESIGN</span>
              <span>VISUAL DESIGN</span>
              <span>USER TESTING</span>
              <span>WIREFRAMING</span>
              <span>DESIGN SYSTEMS</span>
              <span>ACCESSIBILITY</span>
              <span>USER EXPERIENCE DESIGN</span>
              <span>INTERFACE DESIGN</span>
              <span>USER RESEARCH</span>
              <span>PROTOTYPING</span>
              <span>USABILITY TESTING</span>
              <span>INFORMATION ARCHITECTURE</span>
              <span>INTERACTION DESIGN</span>
              <span>VISUAL DESIGN</span>
              <span>USER TESTING</span>
              <span>WIREFRAMING</span>
              <span>DESIGN SYSTEMS</span>
              <span>ACCESSIBILITY</span>
              <span>USER EXPERIENCE DESIGN</span>
              <span>INTERFACE DESIGN</span>
              <span>USER RESEARCH</span>
              <span>PROTOTYPING</span>
              <span>USABILITY TESTING</span>
              <span>INFORMATION ARCHITECTURE</span>
              <span>INTERACTION DESIGN</span>
              <span>VISUAL DESIGN</span>
              <span>USER TESTING</span>
              <span>WIREFRAMING</span>
              <span>DESIGN SYSTEMS</span>
              <span>ACCESSIBILITY</span>
            </div>
          </div>

          <div className="band band--bottom" ref={bottomBandRef}>
            <div className="band-content">
              <span>USER EXPERIENCE DESIGN</span>
              <span>INTERFACE DESIGN</span>
              <span>USER RESEARCH</span>
              <span>PROTOTYPING</span>
              <span>USABILITY TESTING</span>
              <span>INFORMATION ARCHITECTURE</span>
              <span>INTERACTION DESIGN</span>
              <span>VISUAL DESIGN</span>
              <span>USER TESTING</span>
              <span>WIREFRAMING</span>
              <span>DESIGN SYSTEMS</span>
              <span>ACCESSIBILITY</span>
              <span>USER EXPERIENCE DESIGN</span>
              <span>INTERFACE DESIGN</span>
              <span>USER RESEARCH</span>
              <span>PROTOTYPING</span>
              <span>USABILITY TESTING</span>
              <span>INFORMATION ARCHITECTURE</span>
              <span>INTERACTION DESIGN</span>
              <span>VISUAL DESIGN</span>
              <span>USER TESTING</span>
              <span>WIREFRAMING</span>
              <span>DESIGN SYSTEMS</span>
              <span>ACCESSIBILITY</span>
              <span>USER EXPERIENCE DESIGN</span>
              <span>INTERFACE DESIGN</span>
              <span>USER RESEARCH</span>
              <span>PROTOTYPING</span>
              <span>USABILITY TESTING</span>
              <span>INFORMATION ARCHITECTURE</span>
              <span>INTERACTION DESIGN</span>
              <span>VISUAL DESIGN</span>
              <span>USER TESTING</span>
              <span>WIREFRAMING</span>
              <span>DESIGN SYSTEMS</span>
              <span>ACCESSIBILITY</span>
            </div>
            <div className="band-content">
              <span>USER EXPERIENCE DESIGN</span>
              <span>INTERFACE DESIGN</span>
              <span>USER RESEARCH</span>
              <span>PROTOTYPING</span>
              <span>USABILITY TESTING</span>
              <span>INFORMATION ARCHITECTURE</span>
              <span>INTERACTION DESIGN</span>
              <span>VISUAL DESIGN</span>
              <span>USER TESTING</span>
              <span>WIREFRAMING</span>
              <span>DESIGN SYSTEMS</span>
              <span>ACCESSIBILITY</span>
              <span>USER EXPERIENCE DESIGN</span>
              <span>INTERFACE DESIGN</span>
              <span>USER RESEARCH</span>
              <span>PROTOTYPING</span>
              <span>USABILITY TESTING</span>
              <span>INFORMATION ARCHITECTURE</span>
              <span>INTERACTION DESIGN</span>
              <span>VISUAL DESIGN</span>
              <span>USER TESTING</span>
              <span>WIREFRAMING</span>
              <span>DESIGN SYSTEMS</span>
              <span>ACCESSIBILITY</span>
              <span>USER EXPERIENCE DESIGN</span>
              <span>INTERFACE DESIGN</span>
              <span>USER RESEARCH</span>
              <span>PROTOTYPING</span>
              <span>USABILITY TESTING</span>
              <span>INFORMATION ARCHITECTURE</span>
              <span>INTERACTION DESIGN</span>
              <span>VISUAL DESIGN</span>
              <span>USER TESTING</span>
              <span>WIREFRAMING</span>
              <span>DESIGN SYSTEMS</span>
              <span>ACCESSIBILITY</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: 20px 0 80px;
          background-color: #f8f8f8;
          color: #000;
          position: relative;
          overflow: hidden;
          padding-bottom: 40px;
          height: 140vh;
        }

        .about__container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
        }

        .about__content {
          text-align: center;
          margin-bottom: 80px;
        }

        .about__title {
          font-family: "SF Pro Display", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          align-items: right;
          text-align: right;
          margin-bottom: 120px;
          color: #000;
          letter-spacing: -0.02em;
        }

        .about__text {
          max-width: 800px;
          margin: 0 auto 50px;
          text-align: left;
        }

        .about__text p {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 25px;
          font-weight: 500;
          text-align: center;
        }

        .about__resume-btn {
          background: transparent;
          border: 2px solid #000;
          color: #000;
          padding: 15px 40px;
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .about__resume-btn:hover {
          background: #000;
          color: #fff;
        }

        .about__resume-btn:active {
          transform: scale(0.98);
        }

        /* Moving Bands */
        .about__bands {
          position: relative;
          width: 100%;
          height: 180px;
          pointer-events: none;
          margin-top: 40px;
          background-color: #f8f8f8;
        }

        .about__bands::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background-color: #000;
          transform: translateY(-50%);
        }

        .band {
          position: absolute;
          display: flex;
          white-space: nowrap;
          font-family: "SF Pro Display", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 4rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          width: 100%;
          overflow: hidden;
        }

        .band-content {
          display: flex;
          white-space: nowrap;
        }

        .band span {
          margin-right: 60px;
          flex-shrink: 0;
        }

        .band--top {
          top: 10px;
          left: 0;
          color: #000;
          font-weight: 700;
          height: 50px;
          align-items: center;
        }

        .band--bottom {
          bottom: 10px;
          left: 0;
          color: #000;
          opacity: 0.7;
          -webkit-text-stroke: 1px #000;
          -webkit-text-fill-color: transparent;
          height: 50px;
          align-items: center;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .about {
            padding: 60px 0;
          }

          .about__container {
            padding: 0 20px;
          }

          .about__title {
            font-size: 2.5rem;
            margin-bottom: 30px;
          }

          .about__text p {
            font-size: 1rem;
            line-height: 1.6;
          }

          .band {
            font-size: 1.2rem;
          }

          .band span {
            margin-right: 40px;
          }
        }

        @media (max-width: 480px) {
          .about__title {
            font-size: 2rem;
          }

          .about__text p {
            font-size: 0.9rem;
          }

          .band {
            font-size: 1rem;
          }

          .band span {
            margin-right: 30px;
          }
        }
      `}</style>
    </section>
  );
}
