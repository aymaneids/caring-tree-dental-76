
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  quote: string;
  image?: string;
  className?: string;
  delay?: number;
}

export const TestimonialCard = ({
  name,
  quote,
  image = '/placeholder.svg',
  className,
  delay = 0,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * (delay || 0) }}
      className={cn(
        'rounded-xl overflow-hidden bg-white p-6 shadow-sm border border-gray-100',
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-12 w-12 rounded-full overflow-hidden bg-dental-100 flex-shrink-0">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium text-dental-800">{name}</h4>
            <p className="text-sm text-gray-500">Patient</p>
          </div>
        </div>
        
        <blockquote className="italic text-gray-600 flex-grow">
          "{quote}"
        </blockquote>
        
        <div className="mt-4 text-dental-500 flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-dental-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
