import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-header">
      <h2 class="section-title">{{ title }}</h2>
      <p *ngIf="subtitle" class="section-subtitle">{{ subtitle }}</p>
      <div *ngIf="showDivider" class="section-divider"></div>
    </div>
  `,
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() showDivider: boolean = true;
}
