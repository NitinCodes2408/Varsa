import React from 'react';
import { Link } from 'react-router-dom';
import MandalaLogo from './MandalaLogo';

// Social Icon SVGs
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#3A2115',
        color: '#F7F0E3',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '60px',
        paddingBottom: '30px',
        marginTop: '60px',
        borderTop: '2px solid var(--color-heritage-gold)'
      }}
    >
      {/* Decorative Mandala Background Watermark in Bottom Right */}
      <div
        style={{
          position: 'absolute',
          right: '-40px',
          bottom: '-40px',
          opacity: 0.1,
          pointerEvents: 'none'
        }}
      >
        <svg width="340" height="340" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="46" stroke="#C28A3D" strokeWidth="2" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="38" stroke="#C28A3D" strokeWidth="1" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, index) => (
            <path
              key={index}
              transform={`rotate(${angle} 50 50)`}
              d="M50 15 C42 28 42 42 50 50 C58 42 58 28 50 15 Z"
              fill="#C28A3D"
            />
          ))}
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Brand Info */}
          <div>
            <MandalaLogo variant="footer" />
            <p
              style={{
                marginTop: '16px',
                fontSize: '0.9rem',
                color: 'rgba(247, 240, 227, 0.75)',
                lineHeight: 1.6,
                maxWidth: '280px'
              }}
            >
              Preserving traditional crafts, indigenous knowledge, and living cultural storytelling for future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                fontWeight: '700',
                color: 'var(--color-heritage-gold)',
                marginBottom: '16px',
                letterSpacing: '0.5px'
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link to="/explore" style={{ color: '#F7F0E3', textDecoration: 'none', fontSize: '0.92rem', transition: 'var(--transition-smooth)' }}>
                  Explore Heritage
                </Link>
              </li>
              <li>
                <Link to="/stories" style={{ color: '#F7F0E3', textDecoration: 'none', fontSize: '0.92rem', transition: 'var(--transition-smooth)' }}>
                  Cultural Stories
                </Link>
              </li>
              <li>
                <Link to="/map" style={{ color: '#F7F0E3', textDecoration: 'none', fontSize: '0.92rem', transition: 'var(--transition-smooth)' }}>
                  Heritage Map
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#F7F0E3', textDecoration: 'none', fontSize: '0.92rem', transition: 'var(--transition-smooth)' }}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                fontWeight: '700',
                color: 'var(--color-heritage-gold)',
                marginBottom: '16px',
                letterSpacing: '0.5px'
              }}
            >
              Support
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link to="/about" style={{ color: '#F7F0E3', textDecoration: 'none', fontSize: '0.92rem' }}>
                  Help & Support
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#F7F0E3', textDecoration: 'none', fontSize: '0.92rem' }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/saved" style={{ color: '#F7F0E3', textDecoration: 'none', fontSize: '0.92rem' }}>
                  Saved Heritage
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1rem',
                fontWeight: '700',
                color: 'var(--color-heritage-gold)',
                marginBottom: '16px',
                letterSpacing: '0.5px'
              }}
            >
              Follow Us
            </h4>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
              <a
                href="#instagram"
                aria-label="Instagram"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(247, 240, 227, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F7F0E3',
                  textDecoration: 'none',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <InstagramIcon />
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(247, 240, 227, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F7F0E3',
                  textDecoration: 'none',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <FacebookIcon />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(247, 240, 227, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F7F0E3',
                  textDecoration: 'none',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'rgba(194, 138, 61, 0.25)',
            marginBottom: '24px'
          }}
        />

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.85rem',
            color: 'rgba(247, 240, 227, 0.65)'
          }}
        >
          <div>
            © 2026 वारसा. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#privacy" style={{ color: 'rgba(247, 240, 227, 0.65)', textDecoration: 'none' }}>
              Privacy Policy
            </a>
            <a href="#terms" style={{ color: 'rgba(247, 240, 227, 0.65)', textDecoration: 'none' }}>
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
