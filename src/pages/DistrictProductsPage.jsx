import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { bambooCraftData } from '../data/bambooData';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { MapPin, ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function DistrictProductsPage() {
  const { districtId } = useParams();

  // Find matching district
  const district = bambooCraftData.districts.find(
    (d) => d.id.toLowerCase() === districtId?.toLowerCase()
  );

  // If district not found, redirect to bamboo crafts hub
  if (!district) {
    return <Navigate to="/crafts/bamboo" replace />;
  }

  // Other district for easy toggling
  const otherDistrict = bambooCraftData.districts.find((d) => d.id !== district.id);

  return (
    <div style={{ paddingBottom: '80px' }}>
      <div className="container">
        {/* Breadcrumb Navigation: Home / Explore / Crafts / Bamboo Craft / District */}
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
          <Link to="/crafts/bamboo" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
            Bamboo Craft
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--color-terracotta)', fontWeight: '600' }}>
            {district.name}
          </span>
        </nav>

        {/* Back Link to District Selection */}
        <div style={{ marginBottom: '20px' }}>
          <Link
            to="/crafts/bamboo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--color-text-muted)',
              textDecoration: 'none',
              fontSize: '0.92rem',
              fontWeight: '600',
              transition: 'var(--transition-smooth)'
            }}
            className="hover-underline"
          >
            <ArrowLeft size={16} /> Back to District Selection
          </Link>
        </div>

        {/* Header Banner */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#3A2115',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            marginBottom: '48px',
            boxShadow: 'var(--shadow-card)',
            border: '1.5px solid rgba(194, 138, 61, 0.3)'
          }}
        >
          {/* Background Image */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url('${district.heroImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              opacity: 0.38
            }}
          />

          {/* Dark Warm Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(36, 24, 18, 0.4) 0%, rgba(26, 16, 11, 0.92) 100%)'
            }}
          />

          {/* Header Content */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              padding: '48px 36px',
              maxWidth: '860px'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(168, 68, 26, 0.85)',
                padding: '4px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: '700',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '14px',
                backdropFilter: 'blur(4px)'
              }}
            >
              <MapPin size={13} /> {district.name} District, Vidarbha
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: '600',
                color: '#FFFFFF',
                lineHeight: 1.15,
                marginBottom: '10px'
              }}
            >
              {district.name} Bamboo Craft
            </h1>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--color-heritage-gold)',
                fontWeight: '500',
                marginBottom: '12px'
              }}
            >
              “{district.tagline}”
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                color: 'rgba(247, 240, 227, 0.88)',
                lineHeight: 1.6,
                margin: 0,
                maxWidth: '720px'
              }}
            >
              {district.shortIntro}
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '32px',
            borderBottom: '1px solid rgba(194, 138, 61, 0.25)',
            paddingBottom: '16px'
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.85rem',
                color: 'var(--bg-dark-brown)',
                fontWeight: '600',
                margin: 0
              }}
            >
              Real Bamboo Products
            </h2>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
              Showing authentic crafts from {district.name} artisan villages
            </p>
          </div>

          {/* Quick link to other district */}
          {otherDistrict && (
            <Link
              to={`/crafts/bamboo/${otherDistrict.id}`}
              style={{
                fontSize: '0.88rem',
                color: 'var(--color-terracotta)',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: '#EDE1CF',
                border: '1px solid rgba(194, 138, 61, 0.3)'
              }}
            >
              Switch to 📍 {otherDistrict.name} <ArrowRight size={14} />
            </Link>
          )}
        </div>

        {/* Clean 3-Column Desktop / 1-2 Column Mobile Grid of Product Cards */}
        <div className="bamboo-products-grid">
          {district.products.map((product) => (
            <article
              key={product.id}
              className="product-card"
              style={{
                backgroundColor: '#EDE1CF',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                border: '1px solid rgba(194, 138, 61, 0.28)',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
              }}
            >
              {/* Real Product Image with Fallback */}
              <Link
                to={`/crafts/bamboo/${district.id}/${product.id}`}
                style={{ display: 'block', overflow: 'hidden', height: '240px', position: 'relative', backgroundColor: 'var(--bg-dark-brown)' }}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-card-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.45s ease'
                    }}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}

                {/* Fallback "Authentic Photograph Coming Soon" */}
                <div
                  style={{
                    display: product.image ? 'none' : 'flex',
                    position: 'absolute',
                    inset: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '8px',
                    backgroundColor: '#3A2115',
                    color: 'var(--color-heritage-gold)',
                    padding: '20px',
                    textAlign: 'center'
                  }}
                >
                  <Sparkles size={28} />
                  <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>
                    Authentic Photograph Coming Soon
                  </span>
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(36, 24, 18, 0.85)',
                    color: 'var(--color-heritage-gold)',
                    fontSize: '0.74rem',
                    fontWeight: '600',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-sm)',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  Authentic Craft
                </div>
              </Link>

              {/* Card Body */}
              <div
                style={{
                  padding: '22px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1
                }}
              >
                {/* Product Name */}
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: 'var(--bg-dark-brown)',
                    margin: '0 0 6px 0',
                    lineHeight: 1.25
                  }}
                >
                  <Link
                    to={`/crafts/bamboo/${district.id}/${product.id}`}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {product.name}
                  </Link>
                </h3>

                {/* Production Village */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.88rem',
                    color: 'var(--color-terracotta)',
                    fontWeight: '600',
                    marginBottom: '14px'
                  }}
                >
                  <MapPin size={15} style={{ flexShrink: 0 }} />
                  <span>Production Village: {product.village}</span>
                </div>

                {/* About Section */}
                <div style={{ marginBottom: '16px' }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.6px',
                      color: 'var(--bg-dark-brown)',
                      display: 'block',
                      marginBottom: '4px'
                    }}
                  >
                    About:
                  </span>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.55,
                      margin: 0
                    }}
                  >
                    {product.about}
                  </p>
                </div>

                {/* Uses Section */}
                <div style={{ marginBottom: '20px', marginTop: 'auto' }}>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.6px',
                      color: 'var(--bg-dark-brown)',
                      display: 'block',
                      marginBottom: '6px'
                    }}
                  >
                    Uses:
                  </span>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}
                  >
                    {product.uses.map((use, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '0.86rem',
                          color: 'var(--color-text-muted)',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '8px'
                        }}
                      >
                        <span
                          style={{
                            color: 'var(--color-heritage-gold)',
                            fontWeight: 'bold',
                            lineHeight: 1
                          }}
                        >
                          •
                        </span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Details Link */}
                <Link
                  to={`/crafts/bamboo/${district.id}/${product.id}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    backgroundColor: 'var(--bg-dark-brown)',
                    padding: '10px 18px',
                    borderRadius: 'var(--radius-full)',
                    transition: 'var(--transition-smooth)',
                    marginTop: '8px'
                  }}
                  className="product-detail-btn"
                >
                  View Product Details <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Scoped CSS for responsive 3-column grid and hover effects */}
      <style>{`
        .bamboo-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-card);
          border-color: var(--color-heritage-gold);
        }

        .product-card:hover .product-card-img {
          transform: scale(1.05);
        }

        .product-detail-btn:hover {
          background-color: var(--color-terracotta) !important;
        }

        @media (max-width: 1024px) {
          .bamboo-products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .bamboo-products-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}
