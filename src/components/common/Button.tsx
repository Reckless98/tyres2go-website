import React, { type ButtonHTMLAttributes, type ElementType } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  as?: ElementType;
  to?: string;
  href?: string;
  glow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  as: Component = 'button',
  glow = false,
  ...props
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group';
  
  // Tyres2Go Blue & Orange Theme with Enhanced Effects
  const variantClasses = {
    primary: 'bg-primary-blue text-white hover:bg-primary-dark focus:ring-primary-blue shadow-lg hover:shadow-neon hover:scale-105 active:scale-95',
    secondary: 'bg-primary-orange text-white hover:bg-secondary-dark focus:ring-primary-orange shadow-lg hover:shadow-neon-orange hover:scale-105 active:scale-95',
    outline: 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white focus:ring-primary-blue hover:scale-105 active:scale-95',
    gradient: 'bg-gradient-to-r from-primary-blue via-primary-orange to-primary-blue bg-[length:200%_100%] text-white hover:bg-right focus:ring-primary-orange shadow-lg hover:shadow-neon animate-gradient hover:scale-105 active:scale-95',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const glowClass = glow ? 'animate-glow' : '';

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${glowClass} ${className}`}
      {...props}
    >
      {/* Ripple Effect Background */}
      <span className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-lg"></span>
      
      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Shine Effect */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
    </Component>
  );
};

export default Button;
