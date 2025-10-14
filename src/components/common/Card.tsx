import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  glass?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  gradient = false,
  glass = false
}) => {
  const baseClass = 'rounded-xl transition-all duration-300 overflow-hidden';
  const hoverClass = hover ? 'card-hover cursor-pointer' : '';
  const gradientClass = gradient ? 'bg-gradient-to-br from-white to-gray-50 border-2 border-transparent hover:border-primary-blue/20' : 'bg-white';
  const glassClass = glass ? 'glass shadow-glass' : 'shadow-lg';
  
  return (
    <div className={`${baseClass} ${hoverClass} ${gradientClass} ${glassClass} ${className} group relative`}>
      {/* Gradient Border Effect on Hover */}
      {hover && !glass && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue via-primary-orange to-primary-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
      )}
      
      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Shine Effect on Hover */}
      {hover && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
      )}
    </div>
  );
};

export default Card;
