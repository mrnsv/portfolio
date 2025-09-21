import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PersonalInfo, Project, Experience, PersonalInfoData } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  private personalInfoSubject = new BehaviorSubject<PersonalInfo | null>(null);
  private projectsSubject = new BehaviorSubject<Project[]>([]);
  private experienceSubject = new BehaviorSubject<Experience | null>(null);

  public personalInfo$ = this.personalInfoSubject.asObservable();
  public projects$ = this.projectsSubject.asObservable();
  public experience$ = this.experienceSubject.asObservable();

  // Computed observables
  public featuredProjects$ = this.projects$.pipe(
    map(projects => projects.filter(project => project.featured))
  );

  constructor(private http: HttpClient) {
    this.loadAllData();
  }

  private loadAllData(): void {
    this.loadPersonalInfo();
    this.loadProjects();
    this.loadExperience();
  }

  private loadPersonalInfo(): void {
    this.http.get<PersonalInfoData>('/assets/data/personal-info.json').pipe(
      tap(data => {
        this.personalInfoSubject.next(data.personalInfo);
      })
    ).subscribe();
  }

  private loadProjects(): void {
    this.http.get<{projects: Project[]}>('/assets/data/projects.json').pipe(
      tap(data => {
        this.projectsSubject.next(data.projects);
      })
    ).subscribe();
  }

  private loadExperience(): void {
    this.http.get<Experience>('/assets/data/experience.json').pipe(
      tap(data => {
        this.experienceSubject.next(data);
      })
    ).subscribe();
  }

  // Getters for synchronous access
  get personalInfo(): PersonalInfo | null {
    return this.personalInfoSubject.value;
  }

  get projects(): Project[] {
    return this.projectsSubject.value;
  }

  get featuredProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  get experience(): Experience | null {
    return this.experienceSubject.value;
  }

  // Utility methods
  getProjectById(id: string): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  getProjectsByCategory(category: string): Project[] {
    return this.projects.filter(project => project.category === category);
  }

  // Method to refresh data (useful for development)
  refreshData(): void {
    this.loadAllData();
  }
}
