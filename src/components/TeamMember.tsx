
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  credentials: string;
  className?: string;
  delay?: number;
}

export const TeamMember = ({
  name,
  role,
  image,
  bio,
  credentials,
  className,
  delay = 0,
}: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * (delay || 0) }}
      className={cn(
        'rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100',
        className
      )}
    >
      <div className="aspect-[4/3] overflow-hidden bg-dental-50">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-col items-start">
          <p className="text-sm text-dental-500 font-medium mb-1">{role}</p>
          <h3 className="text-xl font-semibold text-dental-800 mb-1">{name}</h3>
          <p className="text-sm text-gray-500 mb-4">{credentials}</p>
          <p className="text-gray-600">{bio}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
