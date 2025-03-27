
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, practiceInfo } from '@/lib/data';
import { cn } from '@/lib/utils';
import { AppointmentButton } from './AppointmentButton';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white bg-opacity-90 backdrop-blur shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 transition-transform hover:scale-[1.02]"
        >
          <span className="text-dental-500 text-3xl">🌳</span>
          <div>
            <h1 className="text-xl font-bold text-dental-800 leading-tight">
              Spring Family Dental
            </h1>
            <p className="text-xs text-dental-600 -mt-1">New Albany, Indiana</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors relative',
                location.pathname === link.path
                  ? 'text-dental-700 before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-dental-500 before:rounded'
                  : 'text-gray-600 hover:text-dental-600 hover:bg-dental-50'
              )}
            >
              {link.name}
            </Link>
          ))}
          <AppointmentButton className="ml-2" />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-dental-700 hover:bg-dental-50 rounded-full"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in z-50">
          <nav className="container py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'px-4 py-3 flex items-center gap-2 rounded-md text-base font-medium transition-colors',
                  location.pathname === link.path
                    ? 'text-dental-700 bg-dental-50'
                    : 'text-gray-600 hover:text-dental-600 hover:bg-dental-50'
                )}
              >
                <link.icon className="h-5 w-5" />
                {link.name}
              </Link>
            ))}
            <div className="mt-4 px-4">
              <AppointmentButton fullWidth />
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {practiceInfo.phone}
                </p>
                <p className="mt-2 text-sm text-gray-500 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {practiceInfo.address}
                </p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
