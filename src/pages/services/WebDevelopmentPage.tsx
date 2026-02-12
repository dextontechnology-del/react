import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import '../../App.css';

function WebDevelopmentPage() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="main-container">
      <div className="app">
        {/* Navigation */}
        <motion.header 
          className={`main-header ${scrolled ? 'scrolled' : ''}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="header-container">
            <Link to="/" className="header-logo">
              <img src="./assets/logo.png" alt="Dexton Technology" className="logo-image" />
            </Link>
            <nav className="site-navigation">
              <ul className="nav-menu">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/#services" className="nav-link">Services</Link></li>
                <li><Link to="/#contact" className="nav-link">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </motion.header>

        {/* Hero Section */}
        <section className="service-hero" ref={heroRef}>
          <motion.div className="hero-background" style={{ y: heroY }} />
          <div className="container">
            <motion.div
              className="service-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div className="service-badge" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                Web Development
              </motion.div>
              <h1>Web Development That Converts Visitors Into Customers</h1>
              <p className="hero-subtitle">
                Stop losing potential customers to slow, outdated websites. We build lightning-fast, 
                conversion-optimized web applications that turn visitors into loyal customers.
              </p>
              <motion.div className="hero-cta-group">
                <motion.button 
                  className="cta-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/#contact'}
                >
                  Get Free Consultation
                </motion.button>
                <motion.button 
                  className="cta-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Studies
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="problem-section">
          <div className="container">
            <motion.div
              className="problem-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>The Problem: Your Website Is Costing You Money</h2>
              <div className="problem-grid">
                <div className="problem-item">
                  <div className="problem-icon">⏱️</div>
                  <h3>Slow Load Times</h3>
                  <p>53% of visitors abandon sites that take more than 3 seconds to load. Every second costs you customers.</p>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">📱</div>
                  <h3>Poor Mobile Experience</h3>
                  <p>61% of users won't return to a site with poor mobile UX. You're losing mobile traffic.</p>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">📉</div>
                  <h3>Low Conversion Rates</h3>
                  <p>Your website isn't optimized for conversions. Visitors leave without taking action.</p>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">🔧</div>
                  <h3>Outdated Technology</h3>
                  <p>Old code, security vulnerabilities, and maintenance nightmares slow you down.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="solution-section">
          <div className="container">
            <motion.div
              className="solution-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Our Solution: Modern Web Development That Works</h2>
              <p>We don't just build websites—we build conversion machines</p>
            </motion.div>

            <div className="solution-features">
              <motion.div
                className="solution-feature"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="feature-icon-large">⚡</div>
                <h3>Lightning-Fast Performance</h3>
                <p>We optimize every aspect of your site for speed. Average load times under 2 seconds, 
                resulting in 40% better conversion rates.</p>
                <ul>
                  <li>Code optimization and minification</li>
                  <li>CDN integration</li>
                  <li>Image optimization</li>
                  <li>Lazy loading</li>
                </ul>
              </motion.div>

              <motion.div
                className="solution-feature"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="feature-icon-large">📱</div>
                <h3>Mobile-First Design</h3>
                <p>Responsive design that works flawlessly on all devices. Mobile users convert just as well as desktop users.</p>
                <ul>
                  <li>Progressive Web Apps (PWA)</li>
                  <li>Touch-optimized interfaces</li>
                  <li>Mobile performance optimization</li>
                  <li>Cross-browser compatibility</li>
                </ul>
              </motion.div>

              <motion.div
                className="solution-feature"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="feature-icon-large">🎯</div>
                <h3>Conversion Optimization</h3>
                <p>Every element is designed to guide visitors toward your goals. A/B tested layouts that maximize conversions.</p>
                <ul>
                  <li>Strategic CTA placement</li>
                  <li>User journey optimization</li>
                  <li>Form optimization</li>
                  <li>Analytics integration</li>
                </ul>
              </motion.div>

              <motion.div
                className="solution-feature"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="feature-icon-large">🔒</div>
                <h3>Modern Tech Stack</h3>
                <p>Built with the latest technologies for security, scalability, and maintainability.</p>
                <ul>
                  <li>React, Next.js, Vue.js</li>
                  <li>Node.js backend</li>
                  <li>Cloud hosting</li>
                  <li>CI/CD pipelines</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="services-offered">
          <div className="container">
            <motion.div
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>What We Build</h2>
              <p>Comprehensive web solutions for every business need</p>
            </motion.div>

            <div className="services-list">
              <motion.div
                className="service-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3>Custom Web Applications</h3>
                <p>Tailored solutions built specifically for your business processes and workflows.</p>
              </motion.div>
              <motion.div
                className="service-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3>E-commerce Platforms</h3>
                <p>Full-featured online stores with payment integration, inventory management, and analytics.</p>
              </motion.div>
              <motion.div
                className="service-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3>Progressive Web Apps</h3>
                <p>Web apps that feel like native apps, with offline capabilities and push notifications.</p>
              </motion.div>
              <motion.div
                className="service-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3>Website Redesigns</h3>
                <p>Transform your existing site into a modern, high-converting powerhouse.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <motion.div
              className="cta-content"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2>Ready to Transform Your Web Presence?</h2>
              <p>Join 50+ businesses that have increased their leads by 3x with our web development services.</p>
              <motion.button
                className="cta-primary large"
                onClick={() => window.location.href = '/#contact'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Free Consultation
              </motion.button>
              <p className="cta-note">No obligation • Free quote • Response within 24 hours</p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WebDevelopmentPage;
