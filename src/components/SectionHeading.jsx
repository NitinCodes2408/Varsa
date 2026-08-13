import React from 'react';

export default function SectionHeading({ title, subtitle, marathi, actionText, actionLink, center = false }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: center ? 'column' : 'row',
        alignItems: center ? 'center' : 'flex-end',
        justifyContent: center ? 'center' : 'space-between',
        textAlign: center ? 'center' : 'left',
        marginBottom: '32px',
        gap: '16px',
        width: '100%'
      }}
    >
      <div>
        {marathi && (
          <span
            className="marathi-text"
            style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: 'var(--color-terracotta)',
              letterSpacing: '0.5px',
              display: 'block',
              marginBottom: '4px'
            }}
          >
            {marathi}
          </span>
        )}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.2rem',
            fontWeight: '600',
            color: 'var(--bg-dark-brown)',
            lineHeight: 1.15
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              marginTop: '6px',
              fontSize: '1rem',
              color: 'var(--color-text-muted)',
              maxWidth: center ? '640px' : '580px'
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {actionText && actionLink && (
        <a
          href={actionLink}
          style={{
            color: 'var(--color-terracotta)',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '1rem',
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          {actionText}
        </a>
      )}
    </div>
  );
}
