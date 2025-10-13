import React, { type ButtonHTMLAttributes, type ElementType } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  as?: ElementType;
  to?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  as: Component = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Tyres2Go Red & Yellow Theme
  const variantClasses = {
    primary: 'bg-primary-red text-white hover:bg-primary-dark focus:ring-primary-red shadow-md hover:shadow-lg',
    secondary: 'bg-primary-yellow text-gray-900 hover:bg-secondary-dark hover:text-white focus:ring-primary-yellow shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-white focus:ring-primary-red',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <Component
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
