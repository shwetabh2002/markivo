import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling to sections
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [location]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const handleDropdownEnter = (index) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay before closing
    setHoverTimeout(timeout);
  };

  const handleMobileDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleNavClick = (path) => {
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      if (location.pathname !== route) {
        navigate(route);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      dropdown: [
        { name: 'Our Story', path: '/about' },
        { name: 'Our Team', path: '/about#team' }
      ]
    },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'SEO Services', path: '/services/seo' },
        { name: 'PPC Advertising', path: '/services/ppc' },
        { name: 'Social Media Marketing', path: '/services/social_media' },
        { name: 'Web Development', path: '/services/web_design' },
        { name: 'Branding & UI/UX', path: '/services/ui_ux' },
        { name: 'Mobile App Development', path: '/services/mobile_app' }
      ]
    },
    { 
      name: 'Pricing', 
      path: '/pricing',
      dropdown: [
        { name: 'Web Development Pricing', path: '/pricing/web' },
        { name: 'App Development Pricing', path: '/pricing/app' },
        { name: 'SEO Pricing', path: '/pricing/seo' }
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
    <div className="main-navbar">
        <div className="navbar-brand">
          <Link to="/">
            <img src="/assets/axeera-logo.svg" alt="Axeera" className="logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-content desktop-nav">
          {navItems.map((item, index) => (
            <div key={item.name} className="nav-item">
              {item.dropdown ? (
                <div 
                  className="dropdown-wrapper"
                  onMouseEnter={() => handleDropdownEnter(index)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="nav-link dropdown-toggle">
                    {item.name}
                    <FaChevronDown className="dropdown-icon" />
                  </button>
                  {activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="dropdown-menu"
                    >
                      {item.dropdown.map((subItem) => (
                        subItem.path.includes('#') ? (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavClick(subItem.path)}
                            className="dropdown-item"
                          >
                            {subItem.name}
                          </button>
                        ) : (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="dropdown-item"
                          >
                            {subItem.name}
                          </Link>
                        )
                      ))}
                    </motion.div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="navbar-cta desktop-nav">
          <Link to="/contact" className="btn btn-primary btn-sm">
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mobile-nav"
        >
          {navItems.map((item, index) => (
            <div key={item.name} className="mobile-nav-item">
              {item.dropdown ? (
                <>
                  <button
                    className="mobile-nav-link"
                    onClick={() => handleMobileDropdownToggle(index)}
                  >
                    {item.name}
                    <FaChevronDown 
                      className={`dropdown-icon ${activeDropdown === index ? 'rotated' : ''}`} 
                    />
                  </button>
                  {activeDropdown === index && (
                    <div className="mobile-dropdown">
                      {item.dropdown.map((subItem) => (
                        subItem.path.includes('#') ? (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavClick(subItem.path)}
                            className="mobile-dropdown-item"
                          >
                            {subItem.name}
                          </button>
                        ) : (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="mobile-dropdown-item"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="mobile-cta">
            <Link to="/contact" className="btn btn-primary btn-sm">
              Get Quote
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
