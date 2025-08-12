import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`w-full px-4 md:px-8 lg:px-16 xl:px-20 ${className}`}>
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};