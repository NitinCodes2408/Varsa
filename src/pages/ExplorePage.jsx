import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import HeritageCard from '../components/HeritageCard';
import { heritageItems } from '../data/varsaData';

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Crafts', 'Art', 'Food', 'Culture', 'Forest', 'Stories'];

  const filteredItems = heritageItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingBottom: '60px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <nav style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
          <Link to="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>
            Home
          </Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--color-terracotta)', fontWeight: '600' }}>Explore</span>
        </nav>

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 36px auto' }}>
          <span
            className="marathi-text"
            style={{ fontSize: '1.1rem', color: 'var(--color-terracotta)', fontWeight: '600', display: 'block', marginBottom: '6px' }}
          >
            शोध आणि जतन
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
              fontWeight: '600',
              color: 'var(--bg-dark-brown)',
              marginBottom: '12px'
            }}
          >
            Explore Heritage
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Discover the crafts, people, traditions and stories that keep our culture alive.
          </p>
        </div>

        {/* Large Search Bar */}
        <div style={{ marginBottom: '32px' }}>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
            placeholder="Search crafts, stories, artisans..."
          />
        </div>

        {/* Pill Category Filters */}
        <div style={{ marginBottom: '40px' }}>
          <CategoryFilter
            categories={categories}
            activeCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Heritage Discovery Grid */}
        {filteredItems.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '28px'
            }}
          >
            {filteredItems.map((item) => (
              <HeritageCard key={item.id} item={item} variant="grid" />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#EDE1CF',
              borderRadius: 'var(--radius-lg)',
              border: '1.5px dashed var(--color-heritage-gold)'
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--bg-dark-brown)', marginBottom: '8px' }}>
              No heritage items match your search
            </h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>
              Try searching for something else like "Bamboo", "Dhokra", "Dance" or select a different category.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="btn-primary"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
