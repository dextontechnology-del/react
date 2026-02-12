import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './App.css';
import HomePage from './pages/HomePage';
import WebDevelopmentPage from './pages/services/WebDevelopmentPage';
import MobileAppPage from './pages/services/MobileAppPage';
import AIAutomationPage from './pages/services/AIAutomationPage';
import CloudServicesPage from './pages/services/CloudServicesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/mobile-app-development" element={<MobileAppPage />} />
        <Route path="/ai-automation" element={<AIAutomationPage />} />
        <Route path="/cloud-services" element={<CloudServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
