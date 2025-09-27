import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ThemeService } from '../../core/theme.service';
import { PortfolioDataService } from '../../core/portfolio-data.service';
import { Observable } from 'rxjs';
import { PersonalInfo, Project } from '../../shared/models';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <!-- 1. Title Section -->
      <div class="navbar-section title-section">
        <div class="logo-button" (click)="navigateToHome()" [class.active]="isHomePage">
          <span class="logo-text">MR. NSV</span>
        </div>
      </div>

      <!-- 2. Pages Section -->
      <div class="navbar-section pages-section">
        <ul class="navbar-menu">
          <li class="navbar-item">
            <a routerLink="/about" routerLinkActive="active" class="navbar-link">About</a>
          </li>
          <li class="navbar-item">
            <a routerLink="/ideas" routerLinkActive="active" class="navbar-link">Ideas</a>
          </li>
          <li class="navbar-item">
            <a routerLink="/experience" routerLinkActive="active" class="navbar-link">CV</a>
          </li>
        </ul>
      </div>

      <!-- 3. Projects Section -->
      <div class="navbar-section projects-section">
        
        <div class="project-category">
          <h4 class="category-title">Finance</h4>
          <ul class="navbar-menu">
            <li class="navbar-item">
              <a routerLink="/projects" class="navbar-link">CASMEX</a>
            </li>
            <li class="navbar-item">
              <a routerLink="/projects" class="navbar-link">iShield</a>
            </li>
          </ul>
        </div>

        <div class="project-category">
          <h4 class="category-title">Real Estate</h4>
          <ul class="navbar-menu">
            <li class="navbar-item">
              <a routerLink="/projects" class="navbar-link">Hummingbird</a>
            </li>
            <li class="navbar-item">
              <a routerLink="/projects" class="navbar-link">Mariposa</a>
            </li>
            <li class="navbar-item">
              <a routerLink="/projects" class="navbar-link">Nectar</a>
            </li>
          </ul>
        </div>

        <div class="project-category">
          <h4 class="category-title">E-Commerce</h4>
          <ul class="navbar-menu">
            <li class="navbar-item">
              <a routerLink="/projects" class="navbar-link">OneG8</a>
            </li>
          </ul>
        </div>

        <div class="project-category">
          <h4 class="category-title">Photography</h4>
          <ul class="navbar-menu">
            <li class="navbar-item">
              <a routerLink="/projects" class="navbar-link">Pixely</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 4. Contact Section -->
      <div class="navbar-section contact-section">
        <h3 class="section-title">CONTACT</h3>
        <ul class="navbar-menu">
          <li class="navbar-item">
            <a [href]="'mailto:' + ((personalInfo$ | async)?.email || '')" class="navbar-link">Mail</a>
          </li>
          <li class="navbar-item">
            <a [href]="(personalInfo$ | async)?.socialLinks?.[1]?.url" target="_blank" rel="noopener noreferrer" class="navbar-link">LinkedIn</a>
          </li>
          <li class="navbar-item">
            <a [href]="(personalInfo$ | async)?.socialLinks?.[0]?.url" target="_blank" rel="noopener noreferrer" class="navbar-link">GitHub</a>
          </li>
          <li class="navbar-item">
            <a [href]="(personalInfo$ | async)?.resume" target="_blank" rel="noopener noreferrer" class="navbar-link">Read.cv</a>
          </li>
        </ul>
      </div>

      <!-- 5. Buttons Section -->
      <div class="navbar-section buttons-section">
        <button
          class="theme-toggle"
          (click)="toggleTheme()"
          [attr.aria-label]="'Toggle ' + (themeService.getCurrentTheme() === 'light' ? 'dark' : 'light') + ' theme'"
        >
          {{ themeService.getCurrentTheme() === 'light' ? '🌙' : '☀️' }}
        </button>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  personalInfo$: Observable<PersonalInfo | null>;
  themeService = inject(ThemeService);
  private router = inject(Router);
  private dataService = inject(PortfolioDataService);
  currentTheme$ = this.themeService.currentTheme$;
  isHomePage = false;

  constructor() {
    this.personalInfo$ = this.dataService.personalInfo$;
  }

  ngOnInit(): void {
    // Check if current route is home page
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/' || event.url === '';
      }
    });
  }

  navigateToHome(): void {
    if (!this.isHomePage) {
      this.router.navigate(['/']);
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

