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
      <app-section-header 
        title="Work Experience" 
        subtitle="My professional journey and career milestones"
      ></app-section-header>
      
      <div class="experience-content" *ngIf="experience$ | async as experienceData">
        <div class="timeline">
          <div 
            *ngFor="let exp of experienceData.experiences; let i = index" 
            class="timeline-item"
            [class.current]="exp.current"
          >
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div *ngIf="i < experienceData.experiences.length - 1" class="marker-line"></div>
            </div>
            
            <div class="timeline-content">
              <div class="experience-header">
                <h3 class="position">{{ exp.position }}</h3>
                <h4 class="company">{{ exp.company }}</h4>
                <div class="duration">
                  <span class="start-date">{{ exp.startDate }}</span>
                  <span class="separator">-</span>
                  <span class="end-date">
                    {{ exp.current ? 'Present' : exp.endDate }}
                  </span>
                </div>
                <div class="location">{{ exp.location }}</div>
              </div>
              
              <p class="description">{{ exp.description }}</p>
              
              <div class="achievements" *ngIf="exp.achievements && exp.achievements.length > 0">
                <h5>Key Achievements:</h5>
                <ul>
                  <li *ngFor="let achievement of exp.achievements">{{ achievement }}</li>
                </ul>
              </div>
              
              <div class="technologies">
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
        
        <div class="education-section">
          <h3>Education & Certifications</h3>
          <div class="education-timeline">
            <div *ngFor="let edu of experienceData.education" class="education-item">
              <div class="edu-header">
                <h4>{{ edu.degree }}</h4>
                <h5>{{ edu.institution }}</h5>
                <div class="edu-duration">{{ edu.startDate }} - {{ edu.endDate }}</div>
                <div class="edu-location">{{ edu.location }}</div>
              </div>
              <p class="edu-description">{{ edu.description }}</p>
            </div>
          </div>
          
          <div class="certifications-section">
            <h4>Professional Certifications</h4>
            <div class="certifications-grid">
              <div *ngFor="let cert of experienceData.certifications" class="cert-item">
                <h5>{{ cert.name }}</h5>
                <p class="cert-issuer">{{ cert.issuer }} - {{ cert.date }}</p>
                <p class="cert-id">ID: {{ cert.certificateId }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="skills-summary">
          <h3>Core Competencies</h3>
          <div class="competencies-grid">
            <div class="competency-category">
              <h4>Testing Methodologies</h4>
              <ul>
                <li *ngFor="let skill of experienceData.skills.testing">{{ skill }}</li>
              </ul>
            </div>
            
            <div class="competency-category">
              <h4>Tools & Technologies</h4>
              <ul>
                <li *ngFor="let tool of experienceData.skills.tools">{{ tool }}</li>
              </ul>
            </div>
            
            <div class="competency-category">
              <h4>Databases</h4>
              <ul>
                <li *ngFor="let db of experienceData.skills.databases">{{ db }}</li>
              </ul>
            </div>
            
            <div class="competency-category">
              <h4>Programming Languages</h4>
              <ul>
                <li *ngFor="let lang of experienceData.skills.languages">{{ lang }}</li>
              </ul>
            </div>
            
            <div class="competency-category">
              <h4>Methodologies</h4>
              <ul>
                <li *ngFor="let method of experienceData.skills.methodologies">{{ method }}</li>
              </ul>
            </div>
            
            <div class="competency-category">
              <h4>Languages</h4>
              <ul>
                <li *ngFor="let lang of experienceData.skills.spokenLanguages">{{ lang }}</li>
              </ul>
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

  constructor(private dataService: PortfolioDataService) {
    this.experience$ = this.dataService.experience$;
  }

  ngOnInit(): void {}
}
