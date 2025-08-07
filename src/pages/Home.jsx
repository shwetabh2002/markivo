import React from 'react';
import Hero from '../components/common/Hero';
import ServicesSection from '../components/common/ServicesSection';
import TestimonialsSection from '../components/common/TestimonialsSection';
import Layout from '../components/common/Layout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaTrophy, FaUsers, FaGlobe, FaRocket, FaChartLine, FaBullseye, FaLightbulb, FaMapMarkedAlt, FaShieldAlt, FaCogs, FaChartBar } from 'react-icons/fa';
import { 
  WHAT_WE_DO, 
  WHY_CHOOSE_US, 
  PORTFOLIO, 
  BUTTONS,
  HERO_SECTION 
} from '../constants/content';

const Home = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Fashion Store',
      category: 'Web Development',
      image: '/assets/portfolio-1.jpg',
      description: 'Complete e-commerce solution with 300% increase in sales'
    },
    {
      id: 2,
      title: 'Tech Startup SEO',
      category: 'SEO',
      image: '/assets/portfolio-2.jpg',
      description: 'Achieved #1 rankings for 50+ keywords in 6 months'
    },
    {
      id: 3,
      title: 'Healthcare Brand Identity',
      category: 'Branding',
      image: '/assets/portfolio-3.jpg',
      description: 'Complete rebrand that increased trust and credibility'
    },
    {
      id: 4,
      title: 'Restaurant PPC Campaign',
      category: 'PPC',
      image: '/assets/portfolio-4.jpg',
      description: '500% ROI with targeted Google Ads campaigns'
    }
  ];

  const stats = [
    { number: HERO_SECTION.STATS.PROJECTS, label: HERO_SECTION.STATS.PROJECTS_LABEL, icon: <FaTrophy /> },
    { number: '150+', label: 'Happy Clients', icon: <FaUsers /> },
    { number: HERO_SECTION.STATS.CLIENTS, label: HERO_SECTION.STATS.CLIENTS_LABEL, icon: <FaCheckCircle /> },
    { number: '50+', label: 'Team Members', icon: <FaGlobe /> }
  ];

  const whatWeDo = [
    {
      icon: <FaRocket />,
      title: WHAT_WE_DO.ITEMS[0].TITLE,
      description: WHAT_WE_DO.ITEMS[0].DESCRIPTION,
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <FaChartLine />,
      title: WHAT_WE_DO.ITEMS[1].TITLE,
      description: WHAT_WE_DO.ITEMS[1].DESCRIPTION,
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <FaBullseye />,
      title: WHAT_WE_DO.ITEMS[2].TITLE,
      description: WHAT_WE_DO.ITEMS[2].DESCRIPTION,
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <FaLightbulb />,
      title: WHAT_WE_DO.ITEMS[3].TITLE,
      description: WHAT_WE_DO.ITEMS[3].DESCRIPTION,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const whyChooseUs = [
    {
      title: WHY_CHOOSE_US.ITEMS[0].TITLE,
      description: WHY_CHOOSE_US.ITEMS[0].DESCRIPTION,
      icon: <FaMapMarkedAlt />,
      color: WHY_CHOOSE_US.ITEMS[0].COLOR,
      delay: WHY_CHOOSE_US.ITEMS[0].DELAY
    },
    {
      title: WHY_CHOOSE_US.ITEMS[1].TITLE,
      description: WHY_CHOOSE_US.ITEMS[1].DESCRIPTION,
      icon: <FaTrophy />,
      color: WHY_CHOOSE_US.ITEMS[1].COLOR,
      delay: WHY_CHOOSE_US.ITEMS[1].DELAY
    },
    {
      title: WHY_CHOOSE_US.ITEMS[2].TITLE,
      description: WHY_CHOOSE_US.ITEMS[2].DESCRIPTION,
      icon: <FaCogs />,
      color: WHY_CHOOSE_US.ITEMS[2].COLOR,
      delay: WHY_CHOOSE_US.ITEMS[2].DELAY
    },
    {
      title: WHY_CHOOSE_US.ITEMS[3].TITLE,
      description: WHY_CHOOSE_US.ITEMS[3].DESCRIPTION,
      icon: <FaChartBar />,
      color: WHY_CHOOSE_US.ITEMS[3].COLOR,
      delay: WHY_CHOOSE_US.ITEMS[3].DELAY
    }
  ];

  // Animation variants - SIMPLIFIED FOR PERFORMANCE
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05 // Reduced from 0.1
      }
    }
};

  const itemVariants = {
  hidden: {
    opacity: 0,
      y: 20, // Reduced from 50
      scale: 0.95 // Reduced from 0.8
  },
  visible: {
    opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3, // Reduced from 0.6
        ease: "easeOut" // Simplified easing
      }
    }
  };

  const cardVariants = {
    hidden: { 
    opacity: 0,
      y: 30, // Reduced from 100
      rotate: 0 // Removed rotation
    },
    visible: {
      opacity: 1,
      y: 0,
    rotate: 0,
      transition: {
        duration: 0.4, // Reduced from 0.8
        ease: "easeOut" // Simplified easing
      }
    }
};

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 }, // Reduced from 0.8
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3, // Reduced from 0.5
        ease: "easeOut"
      }
    }
  };

  return (
    <Layout heroMode={true}>
      {/* Hero Section */}
      <Hero />

      {/* What We Do Section */}
      <section className="section what-we-do-section">
        <div className="container">
          <motion.div 
            className="section-header text-center mb-16"
            initial={{ opacity: 0, y: 20 }} // Reduced from 30
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }} // Reduced trigger area
            transition={{ duration: 0.3 }} // Reduced from 0.6
          >
            <p className="section-subtitle">{WHAT_WE_DO.SECTION_TITLE}</p>
            <h2 className="section-title">{WHAT_WE_DO.SECTION_SUBTITLE}</h2>
            <p className="section-description">
              {WHAT_WE_DO.SECTION_DESCRIPTION}
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-2 lg:grid-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }} // Reduced trigger area
          >
            {whatWeDo.map((item, index) => (
              <motion.div 
                key={index} 
                className="what-we-do-card"
                variants={itemVariants}
                // Removed whileHover to reduce lag
              >
                <div className="what-we-do-icon">
                  {item.icon}
                </div>
                <h3 className="what-we-do-title">{item.title}</h3>
                <p className="what-we-do-description">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-sm stats-section">
        <div className="container">
          <motion.div 
            className="grid grid-4 stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-card"
                variants={statsVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
      </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <section className="section why-choose-section">
        <div className="container">
          <motion.div 
            className="section-header text-center mb-16"
            initial={{ opacity: 0, y: 20 }} // Reduced from 30
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }} // Reduced trigger area
            transition={{ duration: 0.3 }} // Reduced from 0.6
          >
            <p className="section-subtitle">{WHY_CHOOSE_US.SECTION_TITLE}</p>
            <h2 className="section-title">{WHY_CHOOSE_US.SECTION_SUBTITLE}</h2>
            <p className="section-description">
              {WHY_CHOOSE_US.SECTION_DESCRIPTION}
            </p>
          </motion.div>
          
          <motion.div 
            className="why-choose-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }} // Reduced trigger area
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="why-choose-card"
                variants={itemVariants}
                // Removed complex whileHover to reduce lag
              >
                <div className="card-background">
                  <div className="gradient-overlay"></div>
                  <div className="pattern-overlay"></div>
                </div>
                <div className="card-content">
                  <div className="icon-container">
                    <div className="icon-wrapper">
                      <span className="feature-icon-large">{item.icon}</span>
                    </div>
                    <div className="icon-glow"></div>
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                  <div className="card-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="card-border"></div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="why-choose-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="cta-card">
              <h3>{WHY_CHOOSE_US.CTA.TITLE}</h3>
              <p>{WHY_CHOOSE_US.CTA.DESCRIPTION}</p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                {WHY_CHOOSE_US.CTA.BUTTON_TEXT}
              </Link>
            </div>
          </motion.div>
              </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="section portfolio-preview">
        <div className="container">
          <motion.div 
            className="section-header text-center mb-16"
            initial={{ opacity: 0, y: 20 }} // Reduced from 30
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }} // Reduced trigger area
            transition={{ duration: 0.3 }} // Reduced from 0.6
          >
            <p className="section-subtitle">{PORTFOLIO.SECTION_TITLE}</p>
            <h2 className="section-title">{PORTFOLIO.SECTION_SUBTITLE}</h2>
            <p className="section-description">
              {PORTFOLIO.SECTION_DESCRIPTION}
              </p>
          </motion.div>
          
                  <motion.div
            className="grid grid-2 lg:grid-4 portfolio-grid"
            variants={containerVariants}
                    initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }} // Reduced trigger area
          >
            {portfolioItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="portfolio-card"
                variants={itemVariants}
                // Removed whileHover to reduce lag
              >
                <div className="portfolio-image">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/400/300?random=${item.id}`;
                    }}
                  />
                  <div className="portfolio-overlay">
                    <div className="portfolio-category">{item.category}</div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{item.title}</h3>
                  <p className="portfolio-description">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/portfolio" className="btn btn-primary">
              {PORTFOLIO.CTA_TEXT} <FaArrowRight />
            </Link>
                  </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 20 }} // Reduced from 30
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }} // Reduced trigger area
            transition={{ duration: 0.3 }} // Reduced from 0.6
          >
            <div className="cta-text">
              <h2>Ready to Transform Your Digital Presence?</h2>
              <p>
                Let's discuss how we can help your business achieve remarkable growth through strategic digital marketing.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Free Consultation
              </Link>
              <Link to="/portfolio" className="btn btn-secondary btn-lg">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <motion.div 
            className="section-header text-center mb-16"
            initial={{ opacity: 0, y: 20 }} // Reduced from 30
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }} // Reduced trigger area
            transition={{ duration: 0.3 }} // Reduced from 0.6
          >
            <p className="section-subtitle">Our Process</p>
            <h2 className="section-title">How We Drive Your Success</h2>
          </motion.div>
          
          <motion.div 
            className="process-steps"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px" }} // Reduced trigger area
          >
            <motion.div 
              className="process-step"
              variants={itemVariants}
              // Removed whileHover to reduce lag
            >
              <div className="step-number">01</div>
              <h3>Strategy & Planning</h3>
              <p>We analyze your business, competitors, and market to create a comprehensive digital strategy.</p>
            </motion.div>
            <motion.div 
              className="process-step"
              variants={itemVariants}
              // Removed whileHover to reduce lag
            >
              <div className="step-number">02</div>
              <h3>Implementation</h3>
              <p>Our expert team executes the strategy using cutting-edge tools and proven methodologies.</p>
            </motion.div>
            <motion.div 
              className="process-step"
              variants={itemVariants}
              // Removed whileHover to reduce lag
            >
              <div className="step-number">03</div>
              <h3>Optimization</h3>
              <p>We continuously monitor, analyze, and optimize campaigns for maximum ROI and performance.</p>
            </motion.div>
            <motion.div 
              className="process-step"
              variants={itemVariants}
              // Removed whileHover to reduce lag
            >
              <div className="step-number">04</div>
              <h3>Growth & Scale</h3>
              <p>As your business grows, we scale our strategies to maintain momentum and achieve bigger goals.</p>
            </motion.div>
          </motion.div>
      </div>
      </section>
    </Layout>
  );
};

export default Home;
