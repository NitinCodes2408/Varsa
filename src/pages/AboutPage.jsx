import React from 'react';
import { Link } from 'react-router-dom';
import MandalaLogo from '../components/MandalaLogo';
import OrnamentalDivider from '../components/OrnamentalDivider';
import { Compass, BookOpen, Users, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const purposeList = [
    {
      title: "DISCOVER",
      marathi: "शोध",
      desc: "Make hidden heritage visible to the world through digital storytelling.",
      icon: Compass
    },
    {
      title: "DOCUMENT",
      marathi: "जतन",
      desc: "Preserve authentic craft techniques, folklore, and oral traditions digitally.",
      icon: BookOpen
    },
    {
      title: "PROMOTE",
      marathi: "प्रसार",
      desc: "Give local artisans, tribal masters, and traditional performers a dignified global voice.",
      icon: Users
    },
    {
      title: "PRESERVE",
      marathi: "रक्षण",
      desc: "Help centuries-old indigenous wisdom reach and inspire future generations.",
      icon: ShieldCheck
    }
  ];

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* HERO SECTION */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#3A2115',
          color: '#F7F0E3',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          margin: '0 16px 60px 16px',
          boxShadow: 'var(--shadow-card)',
          border: '1.5px solid rgba(194, 138, 61, 0.3)',
          padding: '80px 24px',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '840px' }}>
          <span
            style={{
              fontSize: '0.85rem',
              color: 'var(--color-heritage-gold)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: '700',
              display: 'block',
              marginBottom: '16px'
            }}
          >
            OUR MISSION & STORY
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
              fontWeight: '500',
              color: '#FFFFFF',
              marginBottom: '28px',
              lineHeight: 1.15
            }}
          >
            Why Varsa?
          </h1>

          <div
            style={{
              fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color: 'var(--color-heritage-gold)',
              lineHeight: 1.4,
              marginBottom: '32px'
            }}
          >
            “Some heritage lives in museums.<br />
            Some lives in people's hands.”
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <OrnamentalDivider />
          </div>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(247, 240, 227, 0.9)',
              lineHeight: 1.7,
              maxWidth: '720px',
              margin: '0 auto'
            }}
          >
            Varsa (वारसा) is a cultural discovery and preservation movement dedicated to elevating local crafts, folk traditions, indigenous knowledge, and the living stories of master artisans.
          </p>
        </div>
      </section>

      {/* OUR PURPOSE */}
      <section style={{ padding: '40px 0 70px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="marathi-text" style={{ fontSize: '1rem', color: 'var(--color-terracotta)', fontWeight: '600' }}>
              आमचे ध्येय
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--bg-dark-brown)', marginTop: '4px' }}>
              Our Purpose
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '28px'
            }}
          >
            {purposeList.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 'var(--radius-lg)',
                    padding: '36px 28px',
                    border: '1.5px solid rgba(194, 138, 61, 0.3)',
                    boxShadow: 'var(--shadow-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'rgba(168, 68, 26, 0.1)',
                      border: '1px solid var(--color-terracotta)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-terracotta)',
                      marginBottom: '20px'
                    }}
                  >
                    <IconComp size={28} />
                  </div>

                  <span style={{ fontSize: '0.8rem', color: 'var(--color-terracotta)', fontWeight: '700', letterSpacing: '1px' }}>
                    {p.marathi}
                  </span>

                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--bg-dark-brown)', margin: '4px 0 10px 0' }}>
                    {p.title}
                  </h3>

                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section
        style={{
          padding: '80px 0',
          backgroundColor: '#EDE1CF',
          borderTop: '1px solid rgba(194, 138, 61, 0.25)',
          borderBottom: '1px solid rgba(194, 138, 61, 0.25)',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-terracotta)', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
            OUR PHILOSOPHY
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '600',
              color: 'var(--bg-dark-brown)',
              margin: '20px 0 32px 0',
              lineHeight: 1.25
            }}
          >
            Discover. Learn. Connect. Preserve.
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            Varsa is not an e-commerce storefront; it is a living digital repository. Products are only one thread in a larger tapestry of human effort, ecological balance, and generational wisdom.
          </p>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section style={{ padding: '80px 0 40px 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              padding: '48px 36px',
              boxShadow: 'var(--shadow-subtle)',
              border: '1.5px solid var(--color-heritage-gold)'
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.2rem',
                color: 'var(--bg-dark-brown)',
                marginBottom: '20px'
              }}
            >
              Why It Matters
            </h2>

            <p style={{ fontSize: '1.1rem', color: 'var(--bg-dark-brown)', lineHeight: 1.8, marginBottom: '20px' }}>
              Across countless villages and forest settlements, master artisans create incredible bamboo art, lost-wax metal castings, natural pigments, and musical instruments. Yet, much of this wisdom remains undocumented or hidden from broader awareness.
            </p>

            <p style={{ fontSize: '1.1rem', color: 'var(--bg-dark-brown)', lineHeight: 1.8, marginBottom: '32px' }}>
              Varsa aims to build an enduring digital sanctuary where anyone can explore, learn about, and support this living cultural heritage with deep respect.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/explore" className="btn-primary" style={{ padding: '12px 32px' }}>
                Explore Varsa Platform →
              </Link>
              <Link to="/map" className="btn-outline" style={{ padding: '12px 28px' }}>
                View Heritage Map
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
