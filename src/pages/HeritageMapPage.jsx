import React from 'react';
import { Link } from 'react-router-dom';
import MaharashtraInteractiveMap from '../components/MaharashtraInteractiveMap';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { HIGHLIGHTED_DISTRICTS_LIST } from '../data/maharashtraMapData';
import { ArrowRight } from 'lucide-react';

export default function HeritageMapPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          style={{
            fontSize: '0.9rem',
            color: 'var(--color-text-muted)',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Link to="/home" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
            Home
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--color-terracotta)', fontWeight: '600' }}>
            Maharashtra Heritage Map
          </span>
        </nav>

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 28px auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <OrnamentalDivider />
            <span
              className="marathi-text"
              style={{ fontSize: '1.2rem', color: 'var(--color-terracotta)', fontWeight: '600' }}
            >
              आपल्या मातीचा, आपल्या लोकांचा.
            </span>
            <OrnamentalDivider />
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              fontWeight: '600',
              color: 'var(--bg-dark-brown)',
              marginBottom: '10px'
            }}
          >
            Explore Maharashtra's Heritage
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Select any highlighted district below to explore authentic traditional crafts, local products, and cultural clusters.
          </p>
        </div>

        {/* Interactive Maharashtra Map Component */}
        <div style={{ marginBottom: '40px' }}>
          <MaharashtraInteractiveMap defaultDistrictId="gadchiroli" />
        </div>

        {/* 5 Highlighted District Quick Cards */}
        <div style={{ marginTop: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.8rem',
                color: 'var(--bg-dark-brown)',
                margin: 0
              }}
            >
              Supported Cultural Districts
            </h2>
            <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
              5 verified heritage hubs
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '18px'
            }}
          >
            {HIGHLIGHTED_DISTRICTS_LIST.map((dist) => (
              <Link
                key={dist.id}
                to={dist.route}
                style={{
                  backgroundColor: '#EDE1CF',
                  borderRadius: 'var(--radius-lg)',
                  padding: '20px',
                  border: '1px solid rgba(194, 138, 61, 0.3)',
                  borderTop: `4px solid ${dist.color}`,
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  boxShadow: 'var(--shadow-subtle)',
                  transition: 'var(--transition-smooth)'
                }}
                className="hover-card-lift"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.8rem' }}>{dist.landmarkIcon}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--bg-dark-brown)', margin: 0 }}>
                      {dist.name}
                    </h3>
                    <span className="marathi-text" style={{ fontSize: '0.85rem', color: 'var(--color-terracotta)', fontWeight: '600' }}>
                      {dist.marathiName}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', margin: '4px 0', lineHeight: 1.45 }}>
                  {dist.quote}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--color-terracotta)', fontSize: '0.88rem', fontWeight: '700', marginTop: 'auto' }}>
                  <span>Explore District</span>
                  <ArrowRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
