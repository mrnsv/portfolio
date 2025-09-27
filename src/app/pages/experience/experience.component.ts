import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { PortfolioDataService } from '../../core/portfolio-data.service';
import { Observable } from 'rxjs';
import { Experience } from '../../shared/models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <div class="experience-container">
      <!-- Header Section -->
      <div class="experience-header">
        <div class="header-content">
          <h1 class="main-title">Professional Journey</h1>
          <p class="subtitle">A comprehensive overview of my career milestones, expertise, and achievements</p>
        </div>
        <div class="header-stats">
          <div class="stat-item">
            <span class="stat-number">7+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">2</span>
            <span class="stat-label">Certifications</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">15+</span>
            <span class="stat-label">Technologies</span>
          </div>
        </div>
      </div>

      <!-- Section Navigation -->
      <div class="section-navigation">
        <button 
          class="nav-button" 
          [class.active]="activeSection === 'work'"
          (click)="setActiveSection('work')"
        >
          Work Experience
        </button>
        <button 
          class="nav-button" 
          [class.active]="activeSection === 'education'"
          (click)="setActiveSection('education')"
        >
          Education & Certifications
        </button>
        <button 
          class="nav-button" 
          [class.active]="activeSection === 'skills'"
          (click)="setActiveSection('skills')"
        >
          Core Competencies
        </button>
      </div>

      <!-- Section Containers -->
      <div class="section-container" [class.active]="activeSection === 'work'">
        <div class="section-header">
          <h2 class="section-title">Work Experience</h2>
        </div>
        <div class="horizontal-scroll" *ngIf="experience$ | async as experienceData">
          <div class="scroll-content">
            <div 
              *ngFor="let exp of experienceData.experiences; let i = index" 
              class="experience-card"
              [class.current]="exp.current"
            >
              <div class="card-header">
                <div class="position-info">
                  <h3 class="position-title">{{ exp.position }}</h3>
                  <h4 class="company-name">{{ exp.company }}</h4>
                </div>
                <div class="duration-badge">
                  <span class="duration-text">
                    {{ exp.startDate }} - {{ exp.current ? 'Present' : exp.endDate }}
                  </span>
                </div>
              </div>
              
              <div class="card-body">
                <p class="description">{{ exp.description }}</p>
                
                <div class="achievements-section" *ngIf="exp.achievements && exp.achievements.length > 0">
                  <h5 class="achievements-title">Key Achievements</h5>
                  <ul class="achievements-list">
                    <li *ngFor="let achievement of exp.achievements" class="achievement-item">
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
                
                <div class="technologies-section">
                  <div class="tech-tags">
                    <span 
                      *ngFor="let tech of exp.technologies" 
                      class="tech-tag"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-container" [class.active]="activeSection === 'education'">
        <div class="section-header">
          <h2 class="section-title">Education & Certifications</h2>
        </div>
        <div class="horizontal-scroll" *ngIf="experience$ | async as experienceData">
          <div class="scroll-content">
            <div class="education-card">
              <h3 class="card-title">Education</h3>
              <div class="education-list">
                <div *ngFor="let edu of experienceData.education" class="education-item">
                  <div class="edu-header">
                    <h4 class="degree">{{ edu.degree }}</h4>
                    <h5 class="institution">{{ edu.institution }}</h5>
                    <div class="edu-meta">
                      <span class="duration">{{ edu.startDate }} - {{ edu.endDate }}</span>
                      <span class="location">{{ edu.location }}</span>
                    </div>
                  </div>
                  <p class="edu-description">{{ edu.description }}</p>
                </div>
              </div>
            </div>
            
            <div class="certifications-card">
              <h3 class="card-title">Professional Certifications</h3>
              <div class="certifications-list">
                <div *ngFor="let cert of experienceData.certifications" class="certification-item">
                  <div class="cert-header">
                    <h4 class="cert-name">{{ cert.name }}</h4>
                    <div class="cert-meta">
                      <span class="issuer">{{ cert.issuer }}</span>
                      <span class="date">{{ cert.date }}</span>
                    </div>
                  </div>
                  <div class="cert-id">ID: {{ cert.certificateId }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-container" [class.active]="activeSection === 'skills'">
        <div class="section-header">
          <h2 class="section-title">Core Competencies</h2>
        </div>
        <div class="horizontal-scroll" *ngIf="experience$ | async as experienceData">
          <div class="scroll-content">
            <div class="skill-category" *ngFor="let category of getSkillCategories(experienceData.skills)">
              <div class="category-header">
                <h3 class="category-title">{{ category.title }}</h3>
                <div class="category-count">{{ category.skills.length }}</div>
              </div>
              <div class="skills-list">
                <div *ngFor="let skill of category.skills" class="skill-item">
                  {{ skill }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience$: Observable<Experience | null>;
  activeSection: string = 'work';

  constructor(private dataService: PortfolioDataService) {
    this.experience$ = this.dataService.experience$;
  }

  ngOnInit(): void {}

  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  getSkillCategories(skills: any) {
    return [
      { title: 'Testing Methodologies', skills: skills.testing },
      { title: 'Tools & Technologies', skills: skills.tools },
      { title: 'Databases', skills: skills.databases },
      { title: 'Programming Languages', skills: skills.languages },
      { title: 'Methodologies', skills: skills.methodologies },
      { title: 'Languages', skills: skills.spokenLanguages }
    ];
  }
}
