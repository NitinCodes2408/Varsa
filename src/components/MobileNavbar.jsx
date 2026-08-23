import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, MapPin, Heart, User } from 'lucide-react';

export default function MobileNavbar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { label: 'Map', path: '/', icon: MapPin },
    { label: 'Overview', path: '/home', icon: Home },
    { label: 'Explore', path: '/explore', icon: Compass },
    { label: 'Saved', path: '/saved', icon: Heart },
    { label: 'About', path: '/about', icon: User }
  ];

  return (
    <nav
      className="mobile-bottom-nav"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '64px',
        backgroundColor: '#F7F0E3',
        borderTop: '1px solid rgba(194, 138, 61, 0.3)',
        display: 'none',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 1000,
        boxShadow: '0 -4px 15px rgba(58, 33, 21, 0.08)'
      }}
    >
      {navItems.map((item) => {
        const IconComponent = item.icon;
        const active = isActive(item.path);

        return (
          <Link
            key={item.label}
            to={item.path}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              color: active ? 'var(--color-terracotta)' : 'var(--color-text-muted)',
              fontSize: '0.72rem',
              fontWeight: active ? '700' : '500',
              flex: 1
            }}
          >
            <IconComponent
              size={20}
              strokeWidth={active ? 2.5 : 1.8}
              style={{ marginBottom: '2px' }}
            />
            <span>{item.label}</span>
          </Link>
        );
      })}

      <style>{`
        @media (max-width: 768px) {
          .mobile-bottom-nav {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
