import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the type for navigation items
interface NavItem {
  name: string;
  href?: string;
  subItems?: { name: string; href: string }[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar should be active (white bg, dark text) if:
  // 1. Scrolled down
  // 2. Not on home page (internal pages usually have light backgrounds)
  // 3. Mobile menu is open (to ensure visibility of close button)
  const isNavbarActive = scrolled || !isHomePage || isOpen;

  const navLinks: NavItem[] = [
    { 
      name: 'About', 
      href: '#about' 
    },
    { 
      name: 'Admissions', 
      subItems: [
        { name: 'Procedure', href: '#admission-procedure' },
        { name: 'Fee Structure', href: '#fees' },
        { name: 'Apply Now', href: '#apply' }
      ]
    },
    { 
      name: 'Academics', 
      subItems: [
        { name: 'Curriculum', href: '#curriculum' },
        { name: 'Faculty', href: '#faculty' },
        { name: 'Results', href: '#results' }
      ]
    },
    { 
      name: 'Campus Life', 
      subItems: [
        { name: 'Photo Gallery', href: '#gallery' },
        { name: 'Sports & Activities', href: '#sports' },
        { name: 'Infrastructure', href: '#infra' }
      ]
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isNavbarActive
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <Link to="/" className="flex items-center space-x-3 group" onClick={() => setIsOpen(false)}>
          <div className="h-16 w-16 flex items-center justify-center">
            <img 
              src="/e07adf3b-ca22-4d24-9eb1-63504724b6e3.png" 
              alt="THPS Logo" 
              className="h-full w-auto object-contain drop-shadow-md rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-xl md:text-2xl leading-tight transition-colors ${isNavbarActive ? 'text-brand-navy' : 'text-white'}`}>
              The Himalayan
            </span>
            <span className={`text-xs uppercase tracking-widest transition-colors ${isNavbarActive ? 'text-brand-gold' : 'text-slate-200'}`}>
              Public School
            </span>
            <span className={`text-xs font-serif transition-colors ${isNavbarActive ? 'text-brand-navy' : 'text-slate-200'}`}>
              Learn to Serve
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href || '#'}
                className={`flex items-center text-sm font-medium transition-colors hover:text-brand-gold pb-2 ${
                  isNavbarActive ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.name}
                {link.subItems && (
                  <ChevronDown size={14} className="ml-1 transition-transform group-hover:rotate-180" />
                )}
              </a>

              {/* Desktop Dropdown */}
              {link.subItems && (
                <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden py-2">
                    {link.subItems.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-gold transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* Action Button */}
          <Link
            to="/student-zone"
            className={`flex items-center space-x-1 px-5 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105 ${
              isNavbarActive
                ? 'bg-brand-navy text-white hover:bg-slate-800'
                : 'bg-white text-brand-navy hover:bg-slate-100'
            }`}
          >
            <span>Student Zone</span>
            <ChevronDown size={14} />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-md transition-colors ${
            isNavbarActive ? 'text-slate-800' : 'text-white'
          }`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden h-screen"
          >
            <div className="flex flex-col p-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-slate-50 last:border-0">
                  {link.subItems ? (
                    <div className="py-2">
                       <button 
                         onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                         className="flex items-center justify-between w-full text-slate-800 font-medium py-2"
                       >
                         {link.name}
                         <ChevronDown 
                           size={16} 
                           className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} 
                         />
                       </button>
                       <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-slate-50 rounded-lg"
                          >
                             <div className="flex flex-col py-2 px-4 space-y-2">
                              {link.subItems.map((sub) => (
                                <a 
                                  key={sub.name} 
                                  href={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  className="text-sm text-slate-500 py-1 hover:text-brand-navy"
                                >
                                  {sub.name}
                                </a>
                              ))}
                             </div>
                          </motion.div>
                        )}
                       </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-slate-800 font-medium py-4 hover:text-brand-gold"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              
              <div className="pt-6">
                <Link
                  to="/student-zone"
                  onClick={() => setIsOpen(false)}
                  className="bg-brand-navy text-white text-center w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                >
                  Student Portal <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;