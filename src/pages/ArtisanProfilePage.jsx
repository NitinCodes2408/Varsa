import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { artisans, heritageItems } from '../data/varsaData';
import HeritageCard from '../components/HeritageCard';
import SectionHeading from '../components/SectionHeading';
import { MapPin, Award, Heart, Users, Sparkles } from 'lucide-react';

export default function ArtisanProfilePage() {
  const { id } = useParams();
  const artisan = artisans.find((a) => a.id === id) || artisans[0];

  const artisanCraftItems = heritageItems.filter(h => artisan.crafts?.includes(h.title) || h.artisanId === artisan.id);

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* HERO */}
      <section
        style={{
          backgroundColor: '#3A2115',
          color: '#F7F0E3',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          margin: '0 16px 50px 16px',
          boxShadow: 'var(--shadow-card)',
          border: '1.5px solid rgba(194, 138, 61, 0.3)',
          padding: '60px 24px'
        }}
      >
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '2px solid var(--color-heritage-gold)' }}>
            <img
              src={artisan.image}
              alt={artisan.name}
              style={{ width: '100%', height: '420px', objectFit: 'cover' }}
            />
          </div>

          <div>
            <span
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-heritage-gold)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontWeight: '700',
                display: 'block',
                marginBottom: '8px'
              }}
            >
              MEET THE MAKER
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
                fontWeight: '600',
                color: '#FFFFFF',
                lineHeight: 1.1,
                marginBottom: '12px'
              }}
            >
              {artisan.name}
            </h1>

            <div
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(168, 68, 26, 0.85)',
                color: '#FFFFFF',
                padding: '4px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: '600',
                marginBottom: '20px'
              }}
            >
              Traditional Artisan • {artisan.role}
            </div>

            <div style={{ display: 'flex', gap: '20px', fontSize: '1rem', color: 'rgba(247, 240, 227, 0.85)', marginBottom: '24px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={18} color="var(--color-heritage-gold)" />
                {artisan.location}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Award size={18} color="var(--color-heritage-gold)" />
                {artisan.experience}
              </span>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                borderLeft: '4px solid var(--color-heritage-gold)'
              }}
            >
              <span style={{ fontSize: '0.82rem', color: 'var(--color-heritage-gold)', textTransform: 'uppercase', fontWeight: '700' }}>
                COMMUNITY GUILD
              </span>
              <p style={{ fontSize: '1.05rem', color: '#F7F0E3', fontWeight: '600', margin: '4px 0 0 0' }}>
                {artisan.community}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section style={{ padding: '40px 0 60px 0' }}>
        <div className="container">
          <SectionHeading title="A Craft Passed Through Generations" marathi="अखंड परंपरा" />

          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              padding: '40px 32px',
              boxShadow: 'var(--shadow-subtle)',
              border: '1px solid rgba(194, 138, 61, 0.25)',
              maxWidth: '900px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            {artisan.story.map((p, idx) => (
              <p key={idx} style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--bg-dark-brown)' }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ARTISAN QUOTE SECTION */}
      <section style={{ padding: '60px 0', backgroundColor: '#EDE1CF', borderTop: '1px solid rgba(194, 138, 61, 0.25)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <Sparkles size={36} color="var(--color-terracotta)" style={{ marginBottom: '16px' }} />
          <blockquote
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
              fontStyle: 'italic',
              fontWeight: '500',
              color: 'var(--bg-dark-brown)',
              lineHeight: 1.35,
              marginBottom: '20px'
            }}
          >
            “{artisan.quote}”
          </blockquote>
          <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--color-terracotta)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            — {artisan.name}
          </span>
        </div>
      </section>

      {/* THEIR CRAFT */}
      <section style={{ padding: '70px 0' }}>
        <div className="container">
          <SectionHeading title="Their Living Creations" subtitle="Explore authentic crafts shaped by this artisan and their heritage guild." />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '28px'
            }}
          >
            {artisanCraftItems.map((item) => (
              <HeritageCard key={item.id} item={item} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* ARTISAN DETAILS SUMMARY BOX */}
      <section style={{ padding: '20px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div
            style={{
              backgroundColor: '#F7F0E3',
              borderRadius: 'var(--radius-lg)',
              padding: '32px',
              border: '1.5px solid var(--color-heritage-gold)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '24px',
              textAlign: 'center'
            }}
          >
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Craft Specialty</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--bg-dark-brown)', marginTop: '4px' }}>
                {artisan.crafts ? artisan.crafts[0] : "Traditional Craft"}
              </h4>
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Community</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--bg-dark-brown)', marginTop: '4px' }}>
                {artisan.community}
              </h4>
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Experience</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--bg-dark-brown)', marginTop: '4px' }}>
                {artisan.experience}
              </h4>
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Location</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--bg-dark-brown)', marginTop: '4px' }}>
                {artisan.location}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
