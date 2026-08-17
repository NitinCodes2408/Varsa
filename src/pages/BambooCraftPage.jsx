import React from 'react';
import { Link } from 'react-router-dom';
import { bambooCraftData } from '../data/bambooData';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { MapPin, ArrowRight, Sparkles, Compass } from 'lucide-react';

export default function BambooCraftPage() {
  const { districts, title, marathiTitle, intro } = bambooCraftData;

  return (
    <div style={{ paddingBottom: '80px' }}>
      <div className="container">
        {/* Breadcrumb Navigation: Explore → Crafts → Bamboo Craft */}
        <nav
          aria-label="Breadcrumb"
          style={{
            fontSize: '0.9rem',
            color: 'var(--color-text-muted)',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px'
          }}
        >
          <Link to="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
            Home
          </Link>
          <span>/</span>
          <Link to="/explore" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
            Explore
          </Link>
          <span>/</span>
          <Link to="/explore?category=Crafts" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
            Crafts
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--color-terracotta)', fontWeight: '600' }}>
            Bamboo Craft
          </span>
        </nav>

        {/* Header Section */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto 48px auto'
          }}
        >
          {/* Marathi Subtitle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '10px'
            }}
          >
            <OrnamentalDivider />
            <span
              className="marathi-text"
              style={{
                fontSize: '1.2rem',
                color: 'var(--color-heritage-gold)',
                fontWeight: '600',
                letterSpacing: '0.6px'
              }}
            >
              {marathiTitle}
            </span>
            <OrnamentalDivider />
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: '600',
              color: 'var(--bg-dark-brown)',
              lineHeight: 1.15,
              marginBottom: '16px'
            }}
          >
            🎋 {title}
          </h1>

          {/* Short Introduction */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto'
            }}
          >
            “{intro}”
          </p>
        </div>

        {/* District Selection Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
            borderBottom: '1px solid rgba(194, 138, 61, 0.25)',
            paddingBottom: '12px'
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                color: 'var(--bg-dark-brown)',
                fontWeight: '600',
                margin: 0
              }}
            >
              Select a District
            </h2>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              Explore authentic bamboo craft clusters by region
            </p>
          </div>
          <span
            style={{
              fontSize: '0.85rem',
              color: 'var(--color-heritage-gold)',
              fontWeight: '600',
              backgroundColor: '#EDE1CF',
              padding: '4px 14px',
              borderRadius: 'var(--radius-full)'
            }}
          >
            2 Districts Available
          </span>
        </div>

        {/* Exactly Two Large District Cards (Side-by-side on desktop, stacked on mobile) */}
        <div className="bamboo-districts-grid">
          {districts.map((district) => (
            <Link
              key={district.id}
              to={`/crafts/bamboo/${district.id}`}
              className="district-card"
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'var(--shadow-card)',
                border: '1.5px solid rgba(194, 138, 61, 0.3)',
                backgroundColor: 'var(--bg-dark-brown)',
                minHeight: '380px',
                transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)'
              }}
            >
              {/* Card Background Image */}
              <div
                className="district-card-bg"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url('${district.heroImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.5s ease',
                  opacity: 0.82
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(36, 24, 18, 0.25) 0%, rgba(36, 24, 18, 0.6) 45%, rgba(26, 16, 11, 0.92) 100%)',
                  zIndex: 1
                }}
              />

              {/* Top Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  right: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 2
                }}
              >
                <span
                  style={{
                    backgroundColor: 'rgba(168, 68, 26, 0.9)',
                    color: '#FFFFFF',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    backdropFilter: 'blur(6px)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <MapPin size={14} /> District Cluster
                </span>
                <span
                  style={{
                    backgroundColor: 'rgba(36, 24, 18, 0.75)',
                    color: 'var(--color-heritage-gold)',
                    border: '1px solid rgba(194, 138, 61, 0.4)',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  {district.products.length} Verified Products
                </span>
              </div>

              {/* Bottom Content */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '32px 28px 28px 28px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  boxSizing: 'border-box'
                }}
              >
                <div style={{ marginBottom: '6px' }}>
                  <span
                    className="marathi-text"
                    style={{
                      color: 'var(--color-heritage-gold)',
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      display: 'block',
                      marginBottom: '4px'
                    }}
                  >
                    {district.marathiName}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.85rem, 3vw, 2.4rem)',
                      color: '#FFFFFF',
                      fontWeight: '600',
                      margin: 0,
                      lineHeight: 1.15
                    }}
                  >
                    📍 {district.name}
                  </h3>
                </div>

                {/* Subtitle */}
                <p
                  style={{
                    color: '#F7F0E3',
                    fontSize: '1.05rem',
                    fontWeight: '500',
                    margin: '8px 0 16px 0',
                    lineHeight: 1.4
                  }}
                >
                  “{district.tagline}”
                </p>

                {/* Village Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '20px'
                  }}
                >
                  {district.featuredVillages.slice(0, 4).map((village, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.76rem',
                        color: 'rgba(247, 240, 227, 0.85)',
                        backgroundColor: 'rgba(255, 255, 255, 0.12)',
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-sm)',
                        backdropFilter: 'blur(4px)'
                      }}
                    >
                      {village}
                    </span>
                  ))}
                  {district.featuredVillages.length > 4 && (
                    <span
                      style={{
                        fontSize: '0.76rem',
                        color: 'var(--color-heritage-gold)',
                        padding: '3px 6px'
                      }}
                    >
                      +{district.featuredVillages.length - 4} more
                    </span>
                  )}
                </div>

                {/* CTA Link Button */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#FFFFFF',
                    backgroundColor: 'var(--color-terracotta)',
                    padding: '10px 22px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    alignSelf: 'flex-start',
                    boxShadow: '0 4px 14px rgba(168, 68, 26, 0.4)',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  Explore {district.name} Crafts <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Editorial Cultural Note */}
        <div
          style={{
            marginTop: '56px',
            backgroundColor: '#EDE1CF',
            borderRadius: 'var(--radius-lg)',
            padding: '32px 36px',
            border: '1px solid rgba(194, 138, 61, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-terracotta)' }}>
            <Sparkles size={20} />
            <span style={{ fontWeight: '700', fontSize: '0.9rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Ecological & Cultural Heritage
            </span>
          </div>
          <h4
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.4rem',
              color: 'var(--bg-dark-brown)',
              margin: 0
            }}
          >
            Sustainable Craftsmanship of Vidarbha
          </h4>
          <p
            style={{
              fontSize: '0.98rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.65,
              margin: 0
            }}
          >
            In the dense bamboo corridors of Vidarbha, bamboo is harvested using rotational cycles that protect forest regeneration. Each object is shaped entirely by hand using natural splits, traditional joinery, and plant-based curing—preserving ecological balance alongside timeless craft heritage.
          </p>
        </div>
      </div>

      {/* Scoped CSS for responsive grid and card hover */}
      <style>{`
        .bamboo-districts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .district-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-hover);
          border-color: var(--color-heritage-gold);
        }

        .district-card:hover .district-card-bg {
          transform: scale(1.04);
        }

        @media (max-width: 768px) {
          .bamboo-districts-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}
