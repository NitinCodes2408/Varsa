import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

export default function StoryCard({ story }) {
  return (
    <article
      className="hover-card-lift"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-subtle)',
        border: '1px solid rgba(194, 138, 61, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <img
          src={story.heroImage}
          alt={story.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'var(--transition-smooth)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            backgroundColor: 'rgba(58, 33, 21, 0.85)',
            color: 'var(--color-heritage-gold)',
            fontSize: '0.72rem',
            fontWeight: '700',
            padding: '4px 12px',
            borderRadius: 'var(--radius-full)',
            letterSpacing: '0.8px',
            backdropFilter: 'blur(4px)'
          }}
        >
          {story.category}
        </div>
      </div>

      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '8px' }}>
            <span>{story.date}</span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={13} />
              {story.readTime}
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.45rem',
              fontWeight: '600',
              color: 'var(--bg-dark-brown)',
              marginBottom: '10px',
              lineHeight: 1.25
            }}
          >
            {story.title}
          </h3>

          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.5,
              marginBottom: '20px',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {story.subtitle}
          </p>
        </div>

        <Link
          to={`/stories/${story.id}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--color-terracotta)',
            fontWeight: '700',
            fontSize: '0.95rem',
            textDecoration: 'none'
          }}
        >
          Read Cultural Story <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
