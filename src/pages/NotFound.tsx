
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <motion.div 
        className="text-center max-w-lg mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-7xl mb-8 inline-block">🦷</span>
        <h1 className="text-4xl font-bold text-dental-800 mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          We couldn't find the page you're looking for. 
          It might have been moved or doesn't exist.
        </p>
        <div className="space-y-4">
          <Link 
            to="/" 
            className="bg-dental-500 hover:bg-dental-600 text-white px-6 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Return to Homepage
          </Link>
          <div className="pt-2">
            <Link 
              to="/contact" 
              className="text-dental-600 hover:text-dental-700 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
