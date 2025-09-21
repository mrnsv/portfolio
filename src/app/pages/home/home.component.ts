import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { PortfolioDataService } from '../../core/portfolio-data.service';
import { PersonalInfo, Project } from '../../shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionHeaderComponent],
  template: `
    <div class="home-container">
      <div class="top-section">
        <div class="greeting-section">
          <p class="greeting-text">{{ greetingText }}</p>
          <p class="greeting-subtitle">{{ greetingSubtitle }}</p>
        </div>
        <div class="datetime-section">
          <p class="datetime-text">{{ currentDateTime | date:'EEEE, d MMM h:mm a' }}</p>
        </div>
      </div>

      <div class="bio-section" *ngIf="personalInfo$ | async as personalInfo">
        <p class="bio-text">
          {{ personalInfo.name }} is a {{ personalInfo.title.toLowerCase() }}
          {{ personalInfo.summary }}
        </p>
      </div>

      <div class="craft-section">
        <h3 class="section-heading">CRAFT</h3>

        <div class="projects-grid">
          <div class="project-card" *ngFor="let project of featuredProjects$ | async">
            <div class="project-image-container">
              <div class="project-image">
                <div class="project-icon">{{ getProjectIcon(project.category) }}</div>
              </div>
            </div>
            <div class="project-info">
              <h4 class="project-category">{{ project.categoryNumber }} | {{ project.category }}</h4>
              <h2 class="project-title">{{ project.title }}</h2>
              <h3 class="project-subtitle">{{ project.subtitle }}</h3>
              <p class="project-description">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="interdisciplinary-section">
        <h3 class="section-heading">INTERDISCIPLINARY</h3>
        <div class="interdisciplinary-grid">
          <div class="interdisciplinary-card" *ngFor="let project of (projects$ | async)?.slice(4, 8)">
            <div class="card-image">
              <div class="card-icon">{{ getProjectIcon(project.category) }}</div>
            </div>
            <h4 class="card-title">{{ project.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personalInfo$: Observable<PersonalInfo | null>;
  featuredProjects$: Observable<Project[]>;
  projects$: Observable<Project[]>;
  currentDateTime = new Date();
  greetingText = '';
  greetingSubtitle = '';

  constructor(private dataService: PortfolioDataService) {
    this.personalInfo$ = this.dataService.personalInfo$;
    this.featuredProjects$ = this.dataService.featuredProjects$;
    this.projects$ = this.dataService.projects$;
  }

  ngOnInit(): void {
    this.updateGreeting();
    // Update time and greeting every second
    setInterval(() => {
      this.currentDateTime = new Date();
      this.updateGreeting();
    }, 1000);
  }

  private updateGreeting(): void {
    const now = new Date();
    const hour = now.getHours();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Get user's location for regional greetings
    const isIndia = timezone.includes('Asia/Kolkata') || timezone.includes('Asia/Calcutta');
    const isUS = timezone.includes('America/');
    const isEurope = timezone.includes('Europe/');
    
    // Determine greeting based on time of day
    if (hour >= 5 && hour < 12) {
      this.greetingText = 'Hello there, Good Morning!';
      this.greetingSubtitle = isIndia ? '/सुप्रभात/' : '/morning/';
    } else if (hour >= 12 && hour < 17) {
      this.greetingText = 'Hello there, Good Afternoon!';
      this.greetingSubtitle = isIndia ? '/दोपहर/' : '/afternoon/';
    } else if (hour >= 17 && hour < 21) {
      this.greetingText = 'Hello there, Good Evening!';
      this.greetingSubtitle = isIndia ? '/शाम/' : '/evening/';
    } else {
      this.greetingText = 'Hello there, Good Night!';
      this.greetingSubtitle = isIndia ? '/शुभ रात्रि/' : '/night/';
    }
  }

      getProjectIcon(category: string | undefined): string {
        if (!category) return '💼';
        const icons: { [key: string]: string } = {
          'HUMAN INTERFACE': '🍎',
          'TOOLS FOR THOUGHT': '📱',
          'WEB INTERFACE': '💻',
          'INTERDISCIPLINARY': '🎨',
          'FINANCE': '💰',
          'REAL ESTATE': '🏠',
          'DEVELOPER TOOLS': '🛠️',
          'SECURITY': '🔒',
          'MOBILE': '📱',
          'DATA MANAGEMENT': '📊',
          'ENTERPRISE': '🏢'
        };
        return icons[category] || '💼';
      }
}
