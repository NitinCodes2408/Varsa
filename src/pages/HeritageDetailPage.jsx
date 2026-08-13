import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SaveButton from '../components/SaveButton';
import HeritageCard from '../components/HeritageCard';
import SectionHeading from '../components/SectionHeading';
import { heritageItems, artisans } from '../data/varsaData';
import { MapPin, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function HeritageDetailPage() {
  const { id } = useParams();

  // Find item by ID, or fallback to first item
  const item = heritageItems.find((h) => h.id === id) || heritageItems[0];
  const artisan = artisans.find((a) => a.id === item.artisanId) || artisans[0];

  const relatedItems = heritageItems.filter((h) => item.relatedIds?.includes(h.id) || (h.id !== item.id && h.category === item.category)).slice(0, 3);

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* HERO SECTION */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#3A2115',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          margin: '0 16px 50px 16px',
          boxShadow: 'var(--shadow-card)',
          border: '1.5px solid rgba(194, 138, 61, 0.3)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('${item.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(36, 24, 18, 0.4) 0%, rgba(36, 24, 18, 0.95) 100%)'
          }}
        />

        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 2,
            paddingTop: '80px',
            paddingBottom: '80px',
            maxWidth: '900px'
          }}
        >
          {/* Breadcrumb */}
          <nav style={{ fontSize: '0.88rem', color: 'rgba(247, 240, 227, 0.7)', marginBottom: '20px' }}>
            <Link to="/" style={{ color: 'rgba(247, 240, 227, 0.7)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <Link to="/explore" style={{ color: 'rgba(247, 240, 227, 0.7)', textDecoration: 'none' }}>Explore</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: 'var(--color-heritage-gold)', fontWeight: '600' }}>{item.title}</span>
          </nav>

          <span
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--color-terracotta)',
              color: '#FFFFFF',
              fontSize: '0.78rem',
              fontWeight: '700',
              padding: '4px 14px',
              borderRadius: 'var(--radius-full)',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}
          >
            {item.category}
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              fontWeight: '600',
              color: '#FFFFFF',
              marginBottom: '16px',
              lineHeight: 1.1
            }}
          >
            {item.title}
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'rgba(247, 240, 227, 0.9)',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '740px'
            }}
          >
            {item.tagline}
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#story-section" className="btn-primary" style={{ padding: '12px 30px' }}>
              Explore More
            </a>
            <SaveButton heritageId={item.id} size="lg" variant="dark" />
          </div>
        </div>
      </section>

      {/* STORY SECTION: More Than a Product */}
      <section id="story-section" style={{ padding: '40px 0 70px 0' }}>
        <div className="container">
          <SectionHeading title={item.storyTitle || "More Than a Product"} marathi="सांस्कृतिक वारसा" />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            {/* Left: Large Heritage Image */}
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <img
                src={item.storyImage || item.image}
                alt={item.title}
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  border: '2px solid var(--color-heritage-gold)',
                  borderRadius: 'var(--radius-lg)',
                  pointerEvents: 'none'
                }}
              />
            </div>

            {/* Right: Storytelling Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {item.storyContent.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: '1.1rem',
                    color: 'var(--bg-dark-brown)',
                    lineHeight: 1.8
                  }}
                >
                  {paragraph}
                </p>
              ))}

              <div
                style={{
                  backgroundColor: '#EDE1CF',
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '4px solid var(--color-terracotta)',
                  marginTop: '10px'
                }}
              >
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--bg-dark-brown)', marginBottom: '4px' }}>
                  Cultural Significance
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  This tradition represents eco-conscious harmony, binding local communities with the cyclical wisdom of nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CREATED? */}
      {item.createdItems && item.createdItems.length > 0 && (
        <section style={{ padding: '60px 0', backgroundColor: '#EDE1CF', borderTop: '1px solid rgba(194, 138, 61, 0.2)' }}>
          <div className="container">
            <SectionHeading title="What is Created?" subtitle="Discover the range of traditional utility and decorative forms crafted by local hands." center />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '20px',
                marginTop: '32px'
              }}
            >
              {item.createdItems.map((ci, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#F7F0E3',
                    padding: '24px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(194, 138, 61, 0.3)',
                    textAlign: 'center',
                    boxShadow: 'var(--shadow-subtle)',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{ci.icon}</div>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--bg-dark-brown)', marginBottom: '4px' }}>
                    {ci.name}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>{ci.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* HOW IT IS MADE - Process Timeline */}
      {item.processSteps && (
        <section style={{ padding: '70px 0' }}>
          <div className="container">
            <SectionHeading title="How it is Made" subtitle="A visual step-by-step glimpse into the traditional craft process." center />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '24px',
                marginTop: '40px'
              }}
            >
              {item.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'relative',
                    backgroundColor: '#FFFFFF',
                    padding: '30px 24px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1.5px solid rgba(194, 138, 61, 0.3)',
                    boxShadow: 'var(--shadow-subtle)'
                  }}
                >
                  <div
                    style={{
                      fontSize: '2rem',
                      fontFamily: 'var(--font-serif)',
                      fontWeight: '700',
                      color: 'var(--color-heritage-gold)',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{step.step}</span>
                    <Sparkles size={20} color="var(--color-terracotta)" />
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--bg-dark-brown)', marginBottom: '8px' }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MEET THE ARTISAN PREVIEW */}
      {artisan && (
        <section style={{ padding: '60px 0', backgroundColor: '#3A2115', color: '#F7F0E3' }}>
          <div className="container">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
                alignItems: 'center'
              }}
            >
              <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  style={{ width: '100%', height: '360px', objectFit: 'cover' }}
                />
              </div>

              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-heritage-gold)', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700' }}>
                  MEET THE MAKER
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: '#FFFFFF', margin: '8px 0 12px 0' }}>
                  {artisan.name}
                </h2>
                <p style={{ color: 'var(--color-heritage-gold)', fontSize: '1.05rem', fontWeight: '600', marginBottom: '16px' }}>
                  {artisan.role} • 📍 {artisan.location}
                </p>
                <p style={{ fontSize: '1.05rem', color: 'rgba(247, 240, 227, 0.85)', lineHeight: 1.7, marginBottom: '24px' }}>
                  {artisan.story[0]}
                </p>
                <Link to={`/artisan/${artisan.id}`} className="btn-gold" style={{ padding: '12px 28px' }}>
                  Meet the Artisan →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* RELATED HERITAGE */}
      {relatedItems.length > 0 && (
        <section style={{ padding: '70px 0' }}>
          <div className="container">
            <SectionHeading title="Related Heritage" subtitle="Discover other traditional art forms, crafts and cultural stories." />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '24px'
              }}
            >
              {relatedItems.map((r) => (
                <HeritageCard key={r.id} item={r} variant="grid" />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
