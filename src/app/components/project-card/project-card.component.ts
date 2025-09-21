import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../shared/models';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="project-card">
      <div class="project-image">
        <img [src]="project.image" [alt]="project.title" loading="lazy">
        <div class="project-overlay">
          <div class="project-links">
            <a 
              *ngIf="project.liveUrl" 
              [href]="project.liveUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="project-link live-link"
              aria-label="View live project"
            >
              🌐 Live Demo
            </a>
            <a 
              *ngIf="project.githubUrl" 
              [href]="project.githubUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="project-link github-link"
              aria-label="View source code"
            >
              🐙 Source Code
            </a>
          </div>
        </div>
      </div>
      
      <div class="project-content">
        <h3 class="project-title">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        
        <div class="project-technologies">
          <span 
            *ngFor="let tech of project.technologies" 
            class="technology-tag"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
