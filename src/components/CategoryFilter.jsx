import React from 'react';

export default function CategoryFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        overflowX: 'auto',
        padding: '4px 0 12px 0',
        scrollbarWidth: 'none'
      }}
    >
      {categories.map((cat) => {
        const active = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            style={{
              padding: '10px 22px',
              borderRadius: 'var(--radius-full)',
              border: active ? 'none' : '1.5px solid rgba(58, 33, 21, 0.2)',
              backgroundColor: active ? 'var(--color-terracotta)' : '#F7F0E3',
              color: active ? '#FFFFFF' : 'var(--bg-dark-brown)',
              fontWeight: active ? '700' : '600',
              fontSize: '0.92rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'var(--transition-smooth)',
              boxShadow: active ? '0 4px 12px rgba(168, 68, 26, 0.3)' : 'none'
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
