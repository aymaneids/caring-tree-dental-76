
import { Link } from 'react-router-dom';
import { navLinks, practiceInfo } from '@/lib/data';
import { Phone, MapPin, Clock, Check } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dental-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="animate-fade-in [animation-delay:100ms]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌳</span>
              <div>
                <h3 className="text-xl font-bold leading-tight">
                  Spring Family Dental
                </h3>
                <p className="text-xs text-dental-300 -mt-1">New Albany, Indiana</p>
              </div>
            </div>
            <p className="text-dental-200 mb-4 max-w-xs">
              Patient-centered dentistry with a focus on connection, education, and comfort in a beautiful office environment.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-sm text-dental-200">
                <Phone className="h-4 w-4 text-dental-400" />
                {practiceInfo.phone}
              </p>
              <p className="flex items-start gap-2 text-sm text-dental-200">
                <MapPin className="h-4 w-4 shrink-0 text-dental-400" />
                {practiceInfo.address}
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="animate-fade-in [animation-delay:200ms]">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-dental-400" />
              Office Hours
            </h3>
            <ul className="space-y-2">
              {practiceInfo.hours.map((hour, index) => (
                <li key={index} className="text-sm text-dental-200">
                  <span className="font-medium text-white">{hour.day}:</span> {hour.time}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in [animation-delay:300ms]">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-dental-200 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Check className="h-3.5 w-3.5 text-dental-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact CTA */}
          <div className="md:col-span-3 lg:col-span-1 animate-fade-in [animation-delay:400ms]">
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm text-dental-200 mb-4">
              Join our community to receive the latest dental tips, special offers, and practice updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-md w-full bg-dental-800 border border-dental-700 text-white placeholder:text-dental-500 focus:outline-none focus:ring-1 focus:ring-dental-400"
              />
              <button className="bg-dental-500 hover:bg-dental-600 text-white font-medium px-4 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
            <div className="mt-4 flex gap-3">
              {practiceInfo.socialMedia.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-dental-800 hover:bg-dental-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                >
                  {social.platform === "Instagram" ? "📸" : "👍"}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-dental-800 mt-12 pt-8 text-center text-sm text-dental-400">
          <p>© {currentYear} Spring Family Dental - New Albany. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
