
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import TeamMember from '@/components/TeamMember';
import { AppointmentButton } from '@/components/AppointmentButton';
import { services, testimonials, teamMembers, aboutContent } from '@/lib/data';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero 
        title="Your Family's Smile, Our Family's Care"
        subtitle="Spring Family Dental - New Albany, Indiana"
        description="Experience patient-centered dentistry focused on connection, education, and comfort in our beautiful office environment."
      />
      
      {/* About Us (Brief) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/photo-1487958449943-2429e8be8625" 
                alt="Spring Family Dental Office" 
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <span className="text-dental-500 font-medium mb-2">WELCOME TO SPRING FAMILY DENTAL</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-dental-800">Exceptional Dental Care for the Whole Family</h2>
              <p className="text-gray-600 mb-6">{aboutContent.mission}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {aboutContent.values.map((value, index) => (
                  <div key={index} className="bg-dental-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 text-dental-700">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description.substring(0, 80)}...</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/about" 
                  className="bg-dental-500 hover:bg-dental-600 text-white px-6 py-3 rounded-md font-medium transition-colors text-center"
                >
                  About Our Practice
                </Link>
                <Link 
                  to="/team" 
                  className="border-2 border-dental-500 text-dental-600 hover:bg-dental-50 px-6 py-3 rounded-md font-medium transition-colors text-center"
                >
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Services */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-dental-500 font-medium">OUR SERVICES</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dental-800">Comprehensive Dental Care</h2>
            <p className="text-gray-600">From routine cleanings to advanced cosmetic procedures, we offer a full range of dental services for patients of all ages.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                icon={service.icon}
                description={service.shortDescription}
                delay={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-dental-600 hover:text-dental-700 font-medium"
            >
              View All Services
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
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-dental-500 font-medium">PATIENT TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dental-800">What Our Patients Say</h2>
            <p className="text-gray-600">We're proud to have earned the trust and satisfaction of our patients. Here's what they have to say about their experience at Spring Family Dental.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                quote={testimonial.quote}
                image={testimonial.image}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Team Members */}
      <section className="section-padding bg-dental-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-dental-500 font-medium">OUR TEAM</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dental-800">Meet Our Dental Professionals</h2>
            <p className="text-gray-600">Our experienced and friendly team is dedicated to providing exceptional dental care in a comfortable environment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(0, 4).map((member, index) => (
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
          
          <div className="text-center mt-12">
            <Link 
              to="/team" 
              className="inline-flex items-center gap-2 text-dental-600 hover:text-dental-700 font-medium"
            >
              Meet Our Full Team
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
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-dental-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/photo-1472396961693-142e6e269027" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-heading font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Schedule Your Appointment?
            </motion.h2>
            <motion.p 
              className="text-dental-100 mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We're excited to welcome you to our practice. Whether you need a routine check-up or are interested in cosmetic services, our team is here to provide exceptional care.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AppointmentButton size="lg" />
              <Link 
                to="/new-patients" 
                className="bg-white text-dental-800 hover:bg-dental-100 px-6 py-3 rounded-md font-medium transition-colors text-center"
              >
                New Patient Information
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
