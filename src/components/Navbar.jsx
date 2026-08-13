import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MandalaLogo from './MandalaLogo';
import { Menu, X, Compass, MapPin, Bookmark, Info, Sparkles } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      style={{
        position: 'sticky',
        top: '12px',
        zIndex: 100,
        padding: '0 16px',
        marginBottom: '20px'
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: '#F7F0E3',
          border: '1px solid rgba(194, 138, 61, 0.25)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-subtle)',
          padding: '12px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'var(--transition-smooth)'
        }}
      >
        {/* Logo Treatment matching reference image */}
        <MandalaLogo />

        {/* Desktop Navigation Links */}
        <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Link
            to="/explore"
            style={{
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontWeight: isActive('/explore') ? '700' : '600',
              color: isActive('/explore') ? 'var(--color-terracotta)' : 'var(--bg-dark-brown)',
              fontSize: '1rem',
              transition: 'var(--transition-smooth)'
            }}
          >
            Explore
          </Link>
          <Link
            to="/stories"
            style={{
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontWeight: isActive('/stories') ? '700' : '600',
              color: isActive('/stories') ? 'var(--color-terracotta)' : 'var(--bg-dark-brown)',
              fontSize: '1rem',
              transition: 'var(--transition-smooth)'
            }}
          >
            Cultural Stories
          </Link>
          <Link
            to="/map"
            style={{
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontWeight: isActive('/map') ? '700' : '600',
              color: isActive('/map') ? 'var(--color-terracotta)' : 'var(--bg-dark-brown)',
              fontSize: '1rem',
              transition: 'var(--transition-smooth)'
            }}
          >
            Heritage Map
          </Link>
          <Link
            to="/about"
            style={{
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              fontWeight: isActive('/about') ? '700' : '600',
              color: isActive('/about') ? 'var(--color-terracotta)' : 'var(--bg-dark-brown)',
              fontSize: '1rem',
              transition: 'var(--transition-smooth)'
            }}
          >
            About
          </Link>
          
          <Link to="/explore" className="btn-primary" style={{ padding: '10px 22px' }}>
            Get Started
          </Link>
        </nav>

        {/* Mobile Hamburger Trigger */}
        <button
          className="mobile-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--bg-dark-brown)',
            cursor: 'pointer',
            padding: '4px'
          }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            left: '16px',
            right: '16px',
            backgroundColor: 'var(--bg-cream)',
            border: '1.5px solid var(--color-heritage-gold)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-card)',
            padding: '24px',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{ textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600', color: 'var(--bg-dark-brown)' }}
          >
            Home
          </Link>
          <Link
            to="/explore"
            onClick={() => setMobileMenuOpen(false)}
            style={{ textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600', color: 'var(--bg-dark-brown)' }}
          >
            Explore Heritage
          </Link>
          <Link
            to="/stories"
            onClick={() => setMobileMenuOpen(false)}
            style={{ textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600', color: 'var(--bg-dark-brown)' }}
          >
            Cultural Stories
          </Link>
          <Link
            to="/map"
            onClick={() => setMobileMenuOpen(false)}
            style={{ textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600', color: 'var(--bg-dark-brown)' }}
          >
            Heritage Map
          </Link>
          <Link
            to="/saved"
            onClick={() => setMobileMenuOpen(false)}
            style={{ textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600', color: 'var(--bg-dark-brown)' }}
          >
            Saved Collection
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            style={{ textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600', color: 'var(--bg-dark-brown)' }}
          >
            About Varsa
          </Link>
          <Link
            to="/explore"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{ textAlign: 'center', justifyContent: 'center', marginTop: '8px' }}
          >
            Get Started
          </Link>
        </div>
      )}

      {/* Desktop vs Mobile Media Query CSS */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
