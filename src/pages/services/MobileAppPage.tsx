import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../../App.css';

function MobileAppPage() {
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
              <motion.div className="service-badge" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Mobile App Development</motion.div>
              <h1>Mobile Apps That Users Love and Keep Coming Back To</h1>
              <p className="hero-subtitle">Your customers are on mobile. Build apps they'll actually use, recommend, and keep installed.</p>
              <motion.div className="hero-cta-group">
                <motion.button className="cta-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => window.location.href = '/#contact'}>Get Free Consultation</motion.button>
                <motion.button className="cta-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>View Portfolio</motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="problem-section">
          <div className="container">
            <motion.div className="problem-content" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2>The Mobile Problem: You're Missing Out</h2>
              <div className="problem-grid">
                <div className="problem-item">
                  <div className="problem-icon">📱</div>
                  <h3>No Mobile Presence</h3>
                  <p>68% of users prefer apps over websites. Without an app, you're invisible to mobile users.</p>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">😞</div>
                  <h3>Poor User Experience</h3>
                  <p>Generic apps that don't solve real problems get deleted within days.</p>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">💰</div>
                  <h3>High Development Costs</h3>
                  <p>Building separate iOS and Android apps doubles your development budget.</p>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">🔄</div>
                  <h3>Maintenance Nightmare</h3>
                  <p>Keeping two codebases updated and synced is expensive and time-consuming.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="solution-section">
          <div className="container">
            <motion.div className="solution-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2>Our Solution: Cross-Platform Apps That Work</h2>
              <p>One codebase, two platforms, unlimited possibilities</p>
            </motion.div>
            <div className="solution-features">
              <motion.div className="solution-feature" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="feature-icon-large">📱</div>
                <h3>Native Performance</h3>
                <p>React Native and Flutter apps that feel native on both iOS and Android.</p>
                <ul>
                  <li>60 FPS animations</li>
                  <li>Native API access</li>
                  <li>Platform-specific UI</li>
                  <li>App store optimization</li>
                </ul>
              </motion.div>
              <motion.div className="solution-feature" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="feature-icon-large">💰</div>
                <h3>Cost-Effective Development</h3>
                <p>Build once, deploy everywhere. Save 40% on development costs.</p>
                <ul>
                  <li>Single codebase</li>
                  <li>Faster time to market</li>
                  <li>Easier maintenance</li>
                  <li>Consistent UX</li>
                </ul>
              </motion.div>
              <motion.div className="solution-feature" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div className="feature-icon-large">🎨</div>
                <h3>User-Centered Design</h3>
                <p>Apps designed around your users' needs, not just features.</p>
                <ul>
                  <li>User research</li>
                  <li>Intuitive navigation</li>
                  <li>Onboarding flows</li>
                  <li>Accessibility compliance</li>
                </ul>
              </motion.div>
              <motion.div className="solution-feature" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <div className="feature-icon-large">🚀</div>
                <h3>App Store Optimization</h3>
                <p>Get discovered and downloaded by the right users.</p>
                <ul>
                  <li>Keyword optimization</li>
                  <li>Compelling screenshots</li>
                  <li>App store listings</li>
                  <li>Review management</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <motion.div className="cta-content" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <h2>Ready to Build Your Mobile App?</h2>
              <p>Let's discuss your app idea and create a roadmap to success.</p>
              <motion.button className="cta-primary large" onClick={() => window.location.href = '/#contact'} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Start Your Project</motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MobileAppPage;
