
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  id: string;
  title: string;
  icon: string;
  description: string;
  className?: string;
  delay?: number;
}

export const ServiceCard = ({
  id,
  title,
  icon,
  description,
  className,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * (delay || 0) }}
    >
      <Link 
        to={`/services#${id}`}
        className={cn(
          'block rounded-xl p-6 bg-white hover:shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 group',
          className
        )}
      >
        <div className="flex flex-col items-center text-center">
          <span className="text-3xl mb-4">{icon}</span>
          <h3 className="text-xl font-semibold text-dental-800 mb-2 group-hover:text-dental-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{description}</p>
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-dental-500 font-medium flex items-center gap-1 text-sm">
            Learn more
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="transform group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
