export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  categoryNumber?: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date?: string;
  company?: string;
  role?: string;
  duration?: string;
  achievements?: string[];
  challenges?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  achievements?: string[];
  location?: string;
  type?: string;
  current: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description?: string;
  achievements?: string[];
  location?: string;
  gpa?: string | null;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  certificateId: string;
  date: string;
  description?: string;
}

export interface Skills {
  testing: string[];
  tools: string[];
  databases: string[];
  languages: string[];
  cicd: string[];
  methodologies: string[];
  projectManagement: string[];
  communication: string[];
  spokenLanguages: string[];
}

export interface Experience {
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: Certification[];
  skills: Skills;
  interests?: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  location?: string;
  bio: string;
  summary: string;
  avatar?: string;
  resume?: string;
  socialLinks?: SocialLink[];
}

export interface NavigationItem {
  path: string;
  label: string;
  icon: string;
  display?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  display?: boolean;
}

export interface PersonalInfoData {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
  navigation: NavigationItem[];
}
