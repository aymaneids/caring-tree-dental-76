
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import { teamMembers } from '@/lib/data';
import TeamMember from '@/components/TeamMember';
import { AppointmentButton } from '@/components/AppointmentButton';
import { motion } from 'framer-motion';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero 
        title="Our Dental Team"
        subtitle="Meet the professionals dedicated to your oral health and beautiful smiles"
        alignContent="left"
      />
      
      {/* Team Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-dental-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Experienced Professionals, Passionate About Your Care
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our team combines years of experience with ongoing education to provide you with the highest standard of dental care. We're united by our commitment to patient comfort, education, and exceptional results.
            </motion.p>
          </div>
          
          {/* Dentists */}
          <div className="mb-20">
            <motion.h3 
              className="text-2xl font-semibold text-dental-800 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Dentists
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.slice(0, 2).map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  bio={member.bio}
                  credentials={member.credentials}
                  delay={index}
                />
              ))}
            </div>
          </div>
          
          {/* Staff */}
          <div>
            <motion.h3 
              className="text-2xl font-semibold text-dental-800 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our Team
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {teamMembers.slice(2).map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  bio={member.bio}
                  credentials={member.credentials}
                  delay={index + 2}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-dental-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-dental-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Meet Our Team in Person
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Schedule your appointment today and experience our commitment to exceptional dental care in a comfortable, friendly environment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AppointmentButton size="lg" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
