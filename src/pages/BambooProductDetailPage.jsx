import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { bambooCraftData } from '../data/bambooData';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { MapPin, ArrowLeft, CheckCircle2, Sparkles, Leaf, Info, Compass } from 'lucide-react';

export default function BambooProductDetailPage() {
  const { districtId, productId } = useParams();

  // Find district
  const district = bambooCraftData.districts.find(
    (d) => d.id.toLowerCase() === districtId?.toLowerCase()
  );

  if (!district) {
    return <Navigate to="/crafts/bamboo" replace />;
  }

  // Find product
  const product = district.products.find(
    (p) => p.id.toLowerCase() === productId?.toLowerCase()
  );

  if (!product) {
    return <Navigate to={`/crafts/bamboo/${district.id}`} replace />;
  }

  // Related products in this district
  const otherProducts = district.products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div style={{ paddingBottom: '90px' }}>
      <div className="container">
        {/* Breadcrumb Navigation: Home / Explore / Crafts / Bamboo Craft / District / Product */}
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
          <Link to="/explore?category=Crafts" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
            Crafts
          </Link>
          <span>/</span>
          <Link to="/crafts/bamboo" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
            Bamboo Craft
          </Link>
          <span>/</span>
          <Link
            to={`/crafts/bamboo/${district.id}`}
            style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}
          >
            {district.name}
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--color-terracotta)', fontWeight: '600' }}>
            {product.name}
          </span>
        </nav>

        {/* Back Link to District Page */}
        <div style={{ marginBottom: '28px' }}>
          <Link
            to={`/crafts/bamboo/${district.id}`}
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
            <ArrowLeft size={16} /> Back to {district.name} Bamboo Products
          </Link>
        </div>

        {/* Main Product Showcase Card - Editorial / Museum Presentation */}
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
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Cultural Watermark Badge */}
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
                <Leaf size={14} /> Sustainable Forest Bamboo
              </div>
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
              {/* Category & Region Tag */}
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
                  Crafts • Bamboo
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
                  📍 {district.name} District
                </span>
              </div>

              {/* Marathi Name */}
              {product.marathiName && (
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
                  {product.marathiName}
                </span>
              )}

              {/* Product Name */}
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                  fontWeight: '600',
                  color: 'var(--bg-dark-brown)',
                  lineHeight: 1.15,
                  margin: '0 0 16px 0'
                }}
              >
                {product.name}
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
                    {product.village}
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
                  {product.about}
                </p>
              </div>

              {/* Uses */}
              <div style={{ marginBottom: '24px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--bg-dark-brown)',
                    margin: '0 0 10px 0'
                  }}
                >
                  Primary Uses
                </h3>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  {product.uses.map((use, idx) => (
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

              {/* Material & Craft Notes */}
              {(product.material || product.craftTechnique) && (
                <div
                  style={{
                    borderTop: '1px solid rgba(194, 138, 61, 0.25)',
                    paddingTop: '16px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px'
                  }}
                >
                  {product.material && (
                    <div>
                      <span style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>
                        Material
                      </span>
                      <span style={{ fontSize: '0.88rem', color: 'var(--bg-dark-brown)', fontWeight: '600' }}>
                        {product.material}
                      </span>
                    </div>
                  )}
                  {product.craftTechnique && (
                    <div>
                      <span style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>
                        Technique
                      </span>
                      <span style={{ fontSize: '0.88rem', color: 'var(--bg-dark-brown)', fontWeight: '600' }}>
                        {product.craftTechnique}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* More Crafts from this District */}
        {otherProducts.length > 0 && (
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
                More Bamboo Crafts from {district.name}
              </h2>
              <Link
                to={`/crafts/bamboo/${district.id}`}
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
              {otherProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/crafts/bamboo/${district.id}/${p.id}`}
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
                  />
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

      {/* Scoped CSS for product detail layout */}
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
