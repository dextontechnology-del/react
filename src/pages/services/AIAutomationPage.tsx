import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../../App.css';

function AIAutomationPage() {
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
              <motion.div className="service-badge" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>AI & Automation</motion.div>
              <h1>Automate Repetitive Tasks and Make Data-Driven Decisions</h1>
              <p className="hero-subtitle">Stop wasting time on manual work. Let AI handle the routine while you focus on growth.</p>
              <motion.div className="hero-cta-group">
                <motion.button className="cta-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => window.location.href = '/#contact'}>Explore AI Solutions</motion.button>
                <motion.button className="cta-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>See Use Cases</motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="problem-section">
          <div className="container">
            <motion.div className="problem-content" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2>The Automation Problem: You're Working Too Hard</h2>
              <div className="problem-grid">
                <div className="problem-item">
                  <div className="problem-icon">⏰</div>
                  <h3>Time-Consuming Tasks</h3>
                  <p>Your team spends hours on repetitive work that could be automated.</p>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">📊</div>
                  <h3>Data Overload</h3>
                  <p>Too much data, not enough insights. Decisions are made on gut feeling.</p>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">❌</div>
                  <h3>Human Error</h3>
                  <p>Manual processes lead to mistakes that cost time and money.</p>
                </div>
                <div className="problem-item">
                  <div className="problem-icon">📈</div>
                  <h3>Can't Scale</h3>
                  <p>As you grow, manual processes become bottlenecks.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="solution-section">
          <div className="container">
            <motion.div className="solution-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2>Our Solution: Intelligent Automation</h2>
              <p>AI-powered systems that work 24/7 to grow your business</p>
            </motion.div>
            <div className="solution-features">
              <motion.div className="solution-feature" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="feature-icon-large">🤖</div>
                <h3>AI Integration</h3>
                <p>Integrate ChatGPT, machine learning, and custom AI models into your workflows.</p>
                <ul>
                  <li>Chatbots & virtual assistants</li>
                  <li>Natural language processing</li>
                  <li>Image recognition</li>
                  <li>Predictive analytics</li>
                </ul>
              </motion.div>
              <motion.div className="solution-feature" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <div className="feature-icon-large">⚙️</div>
                <h3>Process Automation</h3>
                <p>Automate workflows from data entry to customer onboarding.</p>
                <ul>
                  <li>Workflow automation</li>
                  <li>API integrations</li>
                  <li>Task scheduling</li>
                  <li>Email automation</li>
                </ul>
              </motion.div>
              <motion.div className="solution-feature" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div className="feature-icon-large">📈</div>
                <h3>Data Analytics</h3>
                <p>Turn data into actionable insights with AI-powered analytics.</p>
                <ul>
                  <li>Business intelligence dashboards</li>
                  <li>Real-time reporting</li>
                  <li>Trend analysis</li>
                  <li>Custom metrics</li>
                </ul>
              </motion.div>
              <motion.div className="solution-feature" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                <div className="feature-icon-large">🔮</div>
                <h3>Machine Learning</h3>
                <p>Custom ML models that learn and improve over time.</p>
                <ul>
                  <li>Custom model training</li>
                  <li>Recommendation engines</li>
                  <li>Fraud detection</li>
                  <li>Demand forecasting</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <motion.div className="cta-content" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <h2>Ready to Automate Your Business?</h2>
              <p>Let's identify automation opportunities that will save you time and money.</p>
              <motion.button className="cta-primary large" onClick={() => window.location.href = '/#contact'} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Get Started</motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AIAutomationPage;
