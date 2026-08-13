import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { stories } from '../data/varsaData';
import StoryCard from '../components/StoryCard';
import SectionHeading from '../components/SectionHeading';
import { Clock, User, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';

export default function CulturalStoryDetailPage() {
  const { id } = useParams();
  const story = stories.find((s) => s.id === id) || stories[0];
  const otherStories = stories.filter((s) => s.id !== story.id).slice(0, 2);

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Top Banner */}
      <div className="container" style={{ marginBottom: '24px' }}>
        <Link
          to="/stories"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--color-terracotta)',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '0.95rem'
          }}
        >
          <ArrowLeft size={16} /> Back to Cultural Stories
        </Link>
      </div>

      {/* Hero Cinematic Image */}
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
            backgroundImage: `url('${story.heroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(36, 24, 18, 0.3) 0%, rgba(36, 24, 18, 0.95) 100%)'
          }}
        />

        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 2,
            paddingTop: '80px',
            paddingBottom: '80px',
            maxWidth: '860px',
            textAlign: 'center'
          }}
        >
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
            CULTURAL STORY
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
              fontWeight: '600',
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: '16px'
            }}
          >
            {story.title}
          </h1>

          <p
            style={{
              fontSize: '1.25rem',
              color: 'rgba(247, 240, 227, 0.9)',
              lineHeight: 1.6,
              marginBottom: '24px',
              maxWidth: '720px',
              margin: '0 auto 24px auto'
            }}
          >
            {story.subtitle}
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '20px',
              fontSize: '0.9rem',
              color: 'var(--color-heritage-gold)'
            }}
          >
            <span>{story.date}</span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} /> {story.readTime}
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <User size={14} /> {story.author}
            </span>
          </div>
        </div>
      </section>

      {/* EDITORIAL CONTENT BODY */}
      <article className="container" style={{ maxWidth: '820px', margin: '0 auto 60px auto' }}>
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            padding: '48px 36px',
            boxShadow: 'var(--shadow-subtle)',
            border: '1px solid rgba(194, 138, 61, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px'
          }}
        >
          {story.sections ? (
            story.sections.map((sec, idx) => (
              <div key={idx}>
                {sec.heading && (
                  <h2
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.8rem',
                      color: 'var(--bg-dark-brown)',
                      marginBottom: '14px',
                      borderLeft: '4px solid var(--color-terracotta)',
                      paddingLeft: '14px'
                    }}
                  >
                    {sec.heading}
                  </h2>
                )}

                {sec.image && (
                  <div style={{ margin: '16px 0 24px 0', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                    <img src={sec.image} alt={sec.heading} style={{ width: '100%', height: '340px', objectFit: 'cover' }} />
                  </div>
                )}

                <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--bg-dark-brown)' }}>
                  {sec.text}
                </p>
              </div>
            ))
          ) : (
            <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--bg-dark-brown)' }}>
              This story captures the deep connection between local indigenous artisans and the ecological legacy of our soil.
            </p>
          )}

          {/* Share / Preserve Callout */}
          <div
            style={{
              backgroundColor: '#EDE1CF',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              border: '1.5px solid var(--color-heritage-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--bg-dark-brown)', margin: 0 }}>
                Stories worth preserving.
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                Pass this knowledge to your friends and community.
              </p>
            </div>
            <Link to="/stories" className="btn-primary">
              Explore More Stories <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>

      {/* MORE STORIES */}
      {otherStories.length > 0 && (
        <section style={{ padding: '40px 0' }}>
          <div className="container">
            <SectionHeading title="More Cultural Stories" actionText="View All Stories →" actionLink="/stories" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
              {otherStories.map((s) => (
                <StoryCard key={s.id} story={s} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
