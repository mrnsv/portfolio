import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<string>('en');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  public readonly languages: Language[] = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
    { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' }
  ];

  constructor(private translateService: TranslateService) {
    this.initializeTranslation();
  }

  private initializeTranslation(): void {
    // Set default language
    this.translateService.setDefaultLang('en');
    
    // Get saved language from localStorage or use browser language
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const browserLanguage = this.getBrowserLanguage();
    const initialLanguage = savedLanguage || browserLanguage || 'en';
    
    this.setLanguage(initialLanguage);
  }

  private getBrowserLanguage(): string {
    const browserLang = navigator.language || (navigator as any).userLanguage;
    
    // Map browser language codes to our supported languages
    if (browserLang.startsWith('ml')) return 'ml';
    if (browserLang.startsWith('hi')) return 'hi';
    if (browserLang.startsWith('zh')) return 'zh';
    if (browserLang.startsWith('ja')) return 'ja';
    
    return 'en'; // Default to English
  }

  public setLanguage(languageCode: string): void {
    if (this.languages.find(lang => lang.code === languageCode)) {
      this.translateService.use(languageCode);
      this.currentLanguageSubject.next(languageCode);
      localStorage.setItem('selectedLanguage', languageCode);
      
      // Update document direction for RTL languages if needed
      this.updateDocumentDirection(languageCode);
    }
  }

  private updateDocumentDirection(languageCode: string): void {
    // For now, all our languages are LTR, but this can be extended for RTL languages
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', languageCode);
  }

  public getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  public getLanguageByCode(code: string): Language | undefined {
    return this.languages.find(lang => lang.code === code);
  }

  public translateText(key: string, params?: any): string {
    return this.translateService.instant(key, params);
  }
}
