# Portfolio Website

A sophisticated, professional, and fully responsive Angular portfolio website with a minimalist design, card-based layout, and centralized content management system.

## ✨ Features

- **🎨 Sophisticated Design**: Clean, minimalist design with card-based layouts and professional aesthetics
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices with mobile-first approach
- **🌓 Theme Support**: Light and dark themes with smooth transitions and theme toggle
- **🧭 Fixed Sidebar Navigation**: Professional sidebar with organized sections and smooth navigation
- **📄 Multiple Pages**: Home, About, Projects, Experience, and Contact pages
- **🎯 Interactive Components**: Hover effects, smooth animations, and card-based layouts
- **♿ Accessibility**: ARIA labels, semantic HTML, keyboard navigation, and screen reader support
- **📊 Centralized Content Management**: JSON-based content system for easy maintenance
- **🕒 Dynamic Content**: Time-based greetings with regional awareness
- **🚀 Static Website**: No backend required, fully static deployment ready

## 📄 Pages

- **🏠 Home**: Dynamic greeting with time-based messages, bio section, and project showcases with card-based layouts
- **👤 About**: Comprehensive personal information, skills categorization, certifications, and professional summary
- **💼 Projects**: Sophisticated project showcase with categories (Finance, Web Interface, Enterprise) and detailed project information
- **📈 Experience**: Timeline of work experience, education, certifications, and core competencies
- **📞 Contact**: Contact information, social links, enhanced contact form, and professional references

## 🛠️ Technologies Used

- **Angular 17** (Standalone Components)
- **TypeScript** (Type-safe development)
- **SCSS** (Advanced styling with variables and mixins)
- **CSS Custom Properties** (Dynamic theming)
- **CSS Grid & Flexbox** (Modern layout systems)
- **RxJS** (Reactive programming)
- **JSON** (Content management)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📊 Content Management System

The portfolio uses a centralized JSON-based content management system for easy maintenance and updates.

### 📁 Content Files

All content is stored in `src/assets/data/`:

- **`personal-info.json`**: Personal information, contact details, and social links
- **`projects.json`**: Project portfolio with categories, descriptions, and metadata
- **`experience.json`**: Work experience, education, certifications, and skills

### 🔧 Content Service

The `PortfolioDataService` automatically loads and provides content to all components:

```typescript
// Example usage in components
constructor(private dataService: PortfolioDataService) {
  this.personalInfo$ = this.dataService.personalInfo$;
  this.projects$ = this.dataService.projects$;
  this.experience$ = this.dataService.experience$;
}
```

## 🎨 Customization

### Personal Information

Update your personal information in `src/assets/data/personal-info.json`:

```json
{
  "name": "Your Name",
  "title": "Your Professional Title",
  "email": "your.email@example.com",
  "phone": "+1-234-567-8900",
  "location": "City, Country",
  "bio": "Your professional bio...",
  "summary": "Brief professional summary...",
  "avatar": "/assets/images/profile.jpg",
  "resume": "/assets/cv.pdf",
  "socialLinks": [
    {
      "name": "GitHub",
      "url": "https://github.com/yourusername"
    },
    {
      "name": "LinkedIn", 
      "url": "https://linkedin.com/in/yourprofile"
    }
  ]
}
```

### Projects

Add your projects in `src/assets/data/projects.json`:

```json
{
  "projects": [
    {
      "id": "project-1",
      "title": "Project Name",
      "subtitle": "Project Subtitle",
      "category": "WEB INTERFACE",
      "categoryNumber": "01",
      "description": "Brief project description...",
      "longDescription": "Detailed project description...",
      "image": "/assets/images/project1.jpg",
      "technologies": ["Angular", "TypeScript", "SCSS"],
      "liveUrl": "https://project-demo.com",
      "githubUrl": "https://github.com/username/project",
      "featured": true,
      "date": "2024",
      "company": "Company Name",
      "role": "Your Role",
      "duration": "6 months",
      "achievements": ["Achievement 1", "Achievement 2"],
      "challenges": ["Challenge 1", "Challenge 2"]
    }
  ]
}
```

### Experience

Update your work experience in `src/assets/data/experience.json`:

```json
{
  "workExperience": [
    {
      "company": "Company Name",
      "position": "Your Position",
      "duration": "2020 - Present",
      "location": "City, Country",
      "description": "Job description...",
      "achievements": ["Achievement 1", "Achievement 2"],
      "technologies": ["Technology 1", "Technology 2"]
    }
  ],
  "education": [
    {
      "institution": "University Name",
      "degree": "Bachelor of Science",
      "field": "Computer Science",
      "duration": "2016 - 2020",
      "location": "City, Country"
    }
  ],
  "certifications": [
    {
      "name": "Certification Name",
      "issuer": "Issuing Organization",
      "date": "2024",
      "certificateId": "CERT-123456"
    }
  ],
  "skills": {
    "testing": ["Manual Testing", "Automated Testing"],
    "tools": ["Selenium", "Postman", "JIRA"],
    "databases": ["MySQL", "PostgreSQL"],
    "languages": ["JavaScript", "Python"],
    "methodologies": ["Agile", "Scrum"],
    "spokenLanguages": ["English", "Spanish"]
  },
  "interests": ["Interest 1", "Interest 2"]
}
```

