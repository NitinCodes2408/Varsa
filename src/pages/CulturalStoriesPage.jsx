import React from 'react';
import { stories } from '../data/varsaData';
import StoryCard from '../components/StoryCard';

export default function CulturalStoriesPage() {
  return (
    <div style={{ paddingBottom: '80px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}>
          <span
            className="marathi-text"
            style={{ fontSize: '1.1rem', color: 'var(--color-terracotta)', fontWeight: '600', display: 'block', marginBottom: '8px' }}
          >
            डिजिटल नियतकालिक
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: '600',
              color: 'var(--bg-dark-brown)',
              lineHeight: 1.15,
              marginBottom: '16px'
            }}
          >
            Stories That Deserve to Be Remembered
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Explore the people, traditions and stories behind our living heritage.
          </p>
        </div>

        {/* Featured Story Hero Card */}
        {stories[0] && (
          <div style={{ marginBottom: '50px' }}>
            <StoryCard story={stories[0]} />
          </div>
        )}

        {/* Stories Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}
        >
          {stories.slice(1).map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
