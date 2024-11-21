import React from 'react';

// Loader Icon
export const LoaderIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={`animate-spin ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.042.784 3.898 2.067 5.291l1.933-1.933z"
    ></path>
  </svg>
);

// Toggle Arrow Icon
export const ArrowIcon: React.FC<{ isOpen: boolean; className?: string }> = ({
  isOpen,
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={`transform transition-transform ${isOpen ? 'rotate-180' : ''} ${
      className || ''
    }`}
  >
    <path
      fill="currentColor"
      d="M12 15.5l-7-7 1.4-1.4L12 12.7l5.6-5.6L19 8.5z"
    />
  </svg>
);
