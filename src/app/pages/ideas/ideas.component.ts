import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ideas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ideas-container">
      <div class="ideas-header">
        <h3 class="section-heading">SPECULATIVE</h3>
        <h1 class="main-title">Ideas about interfaces</h1>
        <p class="description">
          Some ideas about interfaces that I've thought of and decided to build for fun.
          If you have any thoughts about these, let me know!
        </p>
      </div>

      <div class="divider"></div>

      <div class="ideas-grid">
        <div class="idea-card" *ngFor="let idea of ideas; let i = index" [style.animation-delay]="(i * 0.1) + 's'">
          <div class="card-header">
            <div class="card-icon">{{ idea.icon }}</div>
            <div class="card-year">{{ idea.date }}</div>
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ idea.title }}</h3>
            <p class="card-description">{{ idea.description }}</p>
            <div class="card-tags">
              <span class="tag" *ngFor="let tag of idea.tags">{{ tag }}</span>
            </div>
          </div>
          <div class="card-footer">
            <div class="card-status">{{ idea.status }}</div>
            <div class="card-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
  ideas = [
    { 
      title: 'WorkSpan', 
      date: '2024',
      icon: '⏱️',
      description: 'A time-tracking interface that visualizes productivity patterns through elegant data visualization.',
      tags: ['Productivity', 'Analytics', 'UI/UX'],
      status: 'Concept'
    },
    { 
      title: 'PeekOn', 
      date: '2024',
      icon: '👁️',
      description: 'A privacy-focused screen sharing tool with granular permission controls and real-time collaboration.',
      tags: ['Privacy', 'Collaboration', 'Security'],
      status: 'Prototype'
    },
    { 
      title: 'HealthCheck', 
      date: '2024',
      icon: '🏥',
      description: 'An intuitive health monitoring dashboard that aggregates data from multiple wellness devices.',
      tags: ['Health', 'IoT', 'Dashboard'],
      status: 'Concept'
    },
    { 
      title: 'Data-Nexus', 
      date: '2024',
      icon: '🔗',
      description: 'A visual data pipeline builder that makes complex data transformations accessible through drag-and-drop interfaces.',
      tags: ['Data', 'Visualization', 'ETL'],
      status: 'Research'
    },
    { 
      title: 'SchemaCraft', 
      date: '2024',
      icon: '🏗️',
      description: 'A collaborative database schema designer with real-time validation and version control.',
      tags: ['Database', 'Collaboration', 'Design'],
      status: 'Concept'
    },
    { 
      title: 'ChronoChime', 
      date: '2024',
      icon: '⏰',
      description: 'A smart notification system that learns user patterns to deliver perfectly timed alerts.',
      tags: ['AI', 'Notifications', 'Behavior'],
      status: 'Prototype'
    },
    { 
      title: 'PingPals', 
      date: '2024',
      icon: '💬',
      description: 'A minimalist communication tool focused on meaningful connections through structured conversations.',
      tags: ['Communication', 'Social', 'Minimal'],
      status: 'Concept'
    }
  ];

  ngOnInit(): void {}
}
