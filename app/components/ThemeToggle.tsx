"use client";

import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
      
      <style jsx>{`
        .theme-toggle {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
          padding: 12px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .theme-toggle:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
        }

        .theme-toggle:active {
          transform: scale(0.95);
        }

        /* Dark mode specific styles */
        :global(.dark-mode) .theme-toggle {
          background-color: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        :global(.dark-mode) .theme-toggle:hover {
          background-color: rgba(0, 0, 0, 0.5);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .theme-toggle {
            bottom: 20px;
            right: 20px;
            padding: 10px;
          }
        }

        @media (max-width: 480px) {
          .theme-toggle {
            bottom: 15px;
            right: 15px;
            padding: 8px;
          }
        }
      `}</style>
    </button>
  );
}