### Themes

Customize themes in `src/assets/themes/theme.config.ts`:

```typescript
export const ThemeConfig = {
  fonts: {
    primary: 'Inter, Helvetica Neue, Arial, sans-serif',
    secondary: 'Georgia, serif'
  },
  fontSizes: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.5rem',
    body: '1rem',
    small: '0.875rem'
  },
  colors: {
    light: {
      background: "#FFFFFF",
      primaryText: "#111216",
      secondaryText: "#6B7280",
      accent: "#3B82F6",
      sidebar: "#F5F3F0",
      border: "#E5E7EB",
      hover: "#F9FAFB"
    },
    dark: {
      background: "#111216",
      primaryText: "#FFFFFF",
      secondaryText: "#9CA3AF",
      accent: "#60A5FA",
      sidebar: "#1F2937",
      border: "#374151",
      hover: "#1F2937"
    }
  }
};
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/              # Reusable UI components
│   │   ├── navbar/             # Fixed sidebar navigation
│   │   ├── footer/             # Minimal footer
│   │   ├── project-card/       # Project display component
│   │   └── section-header/     # Section headers
│   ├── core/                   # Core services & utilities
│   │   ├── theme.service.ts    # Theme management
│   │   ├── portfolio-data.service.ts # Content management
│   │   └── constants.ts        # App constants
│   ├── pages/                  # Main sections
│   │   ├── home/               # Homepage with dynamic content
│   │   ├── about/              # About page with profile
│   │   ├── projects/           # Project showcase
│   │   ├── experience/         # Experience timeline
│   │   └── contact/            # Contact information
│   ├── shared/                 # Shared models & helpers
│   │   └── models/             # TypeScript interfaces
│   └── app.routes.ts           # Application routing
├── assets/
│   ├── data/                   # Content management files
│   │   ├── personal-info.json  # Personal information
│   │   ├── projects.json       # Project portfolio
│   │   └── experience.json     # Work experience
│   ├── images/                 # Project images, profile photos
│   │   └── placeholder-profile.svg
│   ├── icons/                  # SVG icons
│   └── themes/                 # Theme files
│       ├── light-theme.scss    # Light theme styles
│       ├── dark-theme.scss     # Dark theme styles
│       └── theme.config.ts     # Theme configuration
└── styles.scss                 # Global styles
```

## 🎯 Key Features Explained

### Dynamic Greeting System
- Time-based greetings (Good Morning, Good Afternoon, Good Evening, Good Night)
- Regional awareness with localized subtitles
- Real-time updates every second

### Card-Based Layout
- Sophisticated project showcase with hover effects
- Responsive grid system for optimal space usage
- Professional card design with shadows and animations

### Centralized Content Management
- JSON-based content system for easy updates
- Type-safe interfaces for all data structures
- Observable-based data flow for reactive updates

### Theme System
- CSS custom properties for dynamic theming
- Smooth transitions between light and dark modes
- Consistent color palette across all components

## 🚀 Deployment

This is a static website that can be deployed to any static hosting service:

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on every push

### GitHub Pages
1. Create a GitHub Actions workflow
2. Build and deploy to GitHub Pages
3. Configure custom domain in repository settings

### AWS S3
1. Build the project: `npm run build`
2. Upload `dist/` folder contents to S3 bucket
3. Configure static website hosting
4. Set up CloudFront for CDN

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize Firebase: `firebase init hosting`
3. Build and deploy: `npm run build && firebase deploy`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

- **Desktop**: Full sidebar navigation with optimized content layout
- **Tablet**: Responsive sidebar with touch-friendly navigation
- **Mobile**: Collapsible sidebar with mobile-optimized content

## 🔧 Development

### Available Scripts

- `npm start`: Start development server
- `npm run build`: Build for production
- `npm run test`: Run unit tests
- `npm run lint`: Run ESLint
- `npm run e2e`: Run end-to-end tests

### Code Style

- TypeScript strict mode enabled
- ESLint configuration for code quality
- Prettier for code formatting
- SCSS with BEM methodology

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions, suggestions, or support:

- Open an issue on GitHub
- Contact: [your.email@example.com](mailto:your.email@example.com)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)

## 🎉 Acknowledgments

- Angular team for the amazing framework
- Inter font family for beautiful typography
- All contributors and users who provide feedback

---

**Built with ❤️ using Angular 17**