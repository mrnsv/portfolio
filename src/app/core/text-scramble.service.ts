import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ScrambleOptions {
  characters?: string;
  speed?: number;
  delay?: number;
  languages?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class TextScrambleService {
  private scrambleSubject = new BehaviorSubject<string>('');
  public scramble$ = this.scrambleSubject.asObservable();

  // Language-specific character sets
  private readonly languageChars = {
    en: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    ml: 'അആഇഈഉഊഋഎഏഐഒഓഔകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരലവശഷസഹളഴറാംാഃാംാഃ',
    hi: 'अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळक्षज्ञ',
    zh: '的一是了我不人在他有这个上们来到时大地为子中你说生国年着就那和要她出也得里后自以会家可下而过天去能对小多然于心学么之都好看起发当没成只如事把还用第样道想作种开美总从无情面最女但现前些所同日手又行意动方期它头经长儿回位分爱老因很给名法间斯知世什两次使身者被高已亲其进此话常与活正感',
    ja: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
  };

  private readonly defaultOptions: ScrambleOptions = {
    speed: 50,
    delay: 2000,
    languages: ['en', 'ml', 'hi', 'zh', 'ja']
  };

  /**
   * Scramble text with language-specific characters
   */
  public scrambleText(
    text: string, 
    options: ScrambleOptions = {}
  ): Observable<string> {
    const opts = { ...this.defaultOptions, ...options };
    const characters = this.getCharactersForLanguages(opts.languages!);
    
    this.animateScramble(text, characters, opts.speed!, opts.delay!);
    
    return this.scramble$;
  }

  /**
   * Get character set for specified languages
   */
  private getCharactersForLanguages(languages: string[]): string {
    let chars = '';
    languages.forEach(lang => {
      if (this.languageChars[lang as keyof typeof this.languageChars]) {
        chars += this.languageChars[lang as keyof typeof this.languageChars];
      }
    });
    return chars || this.languageChars.en;
  }

  /**
   * Animate the scramble effect
   */
  private animateScramble(
    text: string, 
    characters: string, 
    speed: number, 
    delay: number
  ): void {
    let currentText = '';
    let iteration = 0;
    const maxIterations = text.length * 3; // Multiple passes for better effect

    const animate = () => {
      if (iteration < maxIterations) {
        // Scramble phase
        currentText = text
          .split('')
          .map((char, index) => {
            if (index < iteration / 3) {
              return char; // Reveal character
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('');

        this.scrambleSubject.next(currentText);
        iteration++;
        setTimeout(animate, speed);
      } else {
        // Final reveal
        this.scrambleSubject.next(text);
      }
    };

    animate();
  }

  /**
   * Scramble text with specific language characters
   */
  public scrambleWithLanguage(
    text: string, 
    language: string, 
    options: Omit<ScrambleOptions, 'languages'> = {}
  ): Observable<string> {
    return this.scrambleText(text, { ...options, languages: [language] });
  }

  /**
   * Get available languages
   */
  public getAvailableLanguages(): string[] {
    return Object.keys(this.languageChars);
  }

  /**
   * Get characters for a specific language
   */
  public getLanguageCharacters(language: string): string {
    return this.languageChars[language as keyof typeof this.languageChars] || this.languageChars.en;
  }
}
