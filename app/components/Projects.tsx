"use client";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const projects = projectsRef.current;
    if (!projects) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(projects);
    return () => observer.disconnect();
  }, []);

  // Mobile scroll effect for project cards
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        const projectCards = document.querySelectorAll(".project-item");
        const viewportHeight = window.innerHeight;
        const viewportCenter = viewportHeight / 2;

        projectCards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const distanceFromCenter = Math.abs(cardCenter - viewportCenter);
          const maxDistance = viewportHeight * 0.6; // Cards within 60% of viewport height

          if (distanceFromCenter < maxDistance) {
            card.classList.add("in-view");
            card.classList.remove("out-of-view");
          } else {
            card.classList.add("out-of-view");
            card.classList.remove("in-view");
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const projects = [
    {
      id: "01",
      description: "Design & development of the Prepium WebApp",
      client: "Prepium",
      category: "Technology",
      link: "https://prepium.org",
      image: "/project/prepweb.png",
    },
    {
      id: "01.5",
      description: "Design and development of the Product",
      client: "SoftFera",
      category: "Branding",
      image: "/project/s2.png",
    },
    {
      id: "02",
      description: "Design and development of the SoftFera Website",
      client: "SoftFera",
      category: "Software",
      link: "https://softfera.com",
      image: "/project/s1.png",
    },
    {
      id: "02.5",
      description: "Design and development of AI Resume Builder",
      client: "AI Resume Builder",
      category: "Software",
      image: "/project/r1.png",
    },
    {
      id: "03",
      description: "Design of QLoud app",
      client: "QLoud",
      category: "Technology",
      image: "/project/qmockup.png",
    },
    {
      id: "04",
      description: "Design of the Prepium Mobile App",
      client: "Prepium",
      category: "Technology",
      image: "/project/1.png",
    },
    {
      id: "05",
      description: "Design of architectural website",
      client: "Interior",
      category: "Technology",
      image: "/project/int.png",
    },
    {
      id: "06",
      description: "Logo designs for multinational companies",
      client: "Multinational",
      category: "Branding",
      image: "/project/a1.png",
    },
    {
      id: "07",
      description: "Banner creations for businesses",
      client: "Businesses",
      category: "Branding",
      image: "/project/p2.png",
    },
  ];

  return (
    <section id="work" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <h2 className="projects__title">Work ↘</h2>
          <p className="projects__intro">
            I know your time is precious, and that's why I prioritize simplicity
            and efficiency. I have the expertise and creativity to handle
            everything from research and planning to custom design and
            development, freeing you from the burden of micromanagement.
          </p>
        </div>
      </div>

      <div className="projects__list-container">
        <div className="projects__list" ref={projectsRef}>
          {projects.map((project, index) => (
            <div key={project.id} className="project-item">
              <div className="project-number">{project.id}</div>
              <div className="project-content">
                <div className="project-description">{project.description}</div>
                <div className="project-client-info">
                  <span className="project-client">{project.client}</span>
                  <span className="project-category">{project.category}</span>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      <span className="project-link">View Project</span>
                    </a>
                  )}
                </div>
              </div>
              <div
                className="project-image"
                onClick={() => openImageModal(project.image)}
                style={{ cursor: "pointer" }}>
                <img src={project.image} alt={project.client} />
                <div className="project-image-overlay">
                  <img src={project.image} alt={project.client} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal}>
              ×
            </button>
            <img src={selectedImage} alt="Project" />
          </div>
        </div>
      )}

      <style jsx>{`
        .projects {
          padding: 20px 20px;
          background-color: #f8f8f8;
          min-height: 100vh;
        }

        .projects__container {
          max-width: 1600px;
          margin: 0 auto;
        }

        .projects__list-container {
          max-width: 1300px;
          margin-left: 300px;
          padding: 0 0px;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 1024px) {
          .projects__list-container {
            margin-left: 0;
            padding: 0 1rem;
          }
        }

        .projects__header {
          display: grid;
          grid-template-columns: 200px 1fr 120px;
          gap: 60px;
          align-items: start;
          margin-bottom: 10px;
          padding-bottom: 10px;
        }

        /* Mobile responsive header */
        @media (max-width: 1024px) {
          .projects__header {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
            margin-bottom: 3rem;
          }
        }

        .projects__title {
          font-family: "SF Pro Display", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: #2a2a2a;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .projects__intro {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 1.6rem;
          line-height: 1;
          color: #2a2a2a;
          margin: 0;
          max-width: 720px;
          font-weight: 700;
        }

        .projects__copyright {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 0.85rem;
          color: #2a2a2a;
          text-align: right;
          font-weight: 400;
        }

        .projects__list {
          opacity: 1;
          transform: none;
        }

        .project-item {
          display: grid;
          grid-template-columns: 80px 1fr 300px;
          gap: 60px;
          align-items: center;
          padding: 40px 0;
          border-bottom: 1px solid #d0d0d0;
          opacity: 1;
          transform: none;
        }

        /* Mobile responsive project items */
        @media (max-width: 1024px) {
          .project-item {
            grid-template-columns: 60px 1fr 120px;
            gap: 2rem;
            padding: 2rem 0;
          }
        }

        .project-number {
          font-family: "SF Pro Display", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #000;
        }

        .project-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .project-description {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 1.2rem;
          line-height: 1.5;
          font-weight: 700;
          color: #333;
        }

        .project-client-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .project-client {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #ff0000;
        }

        .project-category {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #666;
        }

        .project-link {
          font-family: "SF Pro Text", "SF Pro", -apple-system,
            BlinkMacSystemFont, sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: #000;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .project-link:hover {
          color: #333;
        }

        .project-image {
          width: 300px;
          height: 200px;
          overflow: hidden;
          border-radius: 8px;
        }

        /* Mobile responsive project images */
        @media (max-width: 1024px) {
          .project-image {
            width: 120px;
            height: 80px;
          }
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .project-item:hover .project-image img {
          filter: grayscale(0%);
        }

        .project-image-overlay {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 400px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .project-image-overlay img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: none;
        }

        .project-image:hover .project-image-overlay {
          opacity: 1;
          visibility: visible;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .projects {
            padding: 60px 30px;
          }

          .projects__header {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          .projects__title {
            font-size: 2.5rem;
          }

          .projects__intro {
            font-size: 1rem;
          }

          .projects__copyright {
            text-align: center;
          }

          .project-item {
            grid-template-columns: 60px 1fr 80px;
            gap: 30px;
            padding: 25px 0;
          }

          .project-number {
            font-size: 1.2rem;
          }

          .project-description {
            font-size: 0.9rem;
          }

          .project-client {
            font-size: 0.9rem;
          }

          .project-image {
            width: 80px;
            height: 80px;
          }
        }

        @media (max-width: 480px) {
          .projects {
            padding: 40px 20px;
          }

          .projects__header {
            margin-bottom: 60px;
          }

          .projects__title {
            font-size: 2rem;
          }

          .project-item {
            grid-template-columns: 50px 1fr 60px;
            gap: 20px;
            padding: 20px 0;
          }

          .project-number {
            font-size: 1rem;
          }

          .project-description {
            font-size: 0.8rem;
          }

          .project-client {
            font-size: 0.8rem;
          }

          .project-image {
            width: 60px;
            height: 60px;
          }
        }

        /* Dark mode styles for Projects */
        :global(.dark-mode) .projects {
          background-color: #000000;
        }

        :global(.dark-mode) .projects__title {
          color: white;
        }

        :global(.dark-mode) .projects__intro {
          color: white;
        }

        :global(.dark-mode) .projects__copyright {
          color: white;
        }

        :global(.dark-mode) .project-number {
          color: white;
        }

        :global(.dark-mode) .project-description {
          color: white;
        }

        :global(.dark-mode) .project-client {
          color: white;
        }

        :global(.dark-mode) .project-category {
          color: #cccccc;
        }

        :global(.dark-mode) .project-image-overlay {
          background-color: rgba(0, 0, 0, 0.8);
        }

        :global(.dark-mode) .project-image-overlay-content h3 {
          color: white;
        }

        :global(.dark-mode) .project-image-overlay-content p {
          color: #cccccc;
        }

        /* Dark mode styling for View Project link */
        :global(.dark-mode) .project-link {
          color: white !important;
          text-decoration-color: white !important;
          border-bottom-color: white !important;
        }

        /* Mobile scroll effects */
        @media (max-width: 768px) {
          .project-item {
            transition: all 0.3s ease;
          }

          .project-item.out-of-view {
            opacity: 0.3;
            filter: grayscale(100%);
            transform: scale(0.95);
          }

          .project-item.in-view {
            opacity: 1;
            filter: grayscale(0%);
            transform: scale(1);
          }

          .project-image {
            transition: all 0.3s ease;
          }

          .project-item.out-of-view .project-image {
            filter: grayscale(100%) brightness(0.7);
          }

          .project-item.in-view .project-image {
            filter: grayscale(0%) brightness(1);
          }
        }

        /* Image Modal Styles */
        .image-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          backdrop-filter: blur(10px);
        }

        .image-modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-modal-content img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .image-modal-close {
          position: absolute;
          top: -50px;
          right: 0;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          font-size: 2rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .image-modal-close:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        /* Mobile modal adjustments */
        @media (max-width: 768px) {
          .image-modal-content {
            max-width: 95%;
            max-height: 95%;
            padding: 20px;
          }

          .image-modal-close {
            top: -40px;
            right: 10px;
            width: 35px;
            height: 35px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
