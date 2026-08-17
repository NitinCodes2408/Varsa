import React from 'react';
import { Link } from 'react-router-dom';
import SaveButton from './SaveButton';

export default function HeritageCard({ item, variant = "popular" }) {
  const isPopular = variant === "popular";

  return (
    <div
      className="hover-card-lift"
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card)',
        height: isPopular ? '320px' : '360px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        background: `url(${item.image}) center/cover no-repeat`,
        border: '1px solid rgba(194, 138, 61, 0.2)'
      }}
    >
      {/* Dark Cinematic Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(36, 24, 18, 0.15) 0%, rgba(36, 24, 18, 0.88) 100%)',
          zIndex: 1
        }}
      />

      {/* Save Button on top right */}
      <div style={{ position: 'absolute', top: '14px', right: '14px', zIndex: 3 }}>
        <SaveButton heritageId={item.id} variant="dark" />
      </div>

      {/* Category Pill (for grid variant) */}
      {item.category && !isPopular && (
        <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 3 }}>
          <span
            style={{
              backgroundColor: 'rgba(168, 68, 26, 0.85)',
              color: '#FFFFFF',
              fontSize: '0.72rem',
              fontWeight: '700',
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              backdropFilter: 'blur(4px)'
            }}
          >
            {item.category}
          </span>
        </div>
      )}

      {/* Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '24px',
          color: '#F7F0E3',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: isPopular ? '1.5rem' : '1.65rem',
            fontWeight: '600',
            color: '#FFFFFF',
            margin: 0,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}
        >
          {item.title}
        </h3>

        {item.shortDescription && (
          <p
            style={{
              fontSize: '0.88rem',
              color: 'rgba(247, 240, 227, 0.82)',
              margin: 0,
              lineHeight: 1.4,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {item.shortDescription}
          </p>
        )}

        <Link
          to={item.id === 'bamboo-craft' ? '/crafts/bamboo' : `/heritage/${item.id}`}
          style={{
            marginTop: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--color-heritage-gold)',
            textDecoration: 'none',
            fontSize: '0.92rem',
            fontWeight: '700',
            transition: 'var(--transition-smooth)'
          }}
        >
          {item.linkText || 'Explore Now →'}
        </Link>
      </div>
    </div>
  );
}
