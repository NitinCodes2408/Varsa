import React from 'react';
import { Link } from 'react-router-dom';

export default function MandalaLogo({ variant = "default", showTagline = true }) {
  const isDarkBg = variant === "dark" || variant === "footer";

  return (
    <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      {/* Indian Ornamental Gold Mandala Icon */}
      <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" stroke="#C28A3D" strokeWidth="2.5" strokeDasharray="4 2" />
        <circle cx="50" cy="50" r="38" stroke="#C28A3D" strokeWidth="1.5" />
        {/* Flower Petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <g key={index} transform={`rotate(${angle} 50 50)`}>
            <path
              d="M50 20 C42 32 42 42 50 50 C58 42 58 32 50 20 Z"
              fill={index % 2 === 0 ? "#C28A3D" : "#A8441A"}
              opacity="0.85"
            />
            <circle cx="50" cy="22" r="3" fill="#E5C384" />
          </g>
        ))}
        {/* Inner Circle & Sunburst */}
        <circle cx="50" cy="50" r="14" fill="#3A2115" stroke="#C28A3D" strokeWidth="2" />
        <circle cx="50" cy="50" r="6" fill="#C28A3D" />
      </svg>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          className="marathi-text"
          style={{
            fontFamily: "var(--font-marathi)",
            fontSize: "1.75rem",
            fontWeight: "700",
            color: isDarkBg ? "#F7F0E3" : "var(--bg-dark-brown)",
            lineHeight: 1,
            letterSpacing: "0.5px"
          }}
        >
          वारसा
        </span>
        {showTagline && (
          <span
            className="marathi-text"
            style={{
              fontSize: "0.75rem",
              fontWeight: "500",
              color: isDarkBg ? "var(--color-heritage-gold)" : "var(--color-text-muted)",
              marginTop: "2px",
              letterSpacing: "0.2px"
            }}
          >
            आपल्या मातीचा, आपल्या लोकांचा.
          </span>
        )}
      </div>
    </Link>
  );
}
