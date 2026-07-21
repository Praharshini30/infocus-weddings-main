import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import LazyImage from './components/LazyImage.jsx';
import './contact.css';
import { 
  Users, ClipboardEdit, Camera, Film, 
  Trophy, Globe, Star, Mail, Phone, MapPin, Clock, Map
} from 'lucide-react';
import CountUp from './components/CountUp.jsx';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <Navbar />

      {/* 1. HERO + FORM SECTION */}
      <section className="cp-hero">
        <img src="/assets/VSR03896.webp" alt="Luxury Wedding Couple" className="cp-hero-bg" />
        <div className="cp-hero-fade"></div>
        
        <div className="cp-hero-left">
          <div className="cp-tagline">CONTACT US</div>
          <h1>LET'S CREATE<br /><span>YOUR LEGACY</span></h1>
          <div className="cp-script">Timeless stories begin with a conversation.</div>
          <p className="cp-desc">
            We accept a limited number of weddings each year to ensure every celebration receives our complete creative attention.
          </p>
          
          <ul className="cp-features">
            <li><Star size={16} className="cp-icon" /> Private Consultations</li>
            <li><Globe size={16} className="cp-icon" /> Worldwide Coverage</li>
            <li><Clock size={16} className="cp-icon" /> Replies Within 24 Hours</li>
            <li><Users size={16} className="cp-icon" /> Trusted by 350+ Couples</li>
          </ul>
        </div>

        <div className="cp-hero-right">
          <form className="cp-form-card" onSubmit={(e) => e.preventDefault()}>
            <h2 className="cp-form-title">BEGIN YOUR JOURNEY</h2>
            <div className="cp-divider"></div>
            
            <div className="cp-form-grid">
              <div className="lux-input-wrap">
                <Users size={16} className="lux-input-icon" />
                <input type="text" className="lux-input" placeholder="Bride's Name" required />
              </div>
              <div className="lux-input-wrap">
                <Users size={16} className="lux-input-icon" />
                <input type="text" className="lux-input" placeholder="Groom's Name" required />
              </div>
              <div className="lux-input-wrap">
                <Mail size={16} className="lux-input-icon" />
                <input type="email" className="lux-input" placeholder="Email Address" required />
              </div>
              <div className="lux-input-wrap">
                <Phone size={16} className="lux-input-icon" />
                <input type="tel" className="lux-input" placeholder="Phone Number" required />
              </div>
              <div className="lux-input-wrap">
                <Clock size={16} className="lux-input-icon" />
                <input type="date" className="lux-input" required />
              </div>
              <div className="lux-input-wrap">
                <MapPin size={16} className="lux-input-icon" />
                <input type="text" className="lux-input" placeholder="Destination / Venue" required />
              </div>
              
              <div className="lux-input-wrap full-width">
                <select className="lux-select" required defaultValue="">
                  <option value="" disabled>Events You Need Coverage For</option>
                  <option value="1">Pre-Wedding + 1 Day</option>
                  <option value="2">2 Days Wedding</option>
                  <option value="3">3+ Days Grand Celebration</option>
                </select>
              </div>
            </div>

            <div className="cp-radio-group">
              <p>Estimated Budget (Optional)</p>
              <div className="cp-radios">
                <label className="cp-radio-label">
                  <input type="radio" name="budget" value="3-5L" /> ₹3L - ₹5L
                </label>
                <label className="cp-radio-label">
                  <input type="radio" name="budget" value="5-8L" /> ₹5L - ₹8L
                </label>
                <label className="cp-radio-label">
                  <input type="radio" name="budget" value="8-12L" /> ₹8L - ₹12L
                </label>
                <label className="cp-radio-label">
                  <input type="radio" name="budget" value="12L+" /> ₹12L+
                </label>
              </div>
            </div>

            <div className="cp-form-grid" style={{marginBottom: '1.25rem'}}>
              <div className="lux-input-wrap full-width">
                <select className="lux-select" required defaultValue="">
                  <option value="" disabled>How did you find us?</option>
                  <option value="ig">Instagram</option>
                  <option value="ref">Referral</option>
                  <option value="web">Web Search</option>
                </select>
              </div>
              <div className="lux-input-wrap full-width">
                <textarea className="lux-textarea" placeholder="Tell us about your celebration..." required></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-lux-primary w-full mt-4 py-4 text-sm tracking-widest">
              SUBMIT INQUIRY
            </button>
            <div className="cp-submit-note">
              <Clock size={12} /> We will get back to you within 24 hours
            </div>
          </form>
        </div>
      </section>

      {/* 2. TIMELINE SECTION */}
      <section className="cp-section">
        <div className="cp-section-head">
          <h2 className="cp-gold-heading">WHAT HAPPENS NEXT?</h2>
          <div className="cp-divider"></div>
        </div>
        
        <div className="cp-timeline">
          <div className="cp-tl-item">
            <div className="cp-tl-icon-box">
              <Users size={32} />
              <div className="cp-tl-num">01</div>
            </div>
            <h3>Consultation</h3>
            <p>We get to know you, your story, and your vision.</p>
          </div>
          <div className="cp-tl-item">
            <div className="cp-tl-icon-box">
              <ClipboardEdit size={32} />
              <div className="cp-tl-num">02</div>
            </div>
            <h3>Creative Planning</h3>
            <p>Concepts, timelines and experiences curated for you.</p>
          </div>
          <div className="cp-tl-item">
            <div className="cp-tl-icon-box">
              <Camera size={32} />
              <div className="cp-tl-num">03</div>
            </div>
            <h3>Production</h3>
            <p>Our team captures your moments with artistry & precision.</p>
          </div>
          <div className="cp-tl-item">
            <div className="cp-tl-icon-box">
              <Film size={32} />
              <div className="cp-tl-num">04</div>
            </div>
            <h3>Delivery</h3>
            <p>Timeless memories delivered to cherish for generations.</p>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER MESSAGE */}
      <section className="cp-section">
        <div className="cp-founder-card">
          <img src="/assets/heritage-stair-portrait.webp" alt="Founder Portrait" className="cp-founder-img" />
          <div className="cp-founder-content">
            <h2>A personal note</h2>
            <h3>from our founder</h3>
            <div className="cp-divider" style={{justifyContent: 'flex-start', margin: '1rem 0 2rem'}}></div>
            <p>
              Every wedding is unique, and every love story is beautiful in its own way. 
              It would be an honour for us to learn your story and create something 
              timeless together. We pour our hearts into capturing the genuine emotions, 
              fleeting glances, and grand celebrations that define your legacy.
            </p>
            <div className="cp-signature-name">Prathap Krishna Kokate</div>
            <div className="cp-signature-title">Lead Cinematographer & Founder</div>
          </div>
        </div>
      </section>

      {/* 4. STATS SECTION */}
      <section className="cp-stats-row cp-section">
        <div className="cp-stat">
          <Trophy size={40} className="cp-stat-icon" />
          <div className="cp-stat-text">
            <strong><CountUp value="9+" /></strong>
            <span>Years of<br/>Experience</span>
          </div>
        </div>
        <div className="cp-stat">
          <Users size={40} className="cp-stat-icon" />
          <div className="cp-stat-text">
            <strong><CountUp value="350+" /></strong>
            <span>Celebrations<br/>Captured</span>
          </div>
        </div>
        <div className="cp-stat">
          <Globe size={40} className="cp-stat-icon" />
          <div className="cp-stat-text">
            <strong><CountUp value="25+" /></strong>
            <span>Destinations<br/>Covered</span>
          </div>
        </div>
        <div className="cp-stat">
          <Star size={40} className="cp-stat-icon" />
          <div className="cp-stat-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <strong style={{ fontSize: '1.25rem', letterSpacing: '0.08em', lineHeight: '1.1', marginBottom: '0.15rem' }}>AWARD</strong>
            <span style={{ whiteSpace: 'nowrap' }}>WINNING STUDIO</span>
          </div>
        </div>
      </section>

      {/* 5. DESTINATIONS SECTION */}
      <section className="cp-section">
        <div className="cp-section-head">
          <h2 className="cp-gold-heading" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
            AVAILABLE WORLDWIDE <Map size={24} />
          </h2>
          <div className="cp-divider"></div>
        </div>

        <div className="cp-dest-grid">
          <div className="cp-dest-card">
            <LazyImage src="/assets/VSR02742_contact.webp" alt="India" />
            <div className="cp-dest-title">INDIA</div>
          </div>
          <div className="cp-dest-card">
            <LazyImage src="/assets/VSR03586_contact.webp" alt="Dubai" />
            <div className="cp-dest-title">DUBAI</div>
          </div>
          <div className="cp-dest-card">
            <LazyImage src="/assets/pre-wedding-beach.png" alt="Bali" />
            <div className="cp-dest-title">BALI</div>
          </div>
          <div className="cp-dest-card">
            <LazyImage src="/assets/VSR00140_contact.webp" alt="Europe" />
            <div className="cp-dest-title">EUROPE</div>
          </div>
          <div className="cp-dest-card">
            <LazyImage src="/assets/VSU00343_contact.webp" alt="Thailand" />
            <div className="cp-dest-title">THAILAND</div>
          </div>
          <div className="cp-dest-card">
            <LazyImage src="/assets/yjhsqa.webp" alt="Sri Lanka" />
            <div className="cp-dest-title">SRI LANKA</div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT FOOTER INFO */}
      <section className="cp-section">
        <div className="cp-info-row">
          <div className="cp-info-col">
            <h3>GET IN TOUCH</h3>
            <div className="cp-contact-list">
              <div className="cp-contact-item">
                <Phone size={18} className="cp-icon" /> +91 888 888 8888
              </div>
              <div className="cp-contact-item">
                <Mail size={18} className="cp-icon" /> hello@infocusweddings.com
              </div>
              <div className="cp-contact-item">
                <MapPin size={18} className="cp-icon" /> Hyderabad, India
              </div>
              <div className="cp-contact-item">
                <Clock size={18} className="cp-icon" /> Replies within 24 hrs
              </div>
            </div>
          </div>

          <div className="cp-info-col">
            <h3>CONNECT WITH US</h3>
            <div className="cp-social-row">
              <a href="#" className="cp-social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="cp-social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="cp-social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
            
            <h3 style={{marginTop: '2rem'}}>OFFICE HOURS</h3>
            <div className="cp-office-hours">
              Mon - Sat | 10:00 AM - 7:00 PM<br/>
              (Consultations by appointment only)
            </div>
          </div>

          <div className="cp-info-col">
            <div className="cp-cta-card">
              <h2>Ready to preserve<br/>your legacy?</h2>
              <p>Limited bookings available for upcoming celebrations.</p>
              <button className="btn btn-lux-primary w-full mt-6 py-4 text-sm tracking-widest">
                SCHEDULE A CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. JOIN AS PHOTOGRAPHER */}
      <section className="cp-section" style={{ borderTop: '1px solid rgba(201, 155, 86, 0.1)', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="cp-gold-heading" style={{ fontSize: '1.8rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
            JOIN AS PHOTOGRAPHER
          </h2>
          <div className="cp-divider"></div>
          <p className="text-muted text-lg font-light leading-relaxed mb-8 max-w-[500px] mx-auto" style={{ color: 'rgba(255, 246, 232, 0.7)' }}>
            Passionate about capturing beautiful stories?<br />
            Become a part of the InFocus Weddings creative team.
          </p>
          <a 
            href="https://apps.vsnapu.com/join" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-lux-primary inline-flex items-center justify-center py-4 px-10 text-sm tracking-widest uppercase"
          >
            Join Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
