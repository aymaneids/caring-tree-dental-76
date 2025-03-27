
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import { newPatientInfo, faqs } from '@/lib/data';
import { motion } from 'framer-motion';
import { AppointmentButton } from '@/components/AppointmentButton';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const NewPatients = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero 
        title="Welcome New Patients"
        subtitle="Everything you need to know for your first visit with us"
        alignContent="left"
      />
      
      {/* Welcome Message */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-dental-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              We're Excited to Meet You!
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {newPatientInfo.welcomeMessage}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <AppointmentButton size="lg" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* What to Expect & What to Bring */}
      <section className="py-16 bg-dental-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-dental-800 mb-6">What to Expect</h3>
              <p className="text-gray-600 mb-6">
                Your first visit is all about getting to know you, understanding your dental history, and creating a personalized care plan. Here's what you can expect:
              </p>
              <ul className="space-y-4">
                {newPatientInfo.whatToExpect.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-dental-500 text-white h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-dental-800 mb-6">What to Bring</h3>
              <p className="text-gray-600 mb-6">
                To make your first visit as smooth as possible, please bring the following items:
              </p>
              <ul className="space-y-4">
                {newPatientInfo.whatToBring.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
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
                      className="text-dental-500 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-xl font-semibold text-dental-800 mb-4">New Patient Forms</h4>
                <p className="text-gray-600 mb-4">
                  Save time at your first appointment by downloading and completing our new patient forms before your visit.
                </p>
                <a 
                  href="#" 
                  className="flex items-center gap-2 bg-dental-500 hover:bg-dental-600 text-white px-4 py-2 rounded-md font-medium transition-colors inline-block"
                >
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
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download New Patient Forms
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Insurance & Payment */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-dental-800 mb-6">Insurance Information</h3>
              <p className="text-gray-600 mb-6">{newPatientInfo.insuranceInfo}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dental-700 mb-2">In-Network Providers</h4>
                  <p className="text-gray-600 text-sm">We're in-network with many major insurance providers to maximize your benefits.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-dental-700 mb-2">Insurance Verification</h4>
                  <p className="text-gray-600 text-sm">Our team will verify your benefits before your appointment.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-dental-800 mb-6">Payment Options</h3>
              <p className="text-gray-600 mb-6">
                We offer several payment options to make dental care accessible and affordable for all our patients.
              </p>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-lg font-semibold text-dental-800 mb-4">We Accept</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {newPatientInfo.paymentOptions.map((option, index) => (
                    <li key={index} className="flex items-start gap-2">
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
                      <span className="text-gray-700">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 bg-dental-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-dental-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Find answers to common questions about our dental services, insurance coverage, and what to expect during your visit.
            </motion.p>
          </div>
          
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium text-dental-800 hover:text-dental-600 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-dental-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Schedule Your First Visit?
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We're looking forward to welcoming you to our dental family. Contact us today to schedule your appointment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <AppointmentButton size="lg" />
              <Link 
                to="/contact" 
                className="border-2 border-dental-500 text-dental-600 hover:bg-dental-50 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewPatients;
