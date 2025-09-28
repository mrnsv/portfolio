import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Language } from '../../core/translation.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-switcher">
      <div class="current-language" (click)="toggleDropdown()">
        <span class="flag">{{ currentLanguage?.flag }}</span>
        <span class="language-name">{{ currentLanguage?.nativeName }}</span>
        <span class="dropdown-arrow" [class.open]="isDropdownOpen">▼</span>
      </div>
      
      <div class="language-dropdown" [class.open]="isDropdownOpen">
        <div 
          class="language-option" 
          *ngFor="let language of availableLanguages"
          (click)="selectLanguage(language)"
          [class.selected]="language.code === currentLanguage?.code"
        >
          <span class="flag">{{ language.flag }}</span>
          <span class="language-name">{{ language.nativeName }}</span>
          <span class="language-name-en">{{ language.name }}</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {
  isDropdownOpen = false;
  currentLanguage: Language | undefined;
  availableLanguages: Language[] = [];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.availableLanguages = this.translationService.languages;
    
    this.translationService.currentLanguage$.subscribe(languageCode => {
      this.currentLanguage = this.translationService.getLanguageByCode(languageCode);
    });
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(language: Language): void {
    this.translationService.setLanguage(language.code);
    this.isDropdownOpen = false;
  }

  // Close dropdown when clicking outside
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.language-switcher')) {
      this.isDropdownOpen = false;
    }
  }
}
