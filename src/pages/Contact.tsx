
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import { practiceInfo } from '@/lib/data';
import { motion } from 'framer-motion';
import { AppointmentButton } from '@/components/AppointmentButton';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero 
        title="Contact Us"
        subtitle="We're here to help with all your dental care needs"
        alignContent="left"
      />
      
      {/* Contact Information and Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-dental-800 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to answer your questions and help you schedule an appointment. 
                Reach out to us through the contact form, by phone, or visit our office in New Albany.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-dental-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-dental-800">Phone</h3>
                    <p className="text-gray-600">{practiceInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-dental-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-dental-800">Email</h3>
                    <p className="text-gray-600">{practiceInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-dental-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-dental-800">Address</h3>
                    <p className="text-gray-600">{practiceInfo.address}</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-dental-500 hover:text-dental-600 font-medium text-sm inline-flex items-center gap-1 mt-1"
                    >
                      Get Directions
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-dental-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-dental-800">Office Hours</h3>
                    <div className="grid grid-cols-2 gap-2 text-gray-600 text-sm mt-1">
                      {practiceInfo.hours.map((hour, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-medium">{hour.day}:</span>
                          <span>{hour.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <AppointmentButton size="lg" fullWidth />
              </div>
              
              <div className="bg-dental-50 p-6 rounded-xl">
                <h3 className="font-semibold text-dental-800 mb-3">Emergency Dental Care</h3>
                <p className="text-gray-600 mb-4">
                  If you're experiencing a dental emergency during office hours, please call us immediately. 
                  For after-hours emergencies, please call our office for instructions on reaching our on-call dentist.
                </p>
                <a 
                  href={`tel:${practiceInfo.phone}`} 
                  className="flex items-center gap-2 text-dental-600 font-medium hover:text-dental-700"
                >
                  <Phone className="h-4 w-4" />
                  Call for Emergency Care
                </a>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-dental-800 mb-6">Send Us a Message</h2>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name*
                      </label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name*
                      </label>
                      <input 
                        type="text" 
                        id="lastName" 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      required 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-500"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      className="mt-1 h-4 w-4 text-dental-500 focus:ring-dental-500 border-gray-300 rounded"
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
                      I consent to having this website store my submitted information so they can respond to my inquiry.
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-dental-500 hover:bg-dental-600 text-white py-3 rounded-md font-medium transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-16 bg-dental-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl font-bold text-dental-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Find Our Office
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We're conveniently located in New Albany, Indiana. Our modern office offers ample parking and easy access.
            </motion.p>
          </div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg h-[400px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Placeholder for Google Maps - In a real implementation, replace with actual Google Maps embed */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin className="h-12 w-12 text-dental-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Spring Family Dental</h3>
                <p className="text-gray-600">{practiceInfo.address}</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 bg-dental-500 hover:bg-dental-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Get Directions
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
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
