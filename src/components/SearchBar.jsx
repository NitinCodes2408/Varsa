import React from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ value, onChange, onClear, placeholder = "Search crafts, stories, artisans..." }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '680px',
        margin: '0 auto'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          border: '2px solid var(--color-heritage-gold)',
          borderRadius: 'var(--radius-full)',
          padding: '6px 20px',
          boxShadow: '0 8px 30px rgba(58, 33, 21, 0.08)'
        }}
      >
        <Search size={22} color="var(--color-terracotta)" style={{ marginRight: '12px', flexShrink: 0 }} />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          style={{
            width: '100%',
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            fontFamily: 'var(--font-sans)',
            fontSize: '1.05rem',
            color: 'var(--bg-dark-brown)',
            padding: '10px 0'
          }}
        />
        {value && (
          <button
            onClick={onClear}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-muted)',
              display: 'flex',
              alignItems: 'center',
              padding: '4px'
            }}
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
