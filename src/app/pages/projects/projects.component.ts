import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { PortfolioDataService } from '../../core/portfolio-data.service';
import { Observable } from 'rxjs';
import { Project } from '../../shared/models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ProjectCardComponent],
  template: `
    <div class="projects-container">
      <div class="projects-header">
        <h3 class="section-heading">SPECULATIVE</h3>
        <h1 class="main-title">Ideas about interfaces</h1>
        <p class="description">
          Some ideas about interfaces that I've thought of and decided to build for fun.
          If you have any thoughts about these, let me know!
        </p>
      </div>

      <div class="divider"></div>

      <div class="projects-list">
        <div class="project-item" *ngFor="let project of projects$ | async">
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-date">{{ project.date }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private dataService: PortfolioDataService) {
    this.projects$ = this.dataService.projects$;
  }

  ngOnInit(): void {}
}
