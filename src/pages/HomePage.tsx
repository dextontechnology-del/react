import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import '../App.css';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Hansh Couture",
      description: "Elegant e-commerce platform for Indian and Western wear featuring curated collections, premium designs, and seamless shopping experience.",
      image: "/assets/Projects/HanshCoutureMainHome.png",
      logo: "/assets/Projects/Hansh_Couture_Main_Logo.avif",
      link: "https://hanshcouture.com/",
      tags: ["E-Commerce", "Fashion", "React", "Shopify"],
      color: "#d4a574"
    },
    {
      title: "AstroWorld",
      description: "Premium astrology services platform offering horoscope readings, birth chart analysis, and personalized astrological consultations.",
      image: "/assets/Projects/AstroWorldHome.png",
      logo: "/assets/Projects/AstroWorldLogo.png",
      link: "https://dexton-astroworld.vercel.app/",
      tags: ["Web App", "Astrology", "React", "API Integration"],
      color: "#6B46C1"
    },
    {
      title: "Shree Ganraya Events",
      description: "Professional event management services website showcasing corporate events, weddings, conferences with modern design.",
      image: "/assets/Projects/GanrayaEventHome.png",
      logo: "/assets/Projects/GANRAYA_EVNT_LOGO.png",
      link: "https://ganraya-events.vercel.app/",
      tags: ["Event Management", "Business", "React", "Booking System"],
      color: "#f00946"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

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
            <div className="header-logo">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                <img 
                  src="./assets/logo.png" 
                  alt="Dexton Technology" 
                  className="logo-image" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgNTAiPjx0ZXh0IHg9IjEwMCIgeT0iMzAiIGZvbnQtZmFtaWx5PUFyaWFsIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNGRkYiPkRleHRvbiBUZWNoPC90ZXh0Pjwvc3ZnPg=';
                  }}
                />
              </a>
            </div>

            <nav className={`site-navigation ${isMenuOpen ? 'active' : ''}`}>
              <ul className="nav-menu">
                {['home', 'about', 'services', 'projects', 'contact'].map((item, index) => (
                  <li key={item} className="nav-item">
                    <a 
                      href={`#${item}`}
                      className={`nav-link ${activeSection === item ? 'active' : ''}`}
                      onClick={(e) => { 
                        e.preventDefault(); 
                        scrollToSection(item);
                        setIsMenuOpen(false);
                      }}
                    >
                      <span className="link-text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                      <span className="link-underline"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <motion.button 
              className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </motion.button>
          </div>
        </motion.header>

        {/* Hero Section - Emotional Hook */}
        <section id="home" className="hero" ref={heroRef}>
          <motion.div 
            className="hero-background"
            style={{ y: heroY, opacity: heroOpacity }}
          />
          <div className="container">
            <motion.div 
              className="hero-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="hero-badge" variants={itemVariants}>
                <span className="pulse-dot"></span>
                <span>Trusted by 50+ Businesses Worldwide</span>
              </motion.div>
              
              <motion.h1 className="hero-title" variants={itemVariants}>
                Stop Losing Customers to 
                <span className="gradient-text"> Slow, Outdated</span> 
                <br />
                Technology. <span className="highlight-emotion">Win Them Back</span> Today.
              </motion.h1>
              
              <motion.p className="hero-subtitle" variants={itemVariants}>
                Every second your website loads slowly, you lose potential revenue. 
                We build <span className="highlight">lightning-fast, conversion-optimized</span> digital solutions 
                that turn visitors into customers—and customers into advocates.
              </motion.p>
              
              <motion.div 
                className="hero-cta-group" 
                variants={itemVariants}
              >
                <motion.button 
                  className="cta-primary"
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(79, 70, 229, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Your Free Consultation</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.button>
                
                <motion.button 
                  className="cta-secondary"
                  onClick={() => scrollToSection('services')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  <span>See How We Help</span>
                </motion.button>
              </motion.div>

              {/* Social Proof */}
              <motion.div className="hero-social-proof" variants={itemVariants}>
                <div className="proof-item">
                  <div className="proof-number">3x</div>
                  <div className="proof-label">More Leads</div>
                </div>
                <div className="proof-divider"></div>
                <div className="proof-item">
                  <div className="proof-number">50+</div>
                  <div className="proof-label">Happy Clients</div>
                </div>
                <div className="proof-divider"></div>
                <div className="proof-item">
                  <div className="proof-number">95%</div>
                  <div className="proof-label">Success Rate</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
        </section>

        {/* Problem-Solution Storytelling Section */}
        <ScrollStorySection />

        {/* Services Section - Redesigned */}
        <section id="services" className="services">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tagline">Our Solutions</span>
              <h2>Transform Your Business with Our Expertise</h2>
              <p className="section-subtitle">
                Each service is designed to solve real business problems and drive measurable results
              </p>
            </motion.div>

            <div className="services-grid">
              <ServiceCard
                icon="🌐"
                title="Web Development"
                description="Custom web applications that load in under 2 seconds and convert visitors into customers"
                features={["Progressive Web Apps", "E-commerce Solutions", "Performance Optimization"]}
                link="/web-development"
                color="#4f46e5"
                delay={0.1}
              />
              <ServiceCard
                icon="📱"
                title="Mobile App Development"
                description="Native and cross-platform apps that users love and keep coming back to"
                features={["iOS & Android", "React Native", "App Store Optimization"]}
                link="/mobile-app-development"
                color="#6366f1"
                delay={0.2}
                featured
              />
              <ServiceCard
                icon="🤖"
                title="AI & Automation"
                description="Intelligent systems that automate workflows and make data-driven decisions"
                features={["AI Integration", "Process Automation", "Machine Learning"]}
                link="/ai-automation"
                color="#8b5cf6"
                delay={0.3}
              />
              <ServiceCard
                icon="☁️"
                title="Cloud Services"
                description="Scalable cloud infrastructure that grows with your business"
                features={["Cloud Migration", "DevOps", "24/7 Monitoring"]}
                link="/cloud-services"
                color="#ec4899"
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-header">
              <span className="section-tagline">Who We Are</span>
              <h2>About Dexton Technology</h2>
              <p className="section-subtitle">Transforming ideas into digital reality with passion and precision</p>
            </div>

            <div className="about-content">
              <motion.div 
                className="about-visual"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="tech-showcase">
                  <div className="tech-orbit">
                    <div className="center-core">
                      <div className="core-inner"></div>
                      <div className="core-pulse"></div>
                    </div>
                    <div className="orbit-item orbit-1" data-tech="React">
                      <div className="tech-icon">⚛️</div>
                      <span className="tech-label">React</span>
                    </div>
                    <div className="orbit-item orbit-2" data-tech="Node">
                      <div className="tech-icon">🟢</div>
                      <span className="tech-label">Node.js</span>
                    </div>
                    <div className="orbit-item orbit-3" data-tech="Cloud">
                      <div className="tech-icon">☁️</div>
                      <span className="tech-label">Cloud</span>
                    </div>
                    <div className="orbit-item orbit-4" data-tech="AI">
                      <div className="tech-icon">🤖</div>
                      <span className="tech-label">AI/ML</span>
                    </div>
                    <div className="orbit-item orbit-5" data-tech="Mobile">
                      <div className="tech-icon">📱</div>
                      <span className="tech-label">Mobile</span>
                    </div>
                    <div className="orbit-item orbit-6" data-tech="Database">
                      <div className="tech-icon">🗄️</div>
                      <span className="tech-label">Database</span>
                    </div>
                  </div>
                  <div className="tech-stats">
                    <div className="tech-stat">
                      <span className="stat-value">50+</span>
                      <span className="stat-name">Projects</span>
                    </div>
                    <div className="tech-stat">
                      <span className="stat-value">15+</span>
                      <span className="stat-name">Technologies</span>
                    </div>
                    <div className="tech-stat">
                      <span className="stat-value">95%</span>
                      <span className="stat-name">Success</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="about-text"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="about-badges">
                  <div className="about-badge">
                    <span>🚀 Startup Since 2025</span>
                  </div>
                  <div className="about-badge">
                    <span>💡 Innovation Driven</span>
                  </div>
                </div>
                
                <h3>Empowering Businesses Through Digital Innovation</h3>
                
                <p className="lead">At Dexton Technology, we're not just another IT company - we're your digital transformation partners on a mission to revolutionize how businesses leverage technology for exponential growth.</p>
                
                <p className="description">Founded with a vision to bridge the gap between complex technology and business needs, we specialize in creating cutting-edge digital solutions that drive measurable results. Our team of passionate developers and designers work tirelessly to transform your ideas into powerful, user-centric applications.</p>
                
                <div className="about-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div>
                      <h4>Innovation First</h4>
                      <p>Cutting-edge solutions tailored to your unique business challenges</p>
                    </div>
                  </div>
                  
                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4>Rapid Delivery</h4>
                      <p>Agile development ensuring quick time-to-market for your projects</p>
                    </div>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4>Quality Assured</h4>
                      <p>Rigorous testing and best practices in every project we deliver</p>
                    </div>
                  </div>
                </div>

                <div className="about-cta">
                  <a href="#contact" className="cta-button primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Let's Work Together</a>
                  <a href="#projects" className="cta-button secondary" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>View Our Work</a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <div className="container">
            <div className="section-header">
              <h2>Featured Projects</h2>
              <p>Explore our latest work and digital innovations</p>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.a 
                  key={index} 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-card-link"
                  style={{ '--project-color': project.color } as React.CSSProperties}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="project-card">
                    <div className="project-image-container">
                      <div className="project-image-wrapper">
                        <img src={project.image} alt={project.title} className="project-screenshot" />
                        <div className="project-overlay">
                          <div className="project-content">
                            <div className="project-logo-wrapper">
                              <img src={project.logo} alt={`${project.title} Logo`} className="project-logo" />
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                              {project.tags.map((tag, tagIndex) => (
                                <span key={tagIndex} className="project-tag">{tag}</span>
                              ))}
                            </div>
                            <span className="project-link">
                              View Project <span className="arrow">→</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="project-info">
                      <div className="project-info-header">
                        <img src={project.logo} alt={`${project.title} Logo`} className="project-info-logo" />
                        <h3>{project.title}</h3>
                      </div>
                      <p>{project.description}</p>
                      <div className="project-tags-mini">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="tag-mini">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-header">
              <h2>Get In Touch</h2>
              <p className="section-subtitle">Have questions or ready to start your project? Reach out to us today.</p>
            </div>
            
            <div className="contact-content">
              <motion.div 
                className="contact-info-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="contact-info-content">
                  <h3>Contact Information</h3>
                  <div className="contact-details">
                    <div className="contact-detail-item">
                      <div className="contact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4>Email Us</h4>
                        <p>dextontechnology@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="contact-detail-item">
                      <div className="contact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div>
                        <h4>Call Us</h4>
                        <p>+91 7201060510</p>
                      </div>
                    </div>
                    
                    <div className="contact-detail-item">
                      <div className="contact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div>
                        <h4>Visit Us</h4>
                        <p>1064, Rajmahal Mall, Opp. Millenium Society,</p>
                        <p>Dindoli, Surat, Gujarat 395001</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="contact-social">
                    <h4>Connect With Us</h4>
                    <div className="social-icons">
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.form 
                className="contact-form"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3>Send Us a Message</h3>
                <p>We'll get back to you as soon as possible</p>
                
                <div className="form-group">
                  <input type="text" id="name" name="name" placeholder=" " required />
                  <label htmlFor="name">Your Name</label>
                </div>
                
                <div className="form-group">
                  <input type="email" id="email" name="email" placeholder=" " required />
                  <label htmlFor="email">Email Address</label>
                </div>
                
                <div className="form-group">
                  <input type="text" id="subject" name="subject" placeholder=" " />
                  <label htmlFor="subject">Subject (Optional)</label>
                </div>
                
                <div className="form-group">
                  <textarea id="message" name="message" rows={4} placeholder=" " required></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </motion.button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512,54.82,583,72.05c69.27,16,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#ffffff"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,141.56,70.24,6,9.95,10.75,20.62,14.5,31.46V0Z" opacity=".5" fill="#ffffff"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff"></path>
            </svg>
          </div>
          <div className="container">
            <div className="footer-content">
              <div className="footer-grid">
                <div className="footer-brand">
                  <div className="footer-logo">
                    <span className="company-name">Dexton Technology</span>
                  </div>
                  <p className="footer-about">Transforming businesses through innovative technology solutions and exceptional digital experiences.</p>
                  <div className="social-links">
                    <a href="#" className="social-link" aria-label="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="social-link" aria-label="Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="social-link" aria-label="LinkedIn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33 0-3.07-1.9-3.07-1.82 0-2.1 1.5-2.1 2.98v5.66H9.35V9h3.42v1.56h.05c.5-.9 1.6-1.85 3.5-1.85 3.7 0 4.13 2.2 4.13 5.14v6.6zM6.2 7.5a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM8.01 20.45H4.4V9h3.61v11.45z"></path>
                      </svg>
                    </a>
                    <a href="#" className="social-link" aria-label="Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <circle cx="12" cy="12" r="5"></circle>
                        <circle cx="18" cy="6" r="1"></circle>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="footer-contact">
                  <h4 className="footer-heading">Contact Us</h4>
                  <ul className="contact-info">
                    <li className="contact-item">
                      <div className="contact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <span>1064, Rajmahal Mall, Opp. Millenium Society, Dindoli, Surat, Gujarat 395001</span>
                    </li>
                    <li className="contact-item">
                      <div className="contact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div>
                        <div>+91 8780687178</div>
                        <div className="contact-subtext">Mon-Fri, 9am-6pm PST</div>
                      </div>
                    </li>
                    <li className="contact-item">
                      <div className="contact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <div>
                        <div>dextontechnology@gmail.com</div>
                        <div className="contact-subtext">We'll respond within 24 hours</div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="footer-links">
                  <h4 className="footer-heading">Quick Links</h4>
                  <div style={{display:'flex', gap:'40px', textAlign:'left'}}>
                  <ul>
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="footer-link">
                      <span className="link-icon">→</span>
                      <span>Home</span>
                    </a></li>
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="footer-link">
                      <span className="link-icon">→</span>
                      <span>About Us</span>
                    </a></li>
                    <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="footer-link">
                      <span className="link-icon">→</span>
                      <span>Services</span>
                    </a></li>
                    <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="footer-link">
                      <span className="link-icon">→</span>
                      <span>Projects</span>
                    </a></li>
                    </ul>
                    <ul>
                    <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="footer-link">
                      <span className="link-icon">→</span>
                      <span>Contact</span>
                    </a></li>
                    <li><a href="#" className="footer-link">
                      <span className="link-icon">→</span>
                      <span>Case Studies</span>
                    </a></li>
                    <li><a href="#" className="footer-link">
                      <span className="link-icon">→</span>
                      <span>Blog</span>
                    </a></li>
                  </ul>
                  </div>
                </div>
                
                <div className="footer-newsletter">
                  <h4 className="footer-heading">Stay Updated</h4>
                  <p className="newsletter-text">Subscribe to our newsletter for the latest updates, news, and exclusive offers.</p>
                  <form className="newsletter-form">
                    <div className="input-group">
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="newsletter-input"
                        required 
                      />
                      <button type="submit" className="subscribe-btn">
                        <span className="btn-text">Subscribe</span>
                        <span className="btn-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <p className="privacy-note">We respect your privacy. Unsubscribe at any time.</p>
                  </form>
                </div>
              </div>
              
              <div className="footer-divider"></div>
              
              <div className="footer-bottom">
                <div className="footer-legal">
                  <p className="copyright">© {new Date().getFullYear()} Dexton Technology. All rights reserved.</p>
                  <div className="legal-links">
                    <a href="#" className="legal-link">Privacy Policy</a>
                    <span className="divider">•</span>
                    <a href="#" className="legal-link">Terms of Service</a>
                    <span className="divider">•</span>
                    <a href="#" className="legal-link">Cookie Policy</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Scroll-based Storytelling Component
function ScrollStorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="story-section" ref={ref}>
      <div className="container">
        <motion.div
          className="story-content"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="story-step">
            <div className="step-number">01</div>
            <h3>The Problem</h3>
            <p>Your website loads slowly, looks outdated, and doesn't convert visitors into customers. Every day you wait, competitors are winning your potential clients.</p>
          </div>
          
          <div className="story-step">
            <div className="step-number">02</div>
            <h3>Our Solution</h3>
            <p>We build modern, fast-loading digital solutions that not only look stunning but are optimized for conversions and user experience.</p>
          </div>
          
          <div className="story-step">
            <div className="step-number">03</div>
            <h3>The Result</h3>
            <p>3x more leads, faster load times, and a digital presence that makes your competitors jealous. All backed by data and measurable results.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Service Card Component
function ServiceCard({ icon, title, description, features, link, color, delay = 0, featured = false }: {
  icon: string;
  title: string;
  description: string;
  features: string[];
  link: string;
  color: string;
  delay?: number;
  featured?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`service-card ${featured ? 'featured' : ''}`}
      style={{ '--service-color': color } as React.CSSProperties}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="service-icon">
        <div className="icon-bg">
          <span className="service-emoji">{icon}</span>
        </div>
        <div className="pulse"></div>
      </div>
      <h3>{title}</h3>
      <div className="service-features">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <span className="check-icon">✓</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <p>{description}</p>
      <Link to={link} className="learn-more">
        <span>Explore {title}</span>
        <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </motion.div>
  );
}

export default HomePage;
