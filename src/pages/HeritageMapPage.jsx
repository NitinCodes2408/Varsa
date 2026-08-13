import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mapMarkers, heritageItems } from '../data/varsaData';
import CategoryFilter from '../components/CategoryFilter';
import { MapPin, Navigation, ArrowRight, X, Compass, Filter } from 'lucide-react';

export default function HeritageMapPage() {
  const [selectedMarker, setSelectedMarker] = useState(mapMarkers[0]);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Crafts', 'Art', 'Food', 'Culture', 'Forest'];

  const filteredMarkers = mapMarkers.filter(
    (m) => activeCategory === 'All' || m.category.toLowerCase() === activeCategory.toLowerCase()
  );

  return (
    <div style={{ paddingBottom: '80px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 32px auto' }}>
          <span
            className="marathi-text"
            style={{ fontSize: '1.1rem', color: 'var(--color-terracotta)', fontWeight: '600', display: 'block', marginBottom: '6px' }}
          >
            परिसरातील वारसा नक्शा
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              fontWeight: '600',
              color: 'var(--bg-dark-brown)',
              marginBottom: '12px'
            }}
          >
            Explore Heritage Around You
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Discover people, crafts, stories and traditions across the region.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ marginBottom: '24px' }}>
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* Interactive Map Interface */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '560px',
            backgroundColor: '#EDE1CF',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '2px solid var(--color-heritage-gold)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          {/* Topographic Vintage Map Background Texture */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `radial-gradient(#C28A3D 1px, transparent 1px), radial-gradient(#C28A3D 1px, #EDE1CF 1px)`,
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 20px 20px',
              opacity: 0.25
            }}
          />

          {/* Decorative Rivers / Contour lines styling */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.2, pointerEvents: 'none' }}>
            <path d="M 0 100 Q 200 300 500 200 T 1000 400" fill="none" stroke="#A8441A" strokeWidth="4" strokeDasharray="6 4" />
            <path d="M 100 0 Q 300 400 800 300 T 1200 500" fill="none" stroke="#C28A3D" strokeWidth="3" />
          </svg>

          {/* Map Compass Rose Watermark */}
          <div style={{ position: 'absolute', top: '24px', right: '24px', opacity: 0.4, color: 'var(--bg-dark-brown)', pointerEvents: 'none' }}>
            <Compass size={64} />
          </div>

          {/* Map Title Legend */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              backgroundColor: 'rgba(247, 240, 227, 0.92)',
              backdropFilter: 'blur(8px)',
              padding: '12px 20px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-heritage-gold)',
              boxShadow: 'var(--shadow-subtle)',
              zIndex: 5
            }}
          >
            <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: '700', color: 'var(--color-terracotta)', letterSpacing: '0.8px' }}>
              VARSA HERITAGE MAP
            </span>
            <p style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--bg-dark-brown)', margin: '2px 0 0 0' }}>
              {filteredMarkers.length} Heritage Markers Found
            </p>
          </div>

          {/* Interactive Markers */}
          {filteredMarkers.map((marker) => {
            const isSelected = selectedMarker?.id === marker.id;
            return (
              <button
                key={marker.id}
                onClick={() => setSelectedMarker(marker)}
                style={{
                  position: 'absolute',
                  left: `${marker.xPercent}%`,
                  top: `${marker.yPercent}%`,
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: isSelected ? 'var(--color-terracotta)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--bg-dark-brown)',
                  border: `2.5px solid ${isSelected ? '#FFFFFF' : 'var(--color-heritage-gold)'}`,
                  borderRadius: 'var(--radius-full)',
                  padding: '8px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 8px 24px rgba(168, 68, 26, 0.5)' : 'var(--shadow-subtle)',
                  transition: 'var(--transition-smooth)',
                  zIndex: isSelected ? 10 : 4,
                  fontWeight: '700',
                  fontSize: '0.9rem'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{marker.icon}</span>
                <span className="desktop-only">{marker.title}</span>
              </button>
            );
          })}

          {/* Selected Marker Varsa-Style Popup Card */}
          {selectedMarker && (
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'calc(100% - 48px)',
                maxWidth: '440px',
                backgroundColor: 'rgba(247, 240, 227, 0.98)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--radius-lg)',
                border: '2px solid var(--color-heritage-gold)',
                padding: '24px',
                boxShadow: 'var(--shadow-hover)',
                zIndex: 20
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <span
                  style={{
                    backgroundColor: 'var(--color-terracotta)',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-full)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px'
                  }}
                >
                  {selectedMarker.type}
                </span>

                <button
                  onClick={() => setSelectedMarker(null)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)' }}
                >
                  <X size={18} />
                </button>
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--bg-dark-brown)', marginBottom: '4px' }}>
                {selectedMarker.icon} {selectedMarker.title}
              </h3>

              <p style={{ fontSize: '0.85rem', color: 'var(--color-terracotta)', fontWeight: '600', marginBottom: '8px' }}>
                📍 {selectedMarker.locationName}
              </p>

              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '16px', lineHeight: 1.4 }}>
                {selectedMarker.shortDesc}
              </p>

              <Link
                to={`/heritage/${selectedMarker.id}`}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '10px 20px', fontSize: '0.95rem' }}
              >
                Explore {selectedMarker.title} →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
