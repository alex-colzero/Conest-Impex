import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <Link href={link} className="group block h-full">
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary flex-grow">
          {description}
        </p>
        <div className="mt-4 flex items-center text-primary font-medium">
          <span>Află mai multe</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;