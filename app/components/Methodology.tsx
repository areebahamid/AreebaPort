"use client";

export default function Methodology() {
  const services = [
    {
      id: "01",
      title: "Experience design",
      quote:
        "Research is to see what everybody else has seen, and to think what nobody else has thought",
      author: "Albert Szent-Györgyi",
      gradient:
        "linear-gradient(135deg, #87CEEB 0%, #9370DB 50%, #FF6347 100%)",
      graphic: "light-beam",
    },
    {
      id: "02",
      title: "Interaction design",
      quote:
        "Design is not just what it looks like and feels like. Design is how it works",
      author: "Steve Jobs",
      gradient:
        "linear-gradient(135deg, #8A2BE2 0%, #FF1493 50%, #FFE4E1 100%)",
      graphic: "dots",
    },
    {
      id: "03",
      title: "UI, HMI & Design system",
      quote: "The best way to predict the future is to invent it",
      author: "Alan Kay",
      gradient:
        "linear-gradient(135deg, #E6E6FA 0%, #9370DB 50%, #0000CD 100%)",
      graphic: "circle-lines",
    },
  ];

  return (
    <section id="methodology" className="methodology">
      <div className="methodology__container">
        <div className="methodology__header">
          <h2 className="methodology__title">Methodology ↘</h2>
          <p className="methodology__intro">
            My proven three-phase approach transforms ideas into exceptional
            digital experiences through research, design, and rapid prototyping.
          </p>
        </div>

        <div className="methodology__grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="methodology-card"
              style={{
                ["--gradient" as string]: service.gradient,
              }}>
              <div className="methodology-card__content">
                <h3 className="methodology-card__title">{service.title}</h3>
                <div
                  className={`methodology-card__graphic methodology-card__graphic--${service.graphic}`}></div>
                <div className="methodology-card__quote">
                  <p>"{service.quote}"</p>
                  <span className="methodology-card__author">
                    — {service.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .methodology {
          padding: 30px 20px;
          background-color: #f8f8f8;
          min-height: 100vh;
        }

        .methodology__container {
          max-width: 1700px;
          margin: 0 auto;
        }

        .methodology__header {
          text-align: center;
          margin-bottom: 80px;
        }

        .methodology__title {
          font-family: "SF Pro Display", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: #2a2a2a;
          margin: 0 0 30px 0;
          letter-spacing: -0.02em;
        }

        .methodology__intro {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 1.4rem;
          line-height: 1.6;
          color: #666;
          margin: 0;
          max-width: 800px;
          margin: 0 auto;
          font-weight: 400;
        }

        .methodology__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .methodology-card {
          background: #808080;
          border-radius: 0;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          min-height: 600px;
          display: flex;
          flex-direction: column;
        }

        .methodology-card:hover {
          background: var(--gradient) !important;
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .methodology-card__content {
          padding: 50px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: white;
        }

        .methodology-card__title {
          font-family: "SF Pro Display", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 3rem;
          font-weight: 700;
          color: white;
          margin: 0 0 40px 0;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .methodology-card__graphic {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px 0;
        }

        .methodology-card__graphic--light-beam {
          position: relative;
          width: 100%;
          height: 80px;
        }

        .methodology-card__graphic--light-beam::before {
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

        .methodology-card__graphic--light-beam::after {
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

        .methodology-card__graphic--dots {
          position: relative;
          width: 120px;
          height: 120px;
        }

        .methodology-card__graphic--dots::before {
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

        .methodology-card__graphic--circle-lines {
          position: relative;
          width: 120px;
          height: 120px;
          border: 3px solid white;
          border-radius: 50%;
        }

        .methodology-card__graphic--circle-lines::before {
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

        .methodology-card__quote {
          margin-top: auto;
        }

        .methodology-card__quote p {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 1rem;
          line-height: 1.5;
          color: white;
          margin: 0 0 8px 0;
          font-style: italic;
        }

        .methodology-card__author {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .methodology {
            padding: 60px 20px;
          }

          .methodology__title {
            font-size: 2.5rem;
          }

          .methodology__intro {
            font-size: 1.2rem;
          }

          .methodology__grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .methodology-card {
            min-height: 500px;
            padding: 40px 30px;
          }

          .methodology-card__title {
            font-size: 2rem;
          }

          .methodology-card__content {
            padding: 30px 20px;
          }
        }

        @media (max-width: 480px) {
          .methodology__title {
            font-size: 2rem;
          }

          .methodology__intro {
            font-size: 1.1rem;
          }

          .methodology-card {
            min-height: 450px;
            padding: 25px 15px;
          }

          .methodology-card__title {
            font-size: 1.5rem;
          }

          .methodology-card__content {
            padding: 25px 15px;
          }
        }

        /* Dark mode styles for Methodology */
        :global(.dark-mode) .methodology {
          background-color: #000000;
        }

        :global(.dark-mode) .methodology__title {
          color: white;
        }

        :global(.dark-mode) .methodology__intro {
          color: white;
        }

        :global(.dark-mode) .methodology-card {
          background: #333;
        }

        :global(.dark-mode) .methodology-card:hover {
          background: var(--gradient) !important;
        }
      `}</style>
    </section>
  );
}
