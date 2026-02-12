import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../../App.css';

function CloudServicesPage() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="main-container">
      <div className="app">
        <motion.header className={`main-header ${scrolled ? 'scrolled' : ''}`} initial={{ y: -100 }} animate={{ y: 0 }}>
          <div className="header-container">
            <Link to="/" className="header-logo"><img src="./assets/logo.png" alt="Dexton Technology" className="logo-image" /></Link>
            <nav className="site-navigation">
              <ul className="nav-menu">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/#services" className="nav-link">Services</Link></li>
                <li><Link to="/#contact" className="nav-link">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </motion.header>

        <section className="service-hero" ref={heroRef}>
          <motion.div className="hero-background" style={{ y: heroY }} />
          <div className="container">
            <motion.div className="service-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <motion.div className="service-badge" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Cloud Services</motion.div>
              <h1>Scalable Cloud Infrastructure That Grows With Your Business</h1>
              <p className="hero-subtitle">Stop worrying about servers crashing. Move to the cloud and scale effortlessly.</p>
              <motion.div className="hero-cta-group">
                <motion.button className="cta-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => window.location.href = '/#contact'}>Migrate to Cloud</motion.button>
                <motion.button className="cta-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Learn More</motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="problem-section">
          <div className="container">
            <motion.div className="problem-content" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2>The Infrastructure Problem: You're Limited by Hardware</h2>
              <div className="problem-grid">
                <div className="problem-item">
                  <div className="problem-icon">💸</div>
                  <h3>High Infrastructure Costs</h3>
                  <p>Buying and maintaining servers costs thousands monthly, even when idle.</p>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">📉</div>
                  <h3>Downtime Issues</h3>
                  <p>Server crashes mean lost revenue and frustrated customers.</p>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">🔒</div>
                  <h3>Security Concerns</h3>
                  <p>On-premise servers are vulnerable to attacks and data loss.</p>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">📊</div>
                  <h3>Can't Scale</h3>
                  <p>Traffic spikes crash your site. You can't scale up fast enough.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="solution-section">
          <div className="container">
            <motion.div className="solution-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2>Our Solution: Cloud Infrastructure That Works</h2>
              <p>Scalable, secure, and cost-effective cloud solutions</p>
            </motion.div>
            <div className="solution-features">
              <motion.div className="solution-feature" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="feature-icon-large">☁️</div>
                <h3>Cloud Migration</h3>
                <p>Seamlessly move your infrastructure to AWS, Azure, or GCP.</p>
                <ul>
                  <li>Zero-downtime migration</li>
                  <li>Data backup & recovery</li>
                  <li>Cost optimization</li>
                  <li>Performance monitoring</li>
                </ul>
              </motion.div>
              <motion.div className="solution-feature" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="feature-icon-large">🚀</div>
                <h3>DevOps & CI/CD</h3>
                <p>Automate deployments and streamline your development workflow.</p>
                <ul>
                  <li>CI/CD pipelines</li>
                  <li>Container orchestration</li>
                  <li>Infrastructure as code</li>
                  <li>Automated testing</li>
                </ul>
              </motion.div>
              <motion.div className="solution-feature" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div className="feature-icon-large">🔒</div>
                <h3>Security & Compliance</h3>
                <p>Enterprise-grade security that protects your data 24/7.</p>
                <ul>
                  <li>SSL certificates</li>
                  <li>Firewall configuration</li>
                  <li>Backup strategies</li>
                  <li>Compliance audits</li>
                </ul>
              </motion.div>
              <motion.div className="solution-feature" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <div className="feature-icon-large">📊</div>
                <h3>24/7 Monitoring</h3>
                <p>Proactive monitoring and support to prevent issues before they happen.</p>
                <ul>
                  <li>Uptime monitoring</li>
                  <li>Performance alerts</li>
                  <li>Automated scaling</li>
                  <li>24/7 support</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <motion.div className="cta-content" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <h2>Ready to Move to the Cloud?</h2>
              <p>Let's assess your infrastructure and create a migration plan.</p>
              <motion.button className="cta-primary large" onClick={() => window.location.href = '/#contact'} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Get Free Assessment</motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CloudServicesPage;
