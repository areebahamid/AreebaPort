"use client";

export default function About() {
  return (
    <section id="studio" className="about">
      {/* Background Image with Blur */}
      <div className="about__background">
        <div className="about__background-image"></div>
      </div>

      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">aesthetic meets functionality!</h2>

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
          {/* First row - moving left to right */}
          <div className="band band--top">
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
            </div>
          </div>

          {/* Second row - moving right to left */}
          <div className="band band--bottom">
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
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: 20px 0 80px;
          color: #000;
          position: relative;
          overflow: hidden;
          padding-bottom: 40px;
          height: 140vh;
          background-color: transparent !important; /* Override external CSS */
        }

        /* Background Image with Blur */
        .about__background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background-color: #f0f0f0; /* Fallback color */
        }

        .about__background-image {
          width: 100%;
          height: 100%;
          background-image: url("/b43.jpg") !important;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          filter: blur(2px);
          transform: scale(1.1); /* Prevent blur edges from showing */
          opacity: 1;
          display: block;
        }

        .about__container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
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
          font-size: 1rem;
          line-height: 1.3;
          margin-bottom: 30px;
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
          background-color: transparent;
          z-index: 2;
          overflow: hidden;
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
          width: max-content;
          overflow: hidden;
          z-index: 2;
          will-change: transform;
          animation-duration: 60s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .band-content {
          display: flex;
          white-space: nowrap;
        }

        .band span {
          margin-right: 60px;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .band--top {
          top: 10px;
          left: 0;
          color: #000;
          font-weight: 700;
          height: 50px;
          align-items: center;
          animation-name: slideLeftToRight;
        }

        .band--bottom {
          bottom: 10px;
          right: 0;
          color: #000;
          opacity: 0.7;
          -webkit-text-stroke: 1px #000;
          -webkit-text-fill-color: transparent;
          height: 50px;
          align-items: center;
          animation-name: slideRightToLeft;
          animation-delay: -30s;
        }

        /* Escalator Animation Keyframes */
        @keyframes slideLeftToRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slideRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
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

        /* Dark mode styles for About */
        :global(.dark-mode) .about {
          background-color: #000000 !important;
        }

        :global(.dark-mode) .about__background {
          background-color: transparent !important;
        }

        :global(.dark-mode) .about__background-image {
          background-image: url("/56.jpg") !important;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          opacity: 1 !important;
          filter: blur(1px) !important;
        }

        /* Alternative approach - direct targeting */
        :global(html.dark-mode) .about__background-image {
          background-image: url("/56.jpg") !important;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          opacity: 1 !important;
          filter: blur(0px) !important;
        }

        /* Force override with higher specificity */
        :global(.dark-mode) .about .about__background .about__background-image {
          background-image: url("/56.jpg") !important;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          opacity: 1 !important;
          filter: blur(1px) !important;
        }

        /* Clear existing background first */
        :global(.dark-mode) .about__background-image {
          background: none !important;
          background-image: url("/56.jpg") !important;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          opacity: 0.8 !important;
          filter: blur(30px) !important;
        }

        /* Debug: Make background visible with a different approach */
        :global(.dark-mode) .about__background-image::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("/56.jpg") !important;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          opacity: 0.8 !important;
          filter: blur(30px) !important;
          z-index: -1;
        }

        /* Simple test - change background to a visible color */
        :global(.dark-mode) .about__background-image {
          background-color: red !important;
          background-image: url("/56.jpg") !important;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          opacity: 0.8 !important;
          filter: blur(30px) !important;
        }

        /* Try targeting the parent element first */
        :global(.dark-mode) .about__background {
          background-color: red !important;
        }

        /* Try using attribute selector */
        :global(.dark-mode) [class*="about__background-image"] {
          background-color: red !important;
          background-image: url("/56.jpg") !important;
        }

        /* Try using the most specific selector possible */
        :global(.dark-mode)
          section#studio.about
          .about__background
          .about__background-image {
          background-color: red !important;
          background-image: url("/56.jpg") !important;
        }

        /* Fix z-index issue and force visibility */
        :global(.dark-mode) .about__background-image {
          z-index: 1 !important;
          background-color: red !important;
          background-image: url("/56.jpg") !important;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          opacity: 1 !important;
          filter: blur(1px) !important;
        }

        /* Also try targeting the parent background div */
        :global(.dark-mode) .about__background {
          z-index: 1 !important;
          background-color: red !important;
          background-image: url("/56.jpg") !important;
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          opacity: 1 !important;
          filter: blur(px) !important;
        }

        /* Test if dark mode is working - temporary */
        :global(.dark-mode) .about__title {
          color: #808080 !important;
        }

        :global(.dark-mode) .about__title {
          color: white;
        }

        :global(.dark-mode) .about__text p {
          color: white;
        }

        :global(.dark-mode) .about__resume-btn {
          background-color: white;
          color: black;
          border: 2px solid white;
        }

        :global(.dark-mode) .about__resume-btn:hover {
          background-color: transparent;
          color: white;
        }

        :global(.dark-mode) .band--top {
          color: white;
        }

        :global(.dark-mode) .band--bottom {
          color: white;
          -webkit-text-stroke: 1px white;
        }

        /* Ensure animations work in dark mode */
        :global(.dark-mode) .band--top {
          animation: slideLeftToRight 60s linear infinite;
        }

        :global(.dark-mode) .band--bottom {
          animation: slideRightToLeft 60s linear infinite;
          animation-delay: -30s;
        }
      `}</style>
    </section>
  );
}
