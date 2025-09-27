import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../core/portfolio-data.service';
import { Observable } from 'rxjs';
import { PersonalInfo, Experience } from '../../shared/models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <div class="about-content">
        <div class="about-header">
          <div class="header-quote">A JOURNEY THROUGH DETAILS...</div>
          <div class="name-section">
            <h1 class="main-name">Nithin Shaji Valavil</h1>
            <div class="malayalam-name">നിതിൻ ഷാജി വളവിൽ</div>
          </div>
          <div class="header-images">
            <img src="/assets/images/architecture.jpg" alt="Architecture" class="about-image architecture" loading="lazy">
            <img src="/assets/images/profile.jpg" alt="Profile" class="about-image profile" loading="lazy">
          </div>
        </div>
        <div class="content-section info-section">
          <div class="section-images">
            <img src="/assets/images/craft.jpg" alt="My craft began here" class="about-image craft" loading="lazy">
            <img src="/assets/images/garden.jpg" alt="Japanese garden" class="about-image garden" loading="lazy">
          </div>
          <div class="section-content">
            <div class="section-label">INFO</div>
            <div class="section-text">
              I'm a Quality Assurance Engineer from Trivandrum, India, with over 7 years of experience ensuring that technology not only works but works well. My journey began in customer support, where I learned the value of empathy, problem-solving, and understanding how real people interact with products. Over time, that curiosity evolved into a career in software testing - from manual checks to automation frameworks, from functional validation to performance and scalability.
              <br><br>
              I've always been fascinated by the intersection of human experience and technology. Testing, for me, isn't just about finding bugs - it's about creating trust in the systems people rely on every day. Whether it's financial compliance software, property management systems, or global distribution platforms, my goal is to make sure technology feels seamless, reliable, and humane.
              <br><br>
              Today, I focus on test automation, API validation, and performance testing, helping teams release faster without compromising quality. Along the way, I've led QA initiatives, mentored junior engineers, and collaborated across functions to improve workflows and CI/CD pipelines.
            </div>
          </div>
        </div>

        <div class="content-section education-section">
          <div class="section-content">
            <div class="section-label">EDUCATION</div>
            <div class="education-item">
              <div class="education-title">STC Technologies, Trivandrum</div>
              <div class="education-subtitle">Certified Software Test Professional – Associate Level</div>
            </div>
            <div class="education-item">
              <div class="education-title">MBCET (2012 – 2016)</div>
              <div class="education-subtitle">Bachelor of Technology in Electrical and Electronics Engineering</div>
            </div>
          </div>
          <div class="section-images">
            <img src="/assets/images/campus.jpg" alt="MBCET through Hostel Window at evening." class="about-image campus" loading="lazy">
          </div>
        </div>

        <div class="content-section certifications-section">
          <div class="section-content">
            <div class="section-label">CERTIFICATIONS</div>
            <div class="certification-item">ISTQB® Certified Tester Foundation Level</div>
            <div class="certification-item">Certified SAFe® Practitioner (v5 & v6)</div>
          </div>
        </div>

        <div class="content-section philosophy-section">
          <div class="section-content">
            <div class="section-label">QA PHILOSOPHY</div>
            <div class="philosophy-columns">
              <div class="philosophy-column">
                <div class="philosophy-title">Great Testing = Great Experience</div>
                <div class="philosophy-text">Like great design, great testing is about intuition, structure, and empathy. It's about anticipating how things might break - and ensuring they don't for the end user.</div>
              </div>
              <div class="philosophy-column">
                <div class="philosophy-title">Technology as Trust</div>
                <div class="philosophy-text">I see QA as the bridge between human expectation and technical execution. My role is to make sure that trust is never broken, whether through automation, rigorous regression, or performance validation.</div>
              </div>
            </div>
          </div>
        </div>

        <div class="content-section interests-section">
          <div class="section-content">
            <div class="section-label">THINGS I LOVE TO DO</div>
            <div class="interests-list">
              <div class="interest-item">Gaming - because testing strategies and gaming strategies have more in common than people think.</div>
              <div class="interest-item">Hiking and traveling - exploring new landscapes and perspectives.</div>
            </div>
          </div>
          <div class="section-images">
            <img src="/assets/images/marunthuvazh_malai-peak.jpg" alt="Peak of Marunthuvazh Malai, Kanniyakumari" class="about-image hiking" loading="lazy">
            <img src="/assets/images/cafe.jpg" alt="Aesthetic cafe" class="about-image cafe" loading="lazy">
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  personalInfo$: Observable<PersonalInfo | null>;
  experience$: Observable<Experience | null>;

  constructor(private dataService: PortfolioDataService) {
    this.personalInfo$ = this.dataService.personalInfo$;
    this.experience$ = this.dataService.experience$;
  }

  ngOnInit(): void {}
}
