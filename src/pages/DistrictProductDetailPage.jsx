import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { districtData, DISTRICT_CATEGORIES } from '../data/districtData';
import { MapPin, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';

export default function DistrictProductDetailPage() {
  const { districtId, categoryId, productId } = useParams();

  const district = districtData[districtId?.toLowerCase()];
  if (!district) {
    return <Navigate to="/" replace />;
  }

  // Find product across the specified category or all categories of this district
  let foundProduct = null;
  let activeCatId = categoryId;

  if (activeCatId && district.categories[activeCatId]) {
    foundProduct = district.categories[activeCatId].find(
      (p) => p.id.toLowerCase() === productId?.toLowerCase()
    );
  }

  if (!foundProduct) {
    // Search across all categories in this district
    for (const [catKey, prods] of Object.entries(district.categories)) {
      const match = prods.find((p) => p.id.toLowerCase() === productId?.toLowerCase());
      if (match) {
        foundProduct = match;
        activeCatId = catKey;
        break;
      }
    }
  }

  if (!foundProduct) {
    return <Navigate to={`/district/${district.id}`} replace />;
  }

  const categoryMeta = DISTRICT_CATEGORIES.find((c) => c.id === activeCatId) || DISTRICT_CATEGORIES[0];
  const relatedProducts = (district.categories[activeCatId] || [])
    .filter((p) => p.id !== foundProduct.id)
    .slice(0, 3);

  return (
    <div style={{ paddingBottom: '90px' }}>
      <div className="container">
        {/* Breadcrumb: Home / Explore / District / Category / Product */}
        <nav
          aria-label="Breadcrumb"
          style={{
            fontSize: '0.9rem',
            color: 'var(--color-text-muted)',
            marginBottom: '24px',
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
          <Link
            to={`/district/${district.id}`}
            style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}
          >
            {district.name}
          </Link>
          <span>/</span>
          <Link
            to={`/district/${district.id}?category=${activeCatId}`}
            style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}
          >
            {categoryMeta.name}
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--color-terracotta)', fontWeight: '600' }}>
            {foundProduct.name}
          </span>
        </nav>

        {/* Back Link to District Category */}
        <div style={{ marginBottom: '28px' }}>
          <Link
            to={`/district/${district.id}?category=${activeCatId}`}
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
            <ArrowLeft size={16} /> Back to {district.name} {categoryMeta.name}
          </Link>
        </div>

        {/* Product Showcase Card */}
        <div
          style={{
            backgroundColor: '#EDE1CF',
            borderRadius: 'var(--radius-xl)',
            border: '1.5px solid rgba(194, 138, 61, 0.3)',
            boxShadow: 'var(--shadow-card)',
            overflow: 'hidden',
            marginBottom: '60px'
          }}
        >
          <div className="product-detail-layout">
            {/* Large Product Photography Column */}
            <div
              style={{
                position: 'relative',
                minHeight: '440px',
                backgroundColor: 'var(--bg-dark-brown)',
                overflow: 'hidden'
              }}
            >
              {foundProduct.image ? (
                <img
                  src={foundProduct.image}
                  alt={foundProduct.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}

              {/* Fallback "Image coming soon" */}
              <div
                style={{
                  display: foundProduct.image ? 'none' : 'flex',
                  position: 'absolute',
                  inset: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '12px',
                  backgroundColor: '#3A2115',
                  color: 'var(--color-heritage-gold)',
                  padding: '24px',
                  textAlign: 'center'
                }}
              >
                <Sparkles size={36} />
                <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                  Authentic Photograph Coming Soon
                </span>
                <span style={{ fontSize: '0.85rem', color: 'rgba(247, 240, 227, 0.7)' }}>
                  Verified archival imagery is being cataloged
                </span>
              </div>

              {/* District Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  backgroundColor: 'rgba(36, 24, 18, 0.85)',
                  color: 'var(--color-heritage-gold)',
                  border: '1px solid rgba(194, 138, 61, 0.4)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <MapPin size={14} /> 📍 {district.name} District
              </div>

              {/* Verified Image Source Credit Badge */}
              {foundProduct.imageSource && foundProduct.image && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '20px',
                    backgroundColor: 'rgba(24, 14, 9, 0.8)',
                    color: '#F7F0E3',
                    border: '1px solid rgba(194, 138, 61, 0.3)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.74rem',
                    backdropFilter: 'blur(6px)'
                  }}
                >
                  📷 Source: {foundProduct.imageSource}
                </div>
              )}
            </div>

            {/* Product Information Column */}
            <div
              style={{
                padding: '40px 36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              {/* Category Pill */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px'
                }}
              >
                <span
                  style={{
                    backgroundColor: 'var(--color-terracotta)',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase'
                  }}
                >
                  {categoryMeta.icon} {categoryMeta.name}
                </span>
                <span
                  style={{
                    backgroundColor: '#F7F0E3',
                    color: 'var(--bg-dark-brown)',
                    fontSize: '0.78rem',
                    fontWeight: '600',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(194, 138, 61, 0.3)'
                  }}
                >
                  {categoryMeta.marathi}
                </span>
              </div>

              {/* Marathi Name */}
              {foundProduct.marathiName && (
                <span
                  className="marathi-text"
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--color-heritage-gold)',
                    fontWeight: '600',
                    display: 'block',
                    marginBottom: '4px'
                  }}
                >
                  {foundProduct.marathiName}
                </span>
              )}

              {/* Product Name */}
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.7rem)',
                  fontWeight: '600',
                  color: 'var(--bg-dark-brown)',
                  lineHeight: 1.15,
                  margin: '0 0 16px 0'
                }}
              >
                {foundProduct.name}
              </h1>

              {/* Production Village */}
              <div
                style={{
                  backgroundColor: '#F7F0E3',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 18px',
                  border: '1px solid rgba(194, 138, 61, 0.3)',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--color-terracotta)',
                    color: '#FFFFFF',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block' }}>
                    Production Village
                  </span>
                  <span style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--bg-dark-brown)' }}>
                    {foundProduct.village}, {district.name}
                  </span>
                </div>
              </div>

              {/* About The Product */}
              <div style={{ marginBottom: '24px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--bg-dark-brown)',
                    margin: '0 0 8px 0'
                  }}
                >
                  About the Product
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.68,
                    margin: 0
                  }}
                >
                  {foundProduct.about}
                </p>
              </div>

              {/* Uses */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--bg-dark-brown)',
                    margin: '0 0 10px 0'
                  }}
                >
                  Uses
                </h3>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  {foundProduct.uses.map((use, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        backgroundColor: '#F7F0E3',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(194, 138, 61, 0.2)'
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--color-heritage-gold)" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.94rem', color: 'var(--color-text-dark)', fontWeight: '500' }}>
                        {use}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Items from this District & Category */}
        {relatedProducts.length > 0 && (
          <div>
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
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.6rem',
                  color: 'var(--bg-dark-brown)',
                  fontWeight: '600',
                  margin: 0
                }}
              >
                More {categoryMeta.name} from {district.name}
              </h2>
              <Link
                to={`/district/${district.id}?category=${activeCatId}`}
                style={{
                  color: 'var(--color-terracotta)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}
              >
                View all in {district.name} →
              </Link>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '20px'
              }}
            >
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/district/${district.id}/${activeCatId}/${p.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '12px',
                    backgroundColor: '#EDE1CF',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(194, 138, 61, 0.25)',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'var(--transition-smooth)'
                  }}
                  className="related-craft-item"
                >
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: 'var(--radius-sm)',
                        objectFit: 'cover',
                        flexShrink: 0
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div
                    style={{
                      display: p.image ? 'none' : 'flex',
                      width: '72px',
                      height: '72px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#3A2115',
                      color: 'var(--color-heritage-gold)',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.05rem',
                        fontWeight: '600',
                        color: 'var(--bg-dark-brown)',
                        margin: '0 0 2px 0'
                      }}
                    >
                      {p.name}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-terracotta)', fontWeight: '500' }}>
                      📍 {p.village}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Scoped CSS */}
      <style>{`
        .product-detail-layout {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
        }

        .related-craft-item:hover {
          transform: translateY(-3px);
          border-color: var(--color-heritage-gold);
          box-shadow: var(--shadow-subtle);
        }

        @media (max-width: 860px) {
          .product-detail-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
