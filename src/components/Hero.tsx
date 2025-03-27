
import { cn } from '@/lib/utils';
import { AppointmentButton } from './AppointmentButton';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  className?: string;
  showAppointmentButton?: boolean;
  showPhoneNumber?: boolean;
  alignContent?: 'left' | 'center' | 'right';
}

export const Hero = ({
  title,
  subtitle,
  description,
  image = '/photo-1535268647677-300dbf3d78d1',
  className,
  showAppointmentButton = true,
  showPhoneNumber = true,
  alignContent = 'center',
}: HeroProps) => {
  return (
    <section 
      className={cn(
        'relative overflow-hidden bg-dental-900 min-h-[70vh] md:min-h-[80vh] flex items-center',
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {image && (
          <img 
            src={image} 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-60"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-dental-900/90 via-dental-900/70 to-dental-900/80" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 py-20">
        <div 
          className={cn(
            'max-w-xl mx-auto md:mx-0 text-center',
            alignContent === 'left' && 'md:text-left md:ml-0',
            alignContent === 'right' && 'md:text-right md:ml-auto',
          )}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className="text-lg md:text-xl font-medium text-dental-100 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {description && (
            <motion.p 
              className="text-dental-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {description}
            </motion.p>
          )}
          
          <motion.div 
            className={cn(
              'flex gap-4 mt-8',
              alignContent === 'center' && 'justify-center',
              alignContent === 'left' && 'md:justify-start',
              alignContent === 'right' && 'md:justify-end',
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {showAppointmentButton && (
              <AppointmentButton size="lg" />
            )}
            
            {showPhoneNumber && (
              <a 
                href="tel:(812)555-1234" 
                className="flex items-center gap-2 px-6 py-2.5 rounded-md border-2 border-white bg-transparent text-white hover:bg-white hover:text-dental-800 transition-colors duration-300 font-medium"
              >
                <Phone className="h-5 w-5" />
                (812) 555-1234
              </a>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default Hero;
