import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const hoverClass = hover ? 'hover:shadow-xl' : '';
  
  return (
    <div className={`bg-white rounded-lg shadow-md transition-shadow duration-300 ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
