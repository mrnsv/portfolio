import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextScrambleService, ScrambleOptions } from '../../core/text-scramble.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-text-scramble',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span 
      class="scramble-text" 
      [class.animate]="isAnimating"
      [style.font-family]="fontFamily"
    >
      {{ scrambledText }}
    </span>
  `,
  styleUrls: ['./text-scramble.component.scss']
})
export class TextScrambleComponent implements OnInit, OnDestroy, OnChanges {
  @Input() text: string = '';
  @Input() languages: string[] = ['en', 'ml', 'hi', 'zh', 'ja'];
  @Input() speed: number = 50;
  @Input() delay: number = 2000;
  @Input() autoStart: boolean = true;
  @Input() repeat: boolean = false;
  @Input() repeatDelay: number = 5000;
  @Input() fontFamily: string = 'inherit';

  scrambledText: string = '';
  isAnimating: boolean = false;
  private subscription: Subscription = new Subscription();
  private repeatTimeout: any;

  constructor(private textScrambleService: TextScrambleService) {}

  ngOnInit(): void {
    if (this.autoStart && this.text) {
      this.startScramble();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text'] && this.text && this.autoStart) {
      this.startScramble();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if (this.repeatTimeout) {
      clearTimeout(this.repeatTimeout);
    }
  }

  public startScramble(): void {
    if (!this.text) return;

    this.isAnimating = true;
    this.scrambledText = '';

    const options: ScrambleOptions = {
      languages: this.languages,
      speed: this.speed,
      delay: this.delay
    };

    this.subscription = this.textScrambleService
      .scrambleText(this.text, options)
      .subscribe(
        (scrambled) => {
          this.scrambledText = scrambled;
        },
        (error) => {
          console.error('Scramble error:', error);
          this.scrambledText = this.text;
          this.isAnimating = false;
        },
        () => {
          this.isAnimating = false;
          
          if (this.repeat) {
            this.repeatTimeout = setTimeout(() => {
              this.startScramble();
            }, this.repeatDelay);
          }
        }
      );
  }

  public stopScramble(): void {
    this.subscription.unsubscribe();
    if (this.repeatTimeout) {
      clearTimeout(this.repeatTimeout);
    }
    this.isAnimating = false;
    this.scrambledText = this.text;
  }

  public reset(): void {
    this.stopScramble();
    this.scrambledText = '';
  }
}
