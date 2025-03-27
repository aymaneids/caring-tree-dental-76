
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '@/components/Hero';
import { services } from '@/lib/data';
import { motion } from 'framer-motion';
import { AppointmentButton } from '@/components/AppointmentButton';

const Services = () => {
  const location = useLocation();
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if there's a hash in the URL
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = serviceRefs.current[id];
      if (element) {
        setTimeout(() => {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 500);
      }
    }
  }, [location]);

  return (
    <div>
      <Hero 
        title="Our Dental Services"
        subtitle="Comprehensive care for patients of all ages"
        alignContent="left"
      />
      
      {/* Service Navigation */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="container py-4 overflow-x-auto">
          <div className="flex gap-4 min-w-max">
            {services.map((service) => (
              <a 
                key={service.id}
                href={`#${service.id}`}
                className="text-dental-700 hover:text-dental-500 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Content */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-dental-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Comprehensive Dental Services
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              At Spring Family Dental, we offer a wide range of dental services to meet the needs of your entire family. Our experienced team provides personalized care in a comfortable environment, using the latest techniques and technologies.
            </motion.p>
          </div>
          
          {/* Individual Services */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                ref={(el) => (serviceRefs.current[service.id] = el)}
                className="scroll-mt-32"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                    <span className="text-5xl mb-4 inline-block">{service.icon}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-dental-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <h4 className="text-xl font-semibold text-dental-700 mb-4">Treatments Include:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                      {service.treatments.map((treatment, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="18" 
                            height="18" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="text-dental-500 mt-1"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-gray-700">{treatment}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <AppointmentButton />
                  </div>
                  
                  <div className={index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                    <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
                      <img 
                        src="/placeholder.svg" 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dental-900/70 to-transparent flex items-end">
                        <div className="p-6">
                          <h4 className="text-white font-bold text-xl">{service.title}</h4>
                          <p className="text-white/80 text-sm">{service.shortDescription}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-dental-800 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Have Questions About Our Services?
            </motion.h2>
            <motion.p 
              className="text-dental-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Our team is happy to discuss your specific dental needs and answer any questions you may have about our services. Contact us today to learn more or schedule a consultation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <AppointmentButton size="lg" />
              <a 
                href="tel:(812)555-1234" 
                className="bg-white text-dental-800 hover:bg-dental-100 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Us: (812) 555-1234
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
