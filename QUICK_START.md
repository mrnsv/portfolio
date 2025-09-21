# 🎯 Portfolio Content Management - Quick Start

## 📍 Where to Save Your Content

All your portfolio content is centralized in these JSON files:

### 📁 File Locations
```
src/assets/data/
├── personal-info.json    ← Your name, bio, contact info
├── projects.json         ← All your projects and work
└── experience.json       ← Work history, education, skills
```

## ⚡ Quick Updates

### 1. **Personal Information**
Edit `src/assets/data/personal-info.json`:
```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Job Title",
    "email": "your.email@example.com",
    "bio": "Your professional bio...",
    "summary": "One-line summary"
  }
}
```

### 2. **Add New Project**
Edit `src/assets/data/projects.json`:
```json
{
  "projects": [
    {
      "id": "unique-id",
      "title": "Project Name",
      "subtitle": "Project Subtitle",
      "category": "WEB INTERFACE",
      "categoryNumber": "03",
      "description": "Brief description",
      "featured": true,
      "technologies": ["Angular", "TypeScript"],
      "liveUrl": "https://demo.com",
      "githubUrl": "https://github.com/username/project"
    }
  ]
}
```

### 3. **Update Work Experience**
Edit `src/assets/data/experience.json`:
```json
{
  "experiences": [
    {
      "company": "Company Name",
      "position": "Job Title",
      "startDate": "Jan 2023",
      "endDate": "Dec 2023",
      "current": false,
      "description": "Job description...",
      "technologies": ["Angular", "Node.js"]
    }
  ]
}
```

## 🔄 How It Works

1. **Edit JSON files** with your content
2. **Save changes** - website updates automatically
3. **View in browser** - changes appear immediately
4. **No code changes needed** - just update the data!

## 📋 Content Categories

### Project Categories
- `HUMAN INTERFACE` - Mobile apps, interfaces
- `WEB INTERFACE` - Websites, web apps
- `TOOLS FOR THOUGHT` - Productivity tools
- `INTERDISCIPLINARY` - Mixed media, art, etc.

### Experience Types
- `Full-time`
- `Part-time`
- `Internship`
- `Contract`
- `Freelance`

## 🎨 Featured Projects

Set `"featured": true` to show projects on the homepage.
Set `"featured": false` to show only in the projects page.

## 📱 Images

Add your images to:
```
src/assets/images/
├── profile.jpg           ← Your profile photo
├── projects/            ← Project screenshots
│   ├── project1.jpg
│   └── project2.jpg
└── documents/
    └── resume.pdf       ← Your resume
```

## 🚀 Benefits

✅ **Centralized** - All content in one place  
✅ **Easy to maintain** - Just edit JSON files  
✅ **No coding required** - Non-technical updates  
✅ **Version controlled** - Track all changes  
✅ **Consistent** - Same data across all pages  
✅ **Fast updates** - Changes appear immediately  

## 📖 Full Documentation

For detailed instructions, see `CONTENT_MANAGEMENT.md` in the project root.

---

**💡 Pro Tip**: Always test changes in development before deploying to production!
