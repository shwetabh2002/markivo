import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/common/Layout';
import { 
  FaHeart, FaEye, FaHandshake, FaRocket, FaUsers, FaChartLine, FaTrophy, 
  FaGlobe, FaLinkedin, FaTwitter, FaEnvelope, FaAward, FaLightbulb,
  FaCode, FaPalette, FaBullseye, FaShieldAlt
} from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaRocket />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative approaches to deliver exceptional results for our clients.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <FaHandshake />,
      title: 'Transparency',
      description: 'Open communication and honest reporting are at the core of our client relationships.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <FaHeart />,
      title: 'Results-Driven',
      description: 'Every strategy we implement is designed to deliver measurable growth and ROI for your business.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <FaEye />,
      title: 'Local-First',
      description: 'Deep understanding of the Indian market helps us create campaigns that truly resonate with your audience.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const teamMembers = [
    {
      name: 'Rohit Raj',
      position: 'Co-Founder & CEO',
      image: '/assets/Rohit.jpg',
      bio: 'Visionary leader with 8+ years of experience in digital marketing. Has helped 500+ businesses achieve remarkable growth and establish strong online presence.',
      expertise: ['Strategic Planning', 'Business Development', 'Client Relations'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'rohit@markivo.com'
      }
    },
    {
      name: 'Shwetabh Gupta',
      position: 'Co-Founder & CTO',
      image: null, // Remove photo
      bio: 'Tech innovator and strategic thinker with deep expertise in modern web technologies, mobile development, and digital transformation.',
      expertise: ['Full-Stack Development', 'Mobile Apps', 'Cloud Architecture'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'shwetabh@markivo.com'
      }
    },
    {
      name: 'Vivek Raj',
      position: 'Co-Founder & CMO',
      image: '/assets/Vivek.jpg',
      bio: 'Marketing strategist and brand visionary who combines creative thinking with data-driven insights to build compelling brand experiences and growth strategies.',
      expertise: ['Marketing Strategy', 'Brand Development', 'Growth Hacking'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'vivek@markivo.com'
      }
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <FaTrophy /> },
    { number: '150+', label: 'Happy Clients', icon: <FaUsers /> },
    { number: '98%', label: 'Client Satisfaction', icon: <FaHeart /> },
    { number: '5+', label: 'Years Experience', icon: <FaGlobe /> }
  ];

  const achievements = [
    {
      icon: <FaAward />,
      title: 'Industry Recognition',
      description: 'Awarded "Best Digital Marketing Agency" by Indian Business Awards 2023'
    },
    {
      icon: <FaChartLine />,
      title: 'Proven Results',
      description: 'Average 300% increase in client ROI within the first 6 months'
    },
    {
      icon: <FaGlobe />,
      title: 'Global Reach',
      description: 'Successfully launched campaigns across 15+ countries'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation Leader',
      description: 'Pioneered AI-driven marketing strategies for Indian market'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="hero-content text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaRocket />
              <span>About Markivo</span>
            </motion.div>
            <h1 className="hero-title">
              Transforming Businesses Through 
              <span className="text-gradient"> Digital Innovation</span>
            </h1>
            <p className="hero-subtitle">
              Empowering Indian businesses to thrive in the digital landscape through 
              innovative marketing solutions, cutting-edge technology, and strategic growth initiatives.
            </p>
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.slice(0, 3).map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-content">
            <motion.div 
              className="founder-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-subtitle">Our Story</p>
              <h2 className="section-title">Three Minds, One Vision - Building Success Since 2019</h2>
              <p className="founder-message">
                "Markivo was born from the shared vision of three friends who believed that Indian businesses 
                deserved world-class digital marketing solutions. Rohit brought his deep understanding of business 
                strategy and client relations, Shwetabh contributed his technical expertise in cutting-edge web 
                technologies, and Vivek added his creative marketing genius to the mix."
              </p>
              <p className="founder-message">
                "What started as late-night brainstorming sessions in a small flat has grown into a company 
                that has transformed over 50+ businesses. Our complementary skills - business leadership, 
                technology innovation, and marketing strategy - create a unique synergy that drives exceptional 
                results for our clients."
              </p>
              <p className="founder-message">
                "Today, we're proud to combine global best practices with deep local market insights, 
                delivering results that truly matter for Indian businesses in the digital age."
              </p>
              <div className="founder-signature">
                <strong>Rohit, Shwetabh & Vivek</strong>
                <span>Co-Founders, Markivo</span>
              </div>
            </motion.div>
            <motion.div 
              className="founder-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="founders-gallery">
                <div className="founder-photo">
                  <img 
                    src="/assets/Rohit.jpg" 
                    alt="Rohit Raj - Co-Founder & CEO"
                    onError={(e) => {
                      e.target.src = "https://ui-avatars.com/api/?name=Rohit+Raj&background=FF6B35&color=fff&size=300";
                    }}
                  />
                  <div className="photo-overlay">
                    <h4>Rohit Raj</h4>
                    <p>Co-Founder & CEO</p>
                  </div>
                </div>
                
                <div className="founder-photo">
                  <div className="photo-placeholder">
                    <div className="placeholder-avatar">
                      <span>SG</span>
                    </div>
                  </div>
                  <div className="photo-overlay">
                    <h4>Shwetabh Gupta</h4>
                    <p>Co-Founder & CTO</p>
                  </div>
                </div>
                
                <div className="founder-photo">
                  <img 
                    src="/assets/Vivek.jpg" 
                    alt="Vivek Raj - Co-Founder & CMO"
                    onError={(e) => {
                      e.target.src = "https://ui-avatars.com/api/?name=Vivek+Raj&background=FF6B35&color=fff&size=300";
                    }}
                  />
                  <div className="photo-overlay">
                    <h4>Vivek Raj</h4>
                    <p>Co-Founder & CMO</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-subtitle">Our Values</p>
            <h2 className="section-title">What Drives Us Forward</h2>
            <p className="section-description">
              These core values guide every decision we make and every strategy we implement for our clients.
            </p>
          </motion.div>
          
          <motion.div 
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="value-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className={`value-icon bg-gradient-to-r ${value.color}`}>
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" id="team">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-subtitle">Our Team</p>
            <h2 className="section-title">Meet the Experts Behind Your Success</h2>
            <p className="section-description">
              Our diverse team of marketing professionals, designers, and strategists work together 
              to deliver exceptional results for your business.
            </p>
          </motion.div>
          
          <motion.div 
            className="team-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="team-card"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="team-image">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=FF6B35&color=fff&size=300`;
                      }}
                    />
                  ) : (
                    <div className="team-placeholder">
                      <div className="placeholder-avatar">
                        <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                    </div>
                  )}
                  <div className="team-overlay">
                    <div className="social-links">
                      <a href={member.social.linkedin} className="social-link">
                        <FaLinkedin />
                      </a>
                      <a href={member.social.twitter} className="social-link">
                        <FaTwitter />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="social-link">
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-expertise">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="expertise-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-subtitle">Our Achievements</p>
            <h2 className="section-title">Milestones That Define Us</h2>
            <p className="section-description">
              Recognition and results that showcase our commitment to excellence and innovation.
            </p>
          </motion.div>
          
          <motion.div 
            className="achievements-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="achievement-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-showcase">
        <div className="container">
          <motion.div 
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="cta-text">
              <h2>Ready to Start Your Growth Journey?</h2>
              <p>
                Let's discuss how we can help transform your business with strategic digital marketing solutions 
                and cutting-edge technology.
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
    </Layout>
  );
};

export default About;
