import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import HeritageCard from '../components/HeritageCard';
import { heritageItems } from '../data/varsaData';

export default function SearchDiscoverPage() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const popularSearches = [
    'Bamboo Craft',
    'Dhokra',
    'Rela Dance',
    'Tribal Art',
    'Traditional Food',
    'Forest Products'
  ];

  const filteredItems = heritageItems.filter((item) => {
    const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
    const matchesQuery =
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <div style={{ paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', margin: '20px 0 36px 0' }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              fontWeight: '600',
              color: 'var(--bg-dark-brown)',
              marginBottom: '16px'
            }}
          >
            What are you curious about?
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)' }}>
            Search crafts, people, places or stories across the Varsa cultural discovery platform.
          </p>
        </div>

        {/* Large Search Input */}
        <div style={{ marginBottom: '28px' }}>
          <SearchBar
            value={query}
            onChange={setQuery}
            onClear={() => setQuery('')}
            placeholder="Search crafts, people, places or stories..."
          />
        </div>

        {/* Popular Searches Pills */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: '600', display: 'block', marginBottom: '12px' }}>
            POPULAR SEARCHES:
          </span>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {popularSearches.map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                style={{
                  padding: '6px 16px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(194, 138, 61, 0.4)',
                  backgroundColor: query === term ? 'var(--color-terracotta)' : '#F7F0E3',
                  color: query === term ? '#FFFFFF' : 'var(--bg-dark-brown)',
                  fontSize: '0.88rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '36px' }}>
          {['All', 'Crafts', 'Art', 'Food', 'Culture', 'Forest'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                border: activeFilter === cat ? 'none' : '1px solid rgba(58, 33, 21, 0.2)',
                backgroundColor: activeFilter === cat ? 'var(--bg-dark-brown)' : 'transparent',
                color: activeFilter === cat ? '#F7F0E3' : 'var(--bg-dark-brown)',
                fontWeight: '600',
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--bg-dark-brown)', marginBottom: '20px' }}>
            Search Results ({filteredItems.length})
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '24px'
            }}
          >
            {filteredItems.map((item) => (
              <HeritageCard key={item.id} item={item} variant="grid" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
