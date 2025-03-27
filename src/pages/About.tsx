
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import { aboutContent } from '@/lib/data';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero 
        title="About Spring Family Dental"
        subtitle="Learn about our mission, values, and commitment to exceptional patient care"
        alignContent="left"
      />
      
      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-dental-50 rounded-xl p-6 mb-8"
                >
                  <h3 className="text-xl font-semibold text-dental-800 mb-4">Our Core Values</h3>
                  <ul className="space-y-4">
                    {aboutContent.values.map((value, index) => (
                      <li key={index} className="flex gap-3">
                        <div className="text-dental-500 bg-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 shadow-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-dental-700">{value.title}</h4>
                          <p className="text-sm text-gray-600">{value.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                >
                  <h3 className="text-xl font-semibold text-dental-800 mb-4">Ready to Visit?</h3>
                  <p className="text-gray-600 mb-6">We look forward to welcoming you to our practice. Schedule your appointment today.</p>
                  <Link 
                    to="/contact" 
                    className="bg-dental-500 hover:bg-dental-600 text-white px-4 py-2 rounded-md font-medium transition-colors block text-center"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-dental-800 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Spring Family Dental was founded with a vision to provide comprehensive, patient-centered dental care to families in New Albany, Indiana. Our practice is built on the fundamental belief that exceptional dental care goes beyond treating teeth – it's about building relationships, educating patients, and creating positive experiences in a beautiful environment.
                </p>
                <p className="text-gray-600 mb-10">
                  Since our establishment, we've been committed to staying at the forefront of dental technology and techniques, while maintaining the warm, personalized approach that our patients value. We've grown to become a trusted healthcare provider in the community, serving multiple generations of families with compassionate care.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold text-dental-800 mb-6">Our Mission</h2>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-10">
                  <p className="text-dental-700 italic text-lg">{aboutContent.mission}</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-dental-800 mb-6">Our Philosophy</h2>
                <p className="text-gray-600 mb-10">{aboutContent.philosophy}</p>
                
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-10">
                  <img 
                    src="/photo-1721322800607-8c38375eef04" 
                    alt="Our Office" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-dental-800 mb-6">Our Approach to Dental Care</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-dental-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-dental-800 mb-3">Patient-Centered Care</h3>
                    <p className="text-gray-600">We take the time to listen to your concerns, answer your questions, and create customized treatment plans that align with your specific needs and goals.</p>
                  </div>
                  <div className="bg-dental-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-dental-800 mb-3">Educational Focus</h3>
                    <p className="text-gray-600">We believe informed patients make better decisions about their oral health. We thoroughly explain all procedures and treatment options.</p>
                  </div>
                  <div className="bg-dental-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-dental-800 mb-3">Preventive Emphasis</h3>
                    <p className="text-gray-600">We prioritize preventive care to help you maintain optimal oral health and avoid more complex dental issues in the future.</p>
                  </div>
                  <div className="bg-dental-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-dental-800 mb-3">Comprehensive Services</h3>
                    <p className="text-gray-600">From routine check-ups to advanced cosmetic and restorative procedures, we offer a full range of dental services for patients of all ages.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  to="/team" 
                  className="bg-dental-500 hover:bg-dental-600 text-white px-6 py-3 rounded-md font-medium transition-colors text-center flex-1"
                >
                  Meet Our Team
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-dental-500 text-dental-600 hover:bg-dental-50 px-6 py-3 rounded-md font-medium transition-colors text-center flex-1"
                >
                  Explore Our Services
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
