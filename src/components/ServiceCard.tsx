import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, features }) => {
  const { theme } = useTheme();

  return (
    <div className={`group relative rounded-xl p-6 transition-all duration-300 hover:scale-105 ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10'
        : 'bg-white border border-gray-200 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5'
    }`}>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20'
            : 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100'
        }`}>
          <Icon size={24} />
        </div>

        {/* Content */}
        <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        
        <p className={`mb-4 leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-500'
              }`} />
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;