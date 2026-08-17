import React from 'react';
import { Link } from 'react-router-dom';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { MapPin, ArrowRight, Sparkles, Compass, Image as ImageIcon } from 'lucide-react';

const exploreDistricts = [
  {
    id: "gadchiroli",
    name: "Gadchiroli",
    marathiName: "गडचिरोली",
    speciality: "Bamboo Crafts",
    icon: "🎋",
    description: "Discover authentic bamboo baskets, indigenous Manvel craft weaving, wild honey, and sacred tribal traditions of the deep forest belt.",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=900&q=80",
    verifiedVillages: "Mendha Lekha, Bhamragad, Dhanora"
  },
  {
    id: "chandrapur",
    name: "Chandrapur",
    marathiName: "चंद्रपूर",
    speciality: "Local Handicrafts & Forest Products",
    icon: "🏺",
    description: "Explore 4,000-year-old lost-wax Dhokra metalcrafts, precision-tuned bamboo flutes, red clay pottery, and legendary Saoji spices.",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=900&q=80",
    verifiedVillages: "Mul, Ballarpur, Nagbhid, Bhadravati"
  },
  {
    id: "kolhapur",
    name: "Kolhapur",
    marathiName: "कोल्हापूर",
    speciality: "Kolhapuri Chappal",
    icon: "👞",
    description: "Experience world-renowned GI-tagged handcrafted leather footwear, authentic 21-motif Kolhapuri Saaj jewelry, and organic cane jaggery.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Kolhapuri_chappals.jpg/960px-Kolhapuri_chappals.jpg",
    verifiedVillages: "Subhashnagar Cluster, Gujari, Karveer"
  },
  {
    id: "solapur",
    name: "Solapur",
    marathiName: "सोलापूर",
    speciality: "Solapuri Chaddar",
    icon: "🧵",
    description: "Discover Maharashtra's premier GI-tagged jacquard-woven pure cotton blankets, absorbent terry towels, and fiery roasted peanut chutney.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=80",
    verifiedVillages: "Padmashali Weaver Cluster, MIDC Textile, Sangola"
  },
  {
    id: "nagpur",
    name: "Nagpur",
    marathiName: "नागपूर",
    speciality: "Nagpur Orange Products",
    icon: "🍊",
    description: "Discover authentic local products inspired by Nagpur's famous orange heritage — from GI-tagged Mandarin Oranges to iconic Santra Burfi and citrus herbal crafts.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nagpur_orange_article.JPG/1280px-Nagpur_orange_article.JPG",
    verifiedVillages: "Katol, Kalmeshwar, Narkhed, Itwari"
  }
];

