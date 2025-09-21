import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/portfolio-data.service';
import { Observable } from 'rxjs';
import { PersonalInfo } from '../../shared/models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <p class="footer-text">
          © {{ currentYear }} {{ (personalInfo$ | async)?.name || 'Nithin Shaji Valavil' }}
        </p>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  personalInfo$: Observable<PersonalInfo | null>;
  currentYear = new Date().getFullYear();
  private dataService = inject(PortfolioDataService);

  constructor() {
    this.personalInfo$ = this.dataService.personalInfo$;
  }
}
