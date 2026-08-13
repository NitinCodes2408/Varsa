import React from 'react';
import { Link } from 'react-router-dom';
import OrnamentalDivider from '../components/OrnamentalDivider';
import HeritageCard from '../components/HeritageCard';
import StoryCard from '../components/StoryCard';
import ArtisanCard from '../components/ArtisanCard';
import SectionHeading from '../components/SectionHeading';
import { popularDiscoveries, stories, artisans } from '../data/varsaData';
import { ShoppingBag, MapPin, Users, BookOpen, Leaf, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const values = [
    {
      icon: ShoppingBag,
      title: "Authentic Crafts",
      desc: "Handmade with generations of expertise."
    },
    {
      icon: MapPin,
      title: "Local Discoveries",
      desc: "Explore hidden gems in your own surroundings."
    },
    {
      icon: Users,
      title: "Support Artisans",
      desc: "Empower local artisans and preserve traditions."
    },
    {
      icon: BookOpen,
      title: "Cultural Stories",
      desc: "Stories that connect you to the roots of our land."
    },
    {
      icon: Leaf,
      title: "Sustainable",
      desc: "Eco-friendly choices for a better tomorrow."
    }
  ];

  return (
    <div>
      {/* HERO SECTION - Matching Reference Image exact visual */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#3A2115',
          color: '#FFFFFF',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          margin: '0 16px 40px 16px',
          boxShadow: 'var(--shadow-card)',
          border: '1.5px solid rgba(194, 138, 61, 0.3)'
        }}
      >
        {/* Background Image Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url('/hero-background.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            opacity: 0.55
          }}
        />

        {/* Dark Vignette Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(58, 33, 21, 0.3) 0%, rgba(36, 24, 18, 0.9) 100%)'
          }}
        />

        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 2,
            paddingTop: '90px',
            paddingBottom: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '860px'
          }}
        >
          {/* Main Heading */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: '500',
              lineHeight: 1.12,
              color: '#FFFFFF',
              marginBottom: '20px',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            Discover the Hidden Heritage Around You
          </h1>

          {/* Marathi Highlight with Golden Ornamental Dividers */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              margin: '12px 0 24px 0'
            }}
          >
            <OrnamentalDivider />
            <span
              className="marathi-text"
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                fontWeight: '600',
                color: 'var(--color-heritage-gold)',
                letterSpacing: '0.8px',
                whiteSpace: 'nowrap'
              }}
            >
              आपल्या मातीचा, आपल्या लोकांचा.
            </span>
            <OrnamentalDivider />
          </div>

          {/* Subtitle Description */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              color: 'rgba(247, 240, 227, 0.9)',
              maxWidth: '680px',
              margin: '0 auto 36px auto',
              lineHeight: 1.6,
              fontWeight: '400'
            }}
          >
            Explore authentic products, traditional crafts, inspiring stories and incredible artisans from our local heritage.
          </p>

          {/* CTA Button */}
          <Link
            to="/explore"
            className="btn-primary"
            style={{
              fontSize: '1.1rem',
              padding: '14px 36px',
              backgroundColor: '#A8441A',
              boxShadow: '0 8px 24px rgba(168, 68, 26, 0.4)'
            }}
          >
            Explore वारसा →
          </Link>
        </div>

        {/* Wavy Decorative Bottom Scallop Divider matching reference image */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '24px',
            background: 'radial-gradient(circle at 12px 24px, var(--bg-cream) 12px, transparent 13px)',
            backgroundSize: '24px 24px'
          }}
        />
      </section>

      {/* VALUES SECTION - 5 Columns matching homepage reference */}
      <section style={{ padding: '20px 0 60px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              backgroundColor: '#EDE1CF',
              padding: '32px 24px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(194, 138, 61, 0.3)',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '12px 10px'
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(194, 138, 61, 0.15)',
                      border: '1.5px solid var(--color-heritage-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--bg-dark-brown)',
                      marginBottom: '16px'
                    }}
                  >
                    <IconComp size={24} strokeWidth={1.75} />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: 'var(--bg-dark-brown)',
                      marginBottom: '6px'
                    }}
                  >
                    {v.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.4
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POPULAR DISCOVERIES SECTION */}
      <section style={{ padding: '20px 0 60px 0' }}>
        <div className="container">
          <SectionHeading
            title="Popular Discoveries"
            actionText="View All →"
            actionLink="/explore"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }}
          >
            {popularDiscoveries.map((item) => (
              <HeritageCard key={item.id} item={item} variant="popular" />
            ))}
          </div>
        </div>
      </section>

      {/* CULTURAL STORIES TEASER SECTION */}
      <section style={{ padding: '30px 0 60px 0' }}>
        <div className="container">
          <SectionHeading
            title="Stories That Deserve to Be Remembered"
            subtitle="Explore the people, traditions and stories behind our living heritage."
            actionText="Explore All Stories →"
            actionLink="/stories"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
          >
            {stories.slice(0, 3).map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE ARTISANS SECTION */}
      <section
        style={{
          padding: '60px 0',
          backgroundColor: '#EDE1CF',
          borderTop: '1px solid rgba(194, 138, 61, 0.25)',
          borderBottom: '1px solid rgba(194, 138, 61, 0.25)'
        }}
      >
        <div className="container">
          <SectionHeading
            title="The Guardians of Our Craft"
            subtitle="Meet the master artisans who preserve centuries-old knowledge with their hands."
            actionText="Explore All Artisans →"
            actionLink="/explore"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '28px'
            }}
          >
            {artisans.slice(0, 3).map((artisan) => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section style={{ padding: '80px 0 40px 0' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--bg-dark-brown)',
              borderRadius: 'var(--radius-xl)',
              padding: '60px 32px',
              textAlign: 'center',
              color: '#F7F0E3',
              border: '2px solid var(--color-heritage-gold)',
              boxShadow: 'var(--shadow-card)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <span
              className="marathi-text"
              style={{
                fontSize: '1.2rem',
                color: 'var(--color-heritage-gold)',
                fontWeight: '600',
                display: 'block',
                marginBottom: '12px'
              }}
            >
              वारसा संस्कृतीचा
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                color: '#FFFFFF',
                maxWidth: '720px',
                margin: '0 auto 20px auto',
                lineHeight: 1.2
              }}
            >
              Every craft has a story. Every story has a home.
            </h2>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'rgba(247, 240, 227, 0.85)',
                maxWidth: '600px',
                margin: '0 auto 32px auto'
              }}
            >
              Join us in documenting, celebrating, and preserving our living cultural heritage.
            </p>

            <Link to="/explore" className="btn-gold" style={{ padding: '14px 36px', fontSize: '1.05rem' }}>
              Start Exploring Varsa <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
