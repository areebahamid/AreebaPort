"use client";

import { useState, useEffect } from "react";

export default function GetInTouch() {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  const languages = [
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "Hallo",
    "Olá",
    "안녕하세요",
    "مرحبا",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguageIndex(
        (prevIndex) => (prevIndex + 1) % languages.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="get-in-touch">
      <div className="get-in-touch__container">
        <div className="get-in-touch__header">
          <h3 className="get-in-touch__subtitle">
            WANT TO TALK ABOUT SOMETHING?
          </h3>
        </div>

        <div className="get-in-touch__main">
          <div className="get-in-touch__title-image">
            <img
              src="/g3.png"
              alt="Get In Touch"
              className="get-in-touch__title-img"
            />
          </div>

          <div className="get-in-touch__multilingual">
            <div className="get-in-touch__phrase-container">
              <span key={currentLanguageIndex} className="get-in-touch__phrase">
                {languages[currentLanguageIndex]}
              </span>
            </div>
          </div>
        </div>

        <div className="get-in-touch__social">
          <a
            href="https://www.dribbble.com/areebahamid"
            className="get-in-touch__social-link">
            DRIBBBLE
          </a>
          <a
            href="https://www.linkedin.com/in/areebahamid22/"
            className="get-in-touch__social-link">
            LINKEDIN
          </a>
        </div>
      </div>

      <style jsx>{`
        .get-in-touch {
          padding: 80px 20px;
          background-color: #f8f8f8;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }

        .get-in-touch__container {
          max-width: 1700px;
          margin: 0 auto;
          width: 100%;
          text-align: center;
          position: relative;
        }

        .get-in-touch__header {
          margin-bottom: 60px;
        }

        .get-in-touch__subtitle {
          font-family: "SF Pro Display", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #2a2a2a;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0;
        }

        .get-in-touch__main {
          margin-bottom: 80px;
        }

        .get-in-touch__separator {
          width: 80%;
          max-width: 600px;
          height: 4px;
          background: #2a2a2a;
          margin: 0 auto 60px auto;
          border-radius: 2px;
        }

        .get-in-touch__multilingual {
          display: inline-block;
          padding: 20px 40px;
          border: 2px solid #667eea;
          border-radius: 50px;
          background: rgba(102, 126, 234, 0.1);
          overflow: hidden;
        }

        .get-in-touch__phrase-container {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .get-in-touch__phrase {
          font-family: "SF Pro Display", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #667eea;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          animation: slideInOut 2s ease-in-out;
        }

        @keyframes slideInOut {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          20% {
            opacity: 1;
            transform: translateX(0);
          }
          80% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50px);
          }
        }

        .get-in-touch__social {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 40px;
        }

        .get-in-touch__social-link {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: #2a2a2a;
          text-transform: uppercase;
          text-decoration: underline;
          text-underline-offset: 4px;
          letter-spacing: 0.1em;
          transition: color 0.3s ease;
        }

        .get-in-touch__social-link:hover {
          color: #667eea;
        }

        .get-in-touch__title-image {
          margin-bottom: 40px;
          display: flex;
          justify-content: center;
        }

        .get-in-touch__title-img {
          max-width: 100%;
          height: auto;
          max-height: 200px;
          object-fit: contain;
        }

        /* Mobile Responsiveness */
        @media (max-width: 1024px) {
          .get-in-touch__title-img {
            max-height: 150px;
          }

          .get-in-touch__social {
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .get-in-touch {
            padding: 60px 20px;
          }

          .get-in-touch__title-img {
            max-height: 120px;
          }

          .get-in-touch__separator {
            margin-bottom: 50px;
          }

          .get-in-touch__multilingual {
            padding: 15px 30px;
          }

          .get-in-touch__phrase {
            font-size: 1.1rem;
          }

          .get-in-touch__social {
            flex-direction: column;
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .get-in-touch__title-img {
            max-height: 100px;
          }

          .get-in-touch__multilingual {
            padding: 12px 25px;
          }

          .get-in-touch__phrase {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
