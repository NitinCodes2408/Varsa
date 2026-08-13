import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Award, ArrowRight } from 'lucide-react';

export default function ArtisanCard({ artisan }) {
  return (
    <div
      className="hover-card-lift"
      style={{
        backgroundColor: '#F7F0E3',
        borderRadius: 'var(--radius-lg)',
        border: '1.5px solid rgba(194, 138, 61, 0.3)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-subtle)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
        <img
          src={artisan.image}
          alt={artisan.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            inset: 'auto 0 0 0',
            background: 'linear-gradient(180deg, transparent 0%, rgba(36, 24, 18, 0.8) 100%)',
            padding: '16px 20px',
            color: '#FFFFFF'
          }}
        >
          <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-heritage-gold)', fontWeight: '700' }}>
            {artisan.role}
          </span>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: '600', margin: 0 }}>
            {artisan.name}
          </h3>
        </div>
      </div>

      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '14px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={14} color="var(--color-terracotta)" />
              {artisan.location}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Award size={14} color="var(--color-heritage-gold)" />
              {artisan.experience}
            </span>
          </div>

          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.05rem',
              color: 'var(--bg-dark-brown)',
              borderLeft: '3px solid var(--color-heritage-gold)',
              paddingLeft: '14px',
              margin: '0 0 16px 0',
              lineHeight: 1.4
            }}
          >
            “{artisan.quote}”
          </blockquote>
        </div>

        <Link
          to={`/artisan/${artisan.id}`}
          className="btn-primary"
          style={{ justifyContent: 'center', width: '100%', marginTop: '8px' }}
        >
          Meet the Artisan <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
