import React, { useState, useEffect } from 'react';
import { useParams, Link, useSearchParams, Navigate } from 'react-router-dom';
import { districtData, DISTRICT_CATEGORIES, DISTRICT_LIST } from '../data/districtData';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { MapPin, ArrowLeft, ArrowRight, Sparkles, CheckCircle2, Image as ImageIcon } from 'lucide-react';

export default function DistrictPage() {
  const { districtId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const currentDistrictKey = districtId?.toLowerCase() || 'gadchiroli';
  const district = districtData[currentDistrictKey];

  // If district doesn't exist, fallback to gadchiroli
  if (!district) {
    return <Navigate to="/district/gadchiroli" replace />;
  }

  // Get list of categories that actually have products in this district
  const availableCategories = DISTRICT_CATEGORIES.filter(
    (cat) => district.categories[cat.id] && district.categories[cat.id].length > 0
  );

  const defaultCatId = availableCategories[0]?.id || 'bamboo-craft';
  const requestedCat = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(
    requestedCat && district.categories[requestedCat]?.length > 0 ? requestedCat : defaultCatId
  );

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && district.categories[categoryParam]?.length > 0) {
      setActiveCategory(categoryParam);
    } else if (!district.categories[activeCategory] || district.categories[activeCategory].length === 0) {
      setActiveCategory(defaultCatId);
    }
  }, [searchParams, district, defaultCatId]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setSearchParams({ category: catId });
  };

  const currentCategoryMeta = DISTRICT_CATEGORIES.find((c) => c.id === activeCategory) || availableCategories[0];
  const products = district.categories[activeCategory] || [];

  return (
    <div style={{ paddingBottom: '80px' }}>
      <div className="container">
        {/* Breadcrumb Navigation: Home / Explore / Districts / District */}
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
          <span style={{ color: 'var(--color-terracotta)', fontWeight: '600' }}>
            {district.name} District
          </span>
        </nav>

        {/* District Switcher Tabs at the top */}
        <div style={{ marginBottom: '28px' }}>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              color: 'var(--color-text-muted)',
              display: 'block',
              marginBottom: '10px'
            }}
          >
            Explore Heritage Districts
          </span>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              overflowX: 'auto',
              paddingBottom: '6px'
            }}
            className="no-scrollbar"
          >
            {DISTRICT_LIST.map((dist) => {
              const isSelected = dist.id === district.id;
              return (
                <Link
                  key={dist.id}
                  to={`/district/${dist.id}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    border: isSelected
                      ? '1.5px solid var(--color-terracotta)'
                      : '1.5px solid rgba(194, 138, 61, 0.3)',
                    backgroundColor: isSelected ? 'var(--color-terracotta)' : '#EDE1CF',
                    color: isSelected ? '#FFFFFF' : 'var(--bg-dark-brown)',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.92rem',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                    boxShadow: isSelected ? '0 4px 12px rgba(168, 68, 26, 0.3)' : 'none',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <MapPin size={14} />
                  <span>{dist.name}</span>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      opacity: 0.85,
                      marginLeft: '2px'
                    }}
                  >
                    ({dist.marathiName})
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Hero Banner for the Selected District */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#3A2115',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            marginBottom: '40px',
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
              backgroundPosition: 'center',
              opacity: 0.42
            }}
          />

          {/* Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(36, 24, 18, 0.35) 0%, rgba(26, 16, 11, 0.92) 100%)'
            }}
          />

          {/* Banner Content */}
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
                backgroundColor: 'rgba(168, 68, 26, 0.9)',
                padding: '5px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
                marginBottom: '16px',
                backdropFilter: 'blur(6px)'
              }}
            >
              <MapPin size={14} /> Authentic Regional Heritage
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', flexWrap: 'wrap' }}>
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  lineHeight: 1.12,
                  margin: 0
                }}
              >
                📍 {district.name}
              </h1>
              <span
                className="marathi-text"
                style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  color: 'var(--color-heritage-gold)',
                  fontWeight: '600'
                }}
              >
                {district.marathiName}
              </span>
            </div>

            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--color-heritage-gold)',
                fontWeight: '500',
                margin: '12px 0 12px 0'
              }}
            >
              “{district.tagline}”
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                color: 'rgba(247, 240, 227, 0.9)',
                lineHeight: 1.65,
                margin: 0,
                maxWidth: '720px'
              }}
            >
              {district.shortIntro}
            </p>
          </div>
        </div>

        {/* Category Header */}
        <div style={{ marginBottom: '20px' }}>
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              color: 'var(--color-terracotta)',
              display: 'block',
              marginBottom: '4px'
            }}
          >
            Explore {district.name} By Category
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.8rem',
              color: 'var(--bg-dark-brown)',
              fontWeight: '600',
              margin: 0
            }}
          >
            Select a Heritage Category
          </h2>
        </div>

        {/* Category Pills Navigation */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            overflowX: 'auto',
            paddingBottom: '12px',
            marginBottom: '36px'
          }}
          className="no-scrollbar"
        >
          {availableCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = district.categories[cat.id]?.length || 0;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: 'var(--radius-full)',
                  border: isActive
                    ? '1.5px solid var(--color-terracotta)'
                    : '1.5px solid rgba(194, 138, 61, 0.3)',
                  backgroundColor: isActive ? 'var(--color-terracotta)' : '#EDE1CF',
                  color: isActive ? '#FFFFFF' : 'var(--bg-dark-brown)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.94rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isActive ? '0 4px 14px rgba(168, 68, 26, 0.3)' : 'none',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
                <span
                  style={{
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(194, 138, 61, 0.2)',
                    color: isActive ? '#FFFFFF' : 'var(--color-text-muted)',
                    fontSize: '0.75rem',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: '700'
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Header Label */}
        {currentCategoryMeta && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(194, 138, 61, 0.25)',
              paddingBottom: '12px',
              marginBottom: '32px'
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.6rem',
                  color: 'var(--bg-dark-brown)',
                  fontWeight: '600',
                  margin: 0
                }}
              >
                {currentCategoryMeta.icon} {district.name} • {currentCategoryMeta.name}
              </h3>
              <span className="marathi-text" style={{ fontSize: '0.92rem', color: 'var(--color-heritage-gold)' }}>
                {currentCategoryMeta.marathi}
              </span>
            </div>
            <span style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', fontWeight: '500' }}>
              Showing {products.length} verified products
            </span>
          </div>
        )}

        {/* Clean 3-Column Desktop / 1-2 Column Mobile Grid of Product Cards */}
        {products.length > 0 ? (
          <div className="district-products-grid">
            {products.map((product) => (
              <article
                key={product.id}
                className="district-product-card"
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
                {/* Real Product Image with Error Fallback */}
                <Link
                  to={`/district/${district.id}/${product.categoryId}/${product.id}`}
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
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}

                  {/* Fallback "Image coming soon" */}
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
                    <ImageIcon size={28} />
                    <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>
                      Authentic Photograph Coming Soon
                    </span>
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(36, 24, 18, 0.88)',
                      color: 'var(--color-heritage-gold)',
                      fontSize: '0.74rem',
                      fontWeight: '600',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-sm)',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    📍 {product.district}
                  </div>
                </Link>

                {/* Card Content */}
                <div
                  style={{
                    padding: '22px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                  }}
                >
                  {/* Product Name */}
                  <h4
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.38rem',
                      fontWeight: '600',
                      color: 'var(--bg-dark-brown)',
                      margin: '0 0 6px 0',
                      lineHeight: 1.25
                    }}
                  >
                    <Link
                      to={`/district/${district.id}/${product.categoryId}/${product.id}`}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {product.name}
                    </Link>
                  </h4>

                  {/* Production Village / Location */}
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
                    <span>Production Location: {product.village}</span>
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
                          <span style={{ color: 'var(--color-heritage-gold)', fontWeight: 'bold' }}>•</span>
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Details Link */}
                  <Link
                    to={`/district/${district.id}/${product.categoryId}/${product.id}`}
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
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#EDE1CF',
              borderRadius: 'var(--radius-lg)',
              border: '1.5px dashed var(--color-heritage-gold)'
            }}
          >
            <p style={{ color: 'var(--color-text-muted)', margin: 0 }}>
              No products listed under this category yet.
            </p>
          </div>
        )}
      </div>

      {/* Scoped CSS for responsive 3-column grid and hover effects */}
      <style>{`
        .district-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .district-product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-card);
          border-color: var(--color-heritage-gold);
        }

        .district-product-card:hover .product-card-img {
          transform: scale(1.05);
        }

        .product-detail-btn:hover {
          background-color: var(--color-terracotta) !important;
        }

        @media (max-width: 1024px) {
          .district-products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .district-products-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}
