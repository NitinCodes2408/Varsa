import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeritageCard from '../components/HeritageCard';
import { heritageItems } from '../data/varsaData';
import { Heart, ArrowRight, Bookmark } from 'lucide-react';

export default function SavedHeritagePage() {
  const [savedItems, setSavedItems] = useState([]);

  const loadSavedItems = () => {
    try {
      const savedIds = JSON.parse(localStorage.getItem('varsa_saved_items') || '[]');
      const items = heritageItems.filter((h) => savedIds.includes(h.id));
      setSavedItems(items);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadSavedItems();

    window.addEventListener('varsa_saved_updated', loadSavedItems);
    return () => window.removeEventListener('varsa_saved_updated', loadSavedItems);
  }, []);

  return (
    <div style={{ paddingBottom: '80px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '20px auto 48px auto' }}>
          <span
            className="marathi-text"
            style={{ fontSize: '1.1rem', color: 'var(--color-terracotta)', fontWeight: '600', display: 'block', marginBottom: '6px' }}
          >
            तुमचा संग्रह
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              fontWeight: '600',
              color: 'var(--bg-dark-brown)',
              marginBottom: '12px'
            }}
          >
            Your Heritage Collection
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)' }}>
            Keep the stories that matter to you close.
          </p>
        </div>

        {/* Display Saved Items */}
        {savedItems.length > 0 ? (
          <div>
            <p style={{ color: 'var(--color-text-muted)', fontWeight: '600', marginBottom: '24px' }}>
              {savedItems.length} Saved Heritage {savedItems.length === 1 ? 'Item' : 'Items'}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '28px'
              }}
            >
              {savedItems.map((item) => (
                <HeritageCard key={item.id} item={item} variant="grid" />
              ))}
            </div>
          </div>
        ) : (
          /* Empty State */
          <div
            style={{
              textAlign: 'center',
              padding: '80px 24px',
              backgroundColor: '#EDE1CF',
              borderRadius: 'var(--radius-xl)',
              border: '2px dashed var(--color-heritage-gold)',
              maxWidth: '680px',
              margin: '0 auto'
            }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: 'rgba(168, 68, 26, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                color: 'var(--color-terracotta)'
              }}
            >
              <Heart size={36} />
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                color: 'var(--bg-dark-brown)',
                marginBottom: '10px'
              }}
            >
              Your collection is waiting.
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-muted)',
                marginBottom: '28px',
                lineHeight: 1.5
              }}
            >
              Click the heart icon on any craft, story, or traditional art form to save it to your personal Varsa collection.
            </p>

            <Link to="/explore" className="btn-primary" style={{ padding: '12px 32px', fontSize: '1.05rem' }}>
              Start Exploring <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
