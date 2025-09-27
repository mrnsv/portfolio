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
      <!-- Dashboard Header -->
      <div class="dashboard-header">
        <div class="welcome-section">
          <h1 class="welcome-title">{{ greetingText }}</h1>
          <p class="welcome-subtitle">{{ greetingSubtitle }}</p>
          <p class="intro-text">
            A Quality Assurance Engineer crafting seamless digital experiences through meticulous testing and automation. 
            I bridge human expectations with technical excellence, ensuring technology works beautifully for real people.
          </p>
        </div>
        <div class="profile-summary" *ngIf="personalInfo$ | async as personalInfo">
          <div class="time-section">
            <p class="current-time">{{ currentDateTime | date:'EEEE, d MMM h:mm a' }}</p>
          </div>
          <div class="profile-info">
            <h2 class="profile-name">{{ personalInfo.name }}</h2>
            <p class="profile-title">{{ personalInfo.title }}</p>
          </div>
        </div>
      </div>

      <!-- Dashboard Stats -->
      <div class="dashboard-stats">
        <div class="stat-card">
          <div class="stat-icon">💼</div>
          <div class="stat-content">
            <h3 class="stat-number">{{ (projects$ | async)?.length || 0 }}</h3>
            <p class="stat-label">Projects</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">💡</div>
          <div class="stat-content">
            <h3 class="stat-number">7</h3>
            <p class="stat-label">Ideas</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">🏆</div>
          <div class="stat-content">
            <h3 class="stat-number">2</h3>
            <p class="stat-label">Certifications</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon">📈</div>
          <div class="stat-content">
            <h3 class="stat-number">7+</h3>
            <p class="stat-label">Years Experience</p>
          </div>
        </div>
      </div>

      <!-- Quick Overview -->
      <div class="overview-section">
        <h3 class="section-heading">OVERVIEW</h3>
        <div class="overview-grid">
          <div class="overview-card">
            <div class="card-header">
              <h4 class="card-title">Recent Projects</h4>
              <span class="card-count">{{ (projects$ | async)?.length || 0 }}</span>
            </div>
            <div class="card-content">
              <div class="project-list">
                <div class="project-item" *ngFor="let project of (projects$ | async)?.slice(0, 3)">
                  <span class="project-name">{{ project.title }}</span>
                  <span class="project-category">{{ project.category }}</span>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <a routerLink="/projects" class="view-all-link">View All Projects →</a>
            </div>
          </div>

          <div class="overview-card">
            <div class="card-header">
              <h4 class="card-title">Latest Ideas</h4>
              <span class="card-count">7</span>
            </div>
            <div class="card-content">
              <div class="idea-list">
                <div class="idea-item" *ngFor="let idea of latestIdeas">
                  <span class="idea-name">{{ idea.title }}</span>
                  <span class="idea-status">{{ idea.status }}</span>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <a routerLink="/ideas" class="view-all-link">View All Ideas →</a>
            </div>
          </div>

          <div class="overview-card">
            <div class="card-header">
              <h4 class="card-title">Skills & Expertise</h4>
              <span class="card-count">{{ skillCategories.length }}</span>
            </div>
            <div class="card-content">
              <div class="skills-grid">
                <div class="skill-tag" *ngFor="let skill of skillCategories">
                  {{ skill }}
                </div>
              </div>
            </div>
            <div class="card-footer">
              <a routerLink="/experience" class="view-all-link">View Experience →</a>
            </div>
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
  
  latestIdeas = [
    { title: 'WorkSpan', status: 'Concept' },
    { title: 'PeekOn', status: 'Prototype' },
    { title: 'HealthCheck', status: 'Concept' }
  ];
  
  skillCategories = [
    'Test Automation', 'API Testing', 'Performance Testing', 
    'Quality Assurance', 'CI/CD', 'Agile', 'ISTQB', 'SAFe'
  ];

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
