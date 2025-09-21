# Portfolio Content Management Guide

This guide explains how to manage and update your portfolio content in a centralized, maintainable way.

## 📁 File Structure

All portfolio content is stored in JSON files under `src/assets/data/`:

```
src/assets/data/
├── personal-info.json    # Personal information and social links
├── projects.json         # All projects and work samples
└── experience.json       # Work experience, education, and skills
```

## 🔧 How It Works

The portfolio uses a centralized `PortfolioDataService` that:
- Loads content from JSON files
- Provides reactive data streams
- Offers utility methods for data access
- Ensures consistency across all components

## 📝 Content Management

### 1. Personal Information (`personal-info.json`)

Update your basic information:

```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Full Stack Developer",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "San Francisco, CA",
    "bio": "Your professional bio...",
    "summary": "One-line professional summary",
    "avatar": "/assets/images/profile.jpg",
    "resume": "/assets/documents/resume.pdf"
  }
}
```

### 2. Projects (`projects.json`)

Add or update your projects:

```json
{
  "projects": [
    {
      "id": "unique-project-id",
      "title": "Project Name",
      "subtitle": "Project Subtitle",
      "category": "HUMAN INTERFACE",
      "categoryNumber": "01",
      "description": "Brief project description",
      "longDescription": "Detailed project description",
      "image": "/assets/images/projects/project.jpg",
      "technologies": ["Angular", "TypeScript", "SCSS"],
      "liveUrl": "https://project-demo.com",
      "githubUrl": "https://github.com/username/project",
      "featured": true,
      "date": "2024",
      "company": "Company Name",
      "role": "Your Role",
      "duration": "6 months",
      "achievements": [
        "Achievement 1",
        "Achievement 2"
      ],
      "challenges": [
        "Challenge 1",
        "Challenge 2"
      ]
    }
  ]
}
```

### 3. Experience (`experience.json`)

Manage your work experience and education:

```json
{
  "experiences": [
    {
      "id": "unique-experience-id",
      "company": "Company Name",
      "position": "Job Title",
      "startDate": "Jan 2023",
      "endDate": "Dec 2023",
      "current": false,
      "description": "Job description...",
      "technologies": ["Angular", "Node.js", "PostgreSQL"],
      "achievements": [
        "Achievement 1",
        "Achievement 2"
      ],
      "location": "City, State",
      "type": "Full-time"
    }
  ],
  "education": [
    {
      "id": "unique-education-id",
      "institution": "University Name",
      "degree": "Degree Type",
      "startDate": "Aug 2018",
      "endDate": "May 2022",
      "current": false,
      "description": "Education description...",
      "achievements": [
        "Achievement 1",
        "Achievement 2"
      ],
      "location": "City, State",
      "gpa": "3.8/4.0"
    }
  ],
  "skills": {
    "frontend": ["Angular", "React", "Vue.js"],
    "backend": ["Node.js", "Python", "Java"],
    "mobile": ["iOS Development", "Swift"],
    "design": ["UX Design", "UI Design"],
    "tools": ["Git", "Docker", "AWS"],
    "languages": ["English (Native)", "Spanish (Basic)"]
  }
}
```

## 🚀 Using the Data Service

### In Components

```typescript
import { Component, OnInit } from '@angular/core';
import { PortfolioDataService } from '../core/portfolio-data.service';

@Component({
  selector: 'app-example',
  template: `
    <div *ngIf="personalInfo$ | async as info">
      <h1>{{ info.name }}</h1>
      <p>{{ info.bio }}</p>
    </div>
  `
})
export class ExampleComponent implements OnInit {
  personalInfo$ = this.dataService.personalInfo$;
  featuredProjects$ = this.dataService.featuredProjects$;

  constructor(private dataService: PortfolioDataService) {}

  ngOnInit(): void {
    // Data is automatically loaded
  }
}
```

### Synchronous Access

```typescript
// Get current data synchronously
const personalInfo = this.dataService.personalInfo;
const projects = this.dataService.projects;
const featuredProjects = this.dataService.featuredProjects;

// Utility methods
const project = this.dataService.getProjectById('project-id');
const experience = this.dataService.getExperienceById('exp-id');
const categoryProjects = this.dataService.getProjectsByCategory('WEB INTERFACE');
```

## 📋 Content Update Checklist

When updating your portfolio:

- [ ] Update `personal-info.json` with current information
- [ ] Add new projects to `projects.json`
- [ ] Update work experience in `experience.json`
- [ ] Refresh skills and education sections
- [ ] Test all changes in development
- [ ] Verify all links and images work
- [ ] Check responsive design on all devices

## 🎨 Customization Options

### Categories
You can customize project categories:
- `HUMAN INTERFACE`
- `WEB INTERFACE`
- `TOOLS FOR THOUGHT`
- `INTERDISCIPLINARY`

### Project Types
- `featured: true` - Shows on homepage
- `featured: false` - Shows only in projects page

### Experience Types
- `Full-time`
- `Part-time`
- `Internship`
- `Contract`
- `Freelance`

## 🔄 Development Workflow

1. **Edit JSON files** with your content
2. **Save changes** - data service automatically reloads
3. **Test in browser** - changes appear immediately
4. **Commit changes** to version control
5. **Deploy** to production

## 📱 Responsive Considerations

- Keep project descriptions concise for mobile
- Use high-quality images that work on all screen sizes
- Test all interactive elements on touch devices
- Ensure text is readable on small screens

## 🔍 SEO Optimization

Update the `APP_CONFIG` in `constants.ts` for better SEO:

```typescript
export const APP_CONFIG = {
  seo: {
    title: 'Your Name - Full Stack Developer',
    description: 'Professional portfolio showcasing my work...',
    image: '/assets/images/og-image.jpg',
    url: 'https://yourname.com'
  }
};
```

## 🚨 Common Issues

### Images Not Loading
- Ensure image paths start with `/assets/`
- Check file names match exactly (case-sensitive)
- Verify images exist in the correct directories

### Data Not Updating
- Check JSON syntax is valid
- Ensure all required fields are present
- Restart development server if needed

### Performance Issues
- Optimize images before uploading
- Use appropriate image formats (WebP, JPEG, PNG)
- Compress large images

## 📞 Support

For questions or issues with content management:
1. Check this documentation
2. Review JSON file syntax
3. Test in development environment
4. Check browser console for errors

---

**Remember**: Always test changes in development before deploying to production!
