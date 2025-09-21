import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/portfolio-data.service';
import { Observable } from 'rxjs';
import { PersonalInfo, Experience } from '../../shared/models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <div class="about-header">
        <h1 class="main-title">About Me</h1>
        <h2 class="subtitle">Senior Quality Analyst Engineer</h2>
      </div>

      <div class="about-content" *ngIf="personalInfo$ | async as personalInfo">
        <div class="profile-section">
          <div class="profile-image">
            <img
              src="/assets/images/profile.jpg"
              alt="{{ personalInfo.name }}"
              onerror="this.src='/assets/images/placeholder-profile.svg'"
              loading="lazy"
            >
          </div>

          <div class="profile-info">
            <h2 class="profile-name">{{ personalInfo.name }}</h2>
            <p class="profile-title">{{ personalInfo.title }}</p>
            <p class="profile-location">{{ personalInfo.location }}</p>

            <div class="contact-info">
              <a [href]="'mailto:' + personalInfo.email" class="contact-item">
                <span class="contact-icon">📧</span>
                <span>{{ personalInfo.email }}</span>
              </a>
              <a [href]="personalInfo.phone" class="contact-item">
                <span class="contact-icon">📱</span>
                <span>{{ personalInfo.phone }}</span>
              </a>
              <a [href]="personalInfo.socialLinks?.[1]?.url" target="_blank" rel="noopener noreferrer" class="contact-item">
                <span class="contact-icon">💼</span>
                <span>linkedin.com/in/nithinshajivalavil</span>
              </a>
              <a [href]="personalInfo.socialLinks?.[0]?.url" target="_blank" rel="noopener noreferrer" class="contact-item">
                <span class="contact-icon">🐙</span>
                <span>github.com/mrnsv</span>
              </a>
              <a [href]="personalInfo.resume" target="_blank" rel="noopener noreferrer" class="contact-item">
                <span class="contact-icon">📄</span>
                <span>read.cv/nithinshajivalavil</span>
              </a>
            </div>
          </div>
        </div>

        <div class="professional-summary">
          <h3>Professional Summary</h3>
          <p>{{ personalInfo.bio }}</p>
        </div>

        <div class="core-expertise" *ngIf="experience$ | async as experience">
          <h3>Core Expertise</h3>
          <div class="skills-grid">
            <div class="skill-category">
              <h4>Testing Methodologies</h4>
              <div class="skill-tags">
                <span class="skill-tag" *ngFor="let skill of experience.skills.testing">{{ skill }}</span>
              </div>
            </div>

            <div class="skill-category">
              <h4>Tools & Technologies</h4>
              <div class="skill-tags">
                <span class="skill-tag" *ngFor="let tool of experience.skills.tools">{{ tool }}</span>
              </div>
            </div>

            <div class="skill-category">
              <h4>Databases</h4>
              <div class="skill-tags">
                <span class="skill-tag" *ngFor="let db of experience.skills.databases">{{ db }}</span>
              </div>
            </div>

            <div class="skill-category">
              <h4>Programming Languages</h4>
              <div class="skill-tags">
                <span class="skill-tag" *ngFor="let lang of experience.skills.languages">{{ lang }}</span>
              </div>
            </div>

            <div class="skill-category">
              <h4>Methodologies</h4>
              <div class="skill-tags">
                <span class="skill-tag" *ngFor="let method of experience.skills.methodologies">{{ method }}</span>
              </div>
            </div>

            <div class="skill-category">
              <h4>Languages</h4>
              <div class="skill-tags">
                <span class="skill-tag" *ngFor="let lang of experience.skills.spokenLanguages">{{ lang }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="certifications" *ngIf="experience$ | async as experience">
          <h3>Certifications</h3>
          <div class="certifications-list">
            <div class="cert-item" *ngFor="let cert of experience.certifications">
              <h4>{{ cert.name }}</h4>
              <p class="cert-issuer">{{ cert.issuer }} - {{ cert.date }}</p>
              <p class="cert-id">Certificate ID: {{ cert.certificateId }}</p>
            </div>
          </div>
        </div>

        <div class="interests" *ngIf="experience$ | async as experience">
          <h3>Interests</h3>
          <ul class="interests-list">
            <li *ngFor="let interest of experience.interests">{{ interest }}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  personalInfo$: Observable<PersonalInfo | null>;
  experience$: Observable<Experience | null>;

  constructor(private dataService: PortfolioDataService) {
    this.personalInfo$ = this.dataService.personalInfo$;
    this.experience$ = this.dataService.experience$;
  }

  ngOnInit(): void {}
}