export default function ExplorePage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          style={{
            fontSize: '0.9rem',
            color: 'var(--color-text-muted)',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Link to="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
            Home
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--color-terracotta)', fontWeight: '600' }}>
            Explore by District
          </span>
        </nav>

        {/* Header Section */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto 44px auto'
          }}
        >
          {/* Marathi Tagline */}
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
              जिल्ह्यानुसार वारसा शोध
            </span>
            <OrnamentalDivider />
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
              fontWeight: '600',
              color: 'var(--bg-dark-brown)',
              lineHeight: 1.15,
              marginBottom: '14px'
            }}
          >
            Explore by District
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: 'var(--color-text-muted)',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto',
              fontWeight: '400'
            }}
          >
            “Every district has its own stories, crafts and treasures.”
          </p>
        </div>

        {/* Section Heading Banner */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '28px',
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
              Select a Heritage District
            </h2>
            <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              Choose a region to discover its authentic local products and verified crafts
            </p>
          </div>

          <span
            style={{
              fontSize: '0.85rem',
              color: 'var(--color-heritage-gold)',
              fontWeight: '700',
              backgroundColor: '#EDE1CF',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(194, 138, 61, 0.3)'
            }}
          >
            5 Verified Districts
          </span>
        </div>

        {/* 2 × 2 District Card Grid on Desktop, Single Column on Mobile */}
        <div className="explore-districts-grid">
          {exploreDistricts.map((district) => (
            <Link
              key={district.id}
              to={`/district/${district.id}`}
              className="district-explore-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                textDecoration: 'none',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'var(--shadow-card)',
                border: '1.5px solid rgba(194, 138, 61, 0.3)',
                backgroundColor: 'var(--bg-dark-brown)',
                minHeight: '420px',
                transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)'
              }}
            >
              {/* Real Background Product Photograph */}
              <div
                className="district-explore-bg"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url('${district.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.5s ease',
                  opacity: 0.85
                }}
              />

              {/* Fallback Badge if Image Fails */}
              <div
                className="image-fallback-badge"
                style={{
                  display: 'none',
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: '#3A2115',
                  color: 'var(--color-heritage-gold)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '8px',
                  zIndex: 0
                }}
              >
                <ImageIcon size={32} />
                <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Authentic Photograph Coming Soon</span>
              </div>

              {/* Dark Gradient Overlay for Readability */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(28, 17, 12, 0.25) 0%, rgba(32, 18, 12, 0.6) 40%, rgba(20, 12, 8, 0.95) 100%)',
                  zIndex: 1
                }}
              />

              {/* Top Badges */}
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
                {/* Speciality Badge */}
                <span
                  style={{
                    backgroundColor: 'rgba(168, 68, 26, 0.92)',
                    color: '#FFFFFF',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    letterSpacing: '0.6px',
                    backdropFilter: 'blur(6px)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
                  }}
                >
                  <span>{district.icon}</span>
                  <span>Speciality: {district.speciality}</span>
                </span>
              </div>

              {/* Bottom Content Area */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '32px 28px 28px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div>
                  <span
                    className="marathi-text"
                    style={{
                      color: 'var(--color-heritage-gold)',
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      display: 'block',
                      marginBottom: '2px'
                    }}
                  >
                    {district.marathiName}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.9rem, 3vw, 2.5rem)',
                      color: '#FFFFFF',
                      fontWeight: '600',
                      margin: 0,
                      lineHeight: 1.15
                    }}
                  >
                    📍 {district.name}
                  </h3>
                </div>

                {/* Short Description */}
                <p
                  style={{
                    color: 'rgba(247, 240, 227, 0.92)',
                    fontSize: '0.96rem',
                    lineHeight: 1.5,
                    margin: '4px 0 16px 0',
                    maxWidth: '480px'
                  }}
                >
                  {district.description}
                </p>

                {/* Bottom Row: Verified Village Tag & Explore Button */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                    paddingTop: '16px'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.78rem',
                      color: 'rgba(247, 240, 227, 0.75)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <MapPin size={12} color="var(--color-heritage-gold)" />
                    {district.verifiedVillages}
                  </span>

                  {/* Explore Button */}
                  <div
                    className="explore-cta-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#FFFFFF',
                      backgroundColor: 'var(--color-terracotta)',
                      padding: '8px 20px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.92rem',
                      fontWeight: '600',
                      boxShadow: '0 4px 14px rgba(168, 68, 26, 0.4)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Explore {district.name} <ArrowRight size={15} />
                  </div>
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
            <span style={{ fontWeight: '700', fontSize: '0.88rem', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
              Rooted in the Soil of Maharashtra
            </span>
          </div>
          <h4
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.45rem',
              color: 'var(--bg-dark-brown)',
              margin: 0
            }}
          >
            Preserving Geographical Indications & Regional Master Crafts
          </h4>
          <p
            style={{
              fontSize: '0.98rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.65,
              margin: 0
            }}
          >
            Every product cataloged in <strong>वारसा</strong> is rooted in its genuine geographical cluster—from the forest bamboo artisans of Gadchiroli and bell-metal metallurgists of Chandrapur to the royal leather craftsmen of Kolhapur and master jacquard weavers of Solapur. Selecting any district unlocks its verified categories, artisan villages, and traditional utilities.
          </p>
        </div>
      </div>

      {/* Scoped CSS for 2x2 Grid and Hover Effects */}
      <style>{`
        .explore-districts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .district-explore-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-hover);
          border-color: var(--color-heritage-gold) !important;
        }

        .district-explore-card:hover .district-explore-bg {
          transform: scale(1.04);
        }

        .district-explore-card:hover .explore-cta-btn {
          background-color: var(--color-heritage-gold) !important;
          transform: translateX(3px);
        }

        @media (max-width: 768px) {
          .explore-districts-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}
