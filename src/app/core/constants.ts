import { PortfolioDataService } from './portfolio-data.service';

// Legacy constants - will be replaced by PortfolioDataService
export const PORTFOLIO_CONSTANTS = {
  personalInfo: {
    name: 'Your Name',
    title: 'Full Stack Developer',
    email: 'your.email@example.com',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    cv: '/assets/cv.pdf'
  },
  navigation: [
    { path: '/', label: 'About', icon: 'home' },
    { path: '/about', label: 'About', icon: 'person' },
    { path: '/projects', label: 'Projects', icon: 'work' },
    { path: '/experience', label: 'Experience', icon: 'timeline' },
    { path: '/contact', label: 'Contact', icon: 'mail' }
  ],
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:your.email@example.com', icon: 'email' }
  ]
};

// Configuration constants
export const APP_CONFIG = {
  name: 'Portfolio',
  version: '1.0.0',
  author: 'Your Name',
  description: 'Professional portfolio website',
  keywords: ['portfolio', 'developer', 'designer', 'full-stack'],
  social: {
    twitter: '@yourusername',
    github: 'yourusername',
    linkedin: 'yourprofile'
  },
  contact: {
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA'
  },
  seo: {
    title: 'Your Name - Full Stack Developer',
    description: 'Professional portfolio showcasing my work in full-stack development, UI/UX design, and digital innovation.',
    image: '/assets/images/og-image.jpg',
    url: 'https://yourname.com'
  }
};
