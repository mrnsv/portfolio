import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { PortfolioDataService } from '../../core/portfolio-data.service';
import { Observable } from 'rxjs';
import { PersonalInfo } from '../../shared/models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <div class="contact-container">
      <app-section-header 
        title="Get In Touch" 
        subtitle="Let's work together to create something amazing"
      ></app-section-header>
      
      <div class="contact-content" *ngIf="personalInfo$ | async as personalInfo">
        <div class="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question, want to collaborate, or just want to say hi, 
            I'd love to hear from you!
          </p>
          
          <div class="contact-methods">
            <a 
              [href]="'mailto:' + personalInfo.email" 
              class="contact-method email"
            >
              <div class="method-icon">📧</div>
              <div class="method-content">
                <h4>Email</h4>
                <p>{{ personalInfo.email }}</p>
                <small>Primary contact method</small>
              </div>
            </a>
            
            <a 
              [href]="personalInfo.phone" 
              class="contact-method phone"
            >
              <div class="method-icon">📱</div>
              <div class="method-content">
                <h4>Phone</h4>
                <p>{{ personalInfo.phone }}</p>
                <small>Available for urgent matters</small>
              </div>
            </a>
            
            <a 
              [href]="personalInfo.socialLinks?.[1]?.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="contact-method linkedin"
            >
              <div class="method-icon">💼</div>
              <div class="method-content">
                <h4>LinkedIn</h4>
                <p>Connect with me professionally</p>
                <small>Best for business inquiries</small>
              </div>
            </a>
            
            <a 
              [href]="personalInfo.socialLinks?.[0]?.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="contact-method github"
            >
              <div class="method-icon">🐙</div>
              <div class="method-content">
                <h4>GitHub</h4>
                <p>Check out my code</p>
                <small>Open source projects</small>
              </div>
            </a>
            
            <a 
              [href]="personalInfo.resume" 
              target="_blank" 
              rel="noopener noreferrer"
              class="contact-method cv"
            >
              <div class="method-icon">📄</div>
              <div class="method-content">
                <h4>Resume</h4>
                <p>Download my CV</p>
                <small>PDF format</small>
              </div>
            </a>
          </div>
        </div>
        
        <div class="contact-form">
          <h3>Send a Message</h3>
          <form class="form">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your name"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="your.email@example.com"
                required
              >
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <select id="subject" name="subject" required>
                <option value="">Select a topic</option>
                <option value="job-opportunity">Job Opportunity</option>
                <option value="collaboration">Collaboration</option>
                <option value="consulting">Consulting</option>
                <option value="question">General Question</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                placeholder="Tell me about your project or just say hello!"
                required
              ></textarea>
            </div>
            
            <button type="submit" class="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div class="availability">
        <h3>Availability</h3>
        <div class="availability-status">
          <div class="status-indicator available"></div>
          <span>Currently available for new projects</span>
        </div>
        <p class="availability-note">
          I typically respond within 24 hours. For urgent matters, 
          feel free to reach out via LinkedIn or email.
        </p>
      </div>

      <div class="contact-details" *ngIf="personalInfo$ | async as personalInfo">
        <h3>Additional Information</h3>
        <div class="details-grid">
          <div class="detail-item">
            <h4>📍 Location</h4>
            <p>{{ personalInfo.location }}</p>
          </div>
          
          <div class="detail-item">
            <h4>🕒 Time Zone</h4>
            <p>IST (UTC+5:30)</p>
          </div>
          
          <div class="detail-item">
            <h4>💼 Professional Focus</h4>
            <p>Quality Assurance & Testing</p>
          </div>
          
          <div class="detail-item">
            <h4>🎯 Specializations</h4>
            <p>Manual Testing, Automation, API Testing, Performance Testing</p>
          </div>
          
          <div class="detail-item">
            <h4>🏢 Current Status</h4>
            <p>Senior Quality Analyst Engineer</p>
          </div>
          
          <div class="detail-item">
            <h4>📅 Response Time</h4>
            <p>Within 24 hours</p>
          </div>
        </div>
      </div>

      <div class="professional-reference">
        <h3>Professional Reference</h3>
        <div class="reference-card">
          <h4>Mrs. Nigi K M</h4>
          <p class="reference-title">COO, Alokin Software Pvt. Ltd.</p>
          <div class="reference-contact">
            <p><strong>Email:</strong> <a href="mailto:nigi&#64;alokin.in">nigi&#64;alokin.in</a></p>
            <p><strong>Phone:</strong> <a href="tel:+918592092002">+91 85920 92002</a></p>
          </div>
          <p class="reference-note">
            Available for professional references and recommendations.
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  personalInfo$: Observable<PersonalInfo | null>;

  constructor(private dataService: PortfolioDataService) {
    this.personalInfo$ = this.dataService.personalInfo$;
  }

  ngOnInit(): void {}
}
