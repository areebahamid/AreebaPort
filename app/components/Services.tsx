"use client";

export default function Services() {
  return (
    <section id="services" className="services">
      {/* Services Provide Section */}
      <div className="services-provide">
        <div className="services-provide__container">
          <div className="services-provide__header">
            <h2 className="services-provide__title">
              Services <span className="services-provide__arrow">↘</span>
            </h2>
            <p className="services-provide__description">
              I am a digital designer that's all about breaking the mold! I
              don't do boring websites or ordinary apps - I specialize in
              crafting the wildest, most unconventional digital experiences out
              there.
            </p>
          </div>

          <div className="services-provide__content">
            <div className="services-provide__image">
              <img
                src="/a2.jpg"
                alt="Designer at work"
                className="services-provide__image-content"
              />
            </div>

            <div className="services-provide__info">
              <div className="services-provide__column">
                <h3 className="services-provide__column-title">Services:</h3>
                <ul className="services-provide__list">
                  <li>UI/UX Design</li>
                  <li>Figma Prototyping</li>
                  <li>User Research</li>
                  <li>Wireframing</li>
                  <li>Design Systems</li>
                  <li>Interactive Prototypes</li>
                  <li>User Testing</li>
                  <li>Design Handoff</li>
                </ul>
              </div>

              <div className="services-provide__column">
                <h3 className="services-provide__column-title">Stats:</h3>
                <ul className="services-provide__list">
                  <li>Design Projects 200+</li>
                  <li>Happy Clients 50+</li>
                  <li>Years Experience 3+</li>

                  <li>Figma Expert</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services {
          padding: 30px 20px;
          background-color: var(--bg-secondary);
          min-height: 100vh;
        }

        .services__container {
          max-width: 1700px;
          margin: 0 auto;
        }

        .services__header {
          text-align: center;
          margin-bottom: 30px;
        }

        .services__title {
          font-family: "SF Pro Display", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 3rem;
          font-weight: 700;
          color: var(--text-tertiary);
          margin: 0 0 30px 0;
          letter-spacing: -0.02em;
        }

        .services__intro {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 1.2rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: 0;
          max-width: 600px;
          margin: 0 auto;
          font-weight: 500;
        }

        .services__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .service-card {
          background: #808080;
          border-radius: 0;
          overflow: hidden;
          box-shadow: 0 8px 32px var(--shadow-color);
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          min-height: 600px;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          background: var(--gradient) !important;
          transform: translateY(-12px);
          box-shadow: 0 20px 60px var(--shadow-color);
        }

        .service-card__content {
          padding: 50px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: white;
        }

        .service-card__title {
          font-family: "SF Pro Display", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 3rem;
          font-weight: 700;
          color: white;
          margin: 0 0 40px 0;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .service-card__graphic {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px 0;
        }

        .service-card__graphic--light-beam {
          position: relative;
          width: 100%;
          height: 80px;
        }

        .service-card__graphic--light-beam::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60px;
          height: 12px;
          background: white;
          border-radius: 6px;
          transform: translate(-50%, -50%);
        }

        .service-card__graphic--light-beam::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 8px;
          background: white;
          border-radius: 4px;
          transform: translate(-50%, -50%);
          box-shadow: -25px 0 0 4px rgba(255, 255, 255, 0.8),
            25px 0 0 3px rgba(255, 255, 255, 0.6),
            -45px 0 0 2px rgba(255, 255, 255, 0.4),
            45px 0 0 2px rgba(255, 255, 255, 0.4);
        }

        .service-card__graphic--dots {
          position: relative;
          width: 120px;
          height: 120px;
        }

        .service-card__graphic--dots::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 25px -25px 0 6px rgba(255, 255, 255, 0.9),
            -25px -25px 0 5px rgba(255, 255, 255, 0.8),
            25px 25px 0 4px rgba(255, 255, 255, 0.7),
            -25px 25px 0 5px rgba(255, 255, 255, 0.8),
            35px 0 0 3px rgba(255, 255, 255, 0.6),
            -35px 0 0 4px rgba(255, 255, 255, 0.7),
            0 -35px 0 4px rgba(255, 255, 255, 0.7),
            0 35px 0 3px rgba(255, 255, 255, 0.6);
        }

        .service-card__graphic--circle-lines {
          position: relative;
          width: 120px;
          height: 120px;
          border: 3px solid white;
          border-radius: 50%;
        }

        .service-card__graphic--circle-lines::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 80px;
          height: 2px;
          background: white;
          transform: translate(-50%, -50%);
          box-shadow: 0 -15px 0 2px white, 0 -30px 0 2px white,
            0 15px 0 2px white, 0 30px 0 2px white, 0 -45px 0 1px white,
            0 45px 0 1px white;
        }

        .service-card__quote {
          margin-top: auto;
        }

        .service-card__quote p {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 1rem;
          line-height: 1.5;
          color: white;
          margin: 0 0 8px 0;
          font-style: italic;
        }

        .service-card__author {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        /* Services Provide Section */
        .services-provide {
          padding: 20px 20px;
          background-color: var(--bg-secondary);
          margin-top: 80px;
        }

        .services-provide__container {
          max-width: 1700px;
          margin: 0 auto;
        }

        .services-provide__header {
          margin-bottom: 20px;
        }

        .services-provide__title {
          font-family: "SF Pro Display", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .services-provide__arrow {
          font-size: 2rem;
          font-weight: 400;
        }

        .services-provide__description {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 1.3rem;
          line-height: 1.6;
          color: var(--text-primary);
          margin: 0;
          max-width: 800px;
          font-weight: 600;
        }

        .services-provide__content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .services-provide__image {
          width: 70%;
          border-radius: 10px;
        }

        .services-provide__info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .services-provide__column-title {
          font-family: "SF Pro Display", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0 0 10px 0;
          letter-spacing: -0.01em;
        }

        .services-provide__list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .services-provide__list li {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 1.1rem;
          line-height: 1.3;
          color: var(--text-primary);
          margin-bottom: 2px;
          font-weight: 600;
        }

        /* Mobile Responsiveness for Services Provide */
        @media (max-width: 1024px) {
          .services-provide__content {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .services-provide__info {
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .services-provide {
            padding: 60px 20px;
            margin-top: 60px;
          }

          .services-provide__header {
            margin-bottom: 60px;
          }

          .services-provide__title {
            font-size: 3rem;
            margin-bottom: 30px;
          }

          .services-provide__description {
            font-size: 1.2rem;
          }

          .services-provide__image-content {
            height: 400px;
          }

          .services-provide__info {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 480px) {
          .services-provide {
            padding: 40px 20px;
            margin-top: 40px;
          }

          .services-provide__title {
            font-size: 2.5rem;
          }

          .services-provide__description {
            font-size: 1.1rem;
          }

          .services-provide__image-content {
            height: 300px;
          }
        }

        /* Mobile Responsiveness */
        @media (max-width: 1024px) {
          .services__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .services {
            padding: 80px 20px;
          }

          .services__header {
            margin-bottom: 60px;
          }

          .services__title {
            font-size: 2.5rem;
          }

          .services__intro {
            font-size: 1.1rem;
          }

          .services__grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .service-card__content {
            padding: 40px;
          }

          .service-card__title {
            font-size: 1.5rem;
            margin-bottom: 30px;
          }

          .service-card__graphic {
            margin: 15px 0;
          }
        }

        @media (max-width: 480px) {
          .services {
            padding: 60px 20px;
          }

          .services__title {
            font-size: 2rem;
          }

          .services__intro {
            font-size: 1rem;
          }

          .service-card__image {
            height: 200px;
          }

          .service-card__content {
            padding: 35px;
          }

          .service-card__title {
            font-size: 1.3rem;
            margin-bottom: 25px;
          }

          .service-card__graphic {
            margin: 10px 0;
          }

          .service-card__quote p {
            font-size: 0.9rem;
          }

          .service-card__author {
            font-size: 0.8rem;
          }
        }

        .services-provide__image-content {
          width: 100%;
          height: 500px;
          object-fit: cover;
          filter: grayscale(100%);
          transition: all 0.4s ease;
          opacity: 0.9;
          mix-blend-mode: normal;
          border: none;
          outline: none;
        }

        .services-provide__image-content:hover {
          filter: grayscale(0%);
          opacity: 1;
          mix-blend-mode: normal;
        }

        /* Dark mode styles for Services */
        :global(.dark-mode) .services {
          background-color: var(--bg-secondary);
        }

        :global(.dark-mode) .services-provide {
          background-color: var(--bg-secondary);
        }

        :global(.dark-mode) .services__title {
          color: white;
        }

        :global(.dark-mode) .services__intro {
          color: #cccccc;
        }

        :global(.dark-mode) .services-provide__title {
          color: white;
        }

        :global(.dark-mode) .services-provide__description {
          color: white;
        }

        :global(.dark-mode) .services-provide__column-title {
          color: white;
        }

        :global(.dark-mode) .services-provide__list li {
          color: white;
        }

        :global(.dark-mode) .service-card {
          background: #333;
        }

        :global(.dark-mode) .service-card:hover {
          background: var(--gradient) !important;
        }
      `}</style>
    </section>
  );
}
