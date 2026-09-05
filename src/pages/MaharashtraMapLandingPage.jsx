import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MAHARASHTRA_DISTRICTS,
  MAHARASHTRA_MAP_VIEWBOX,
  HIGHLIGHTED_DISTRICTS_LIST,
  HIGHLIGHTED_DISTRICT_IDS
} from '../data/maharashtraMapData';

// Specific visual label offsets and subtle leader line connections for clear non-overlapping positioning
const DISTRICT_LABEL_OFFSETS = {
  gadchiroli: { x: 20, y: 22, hasLeader: true },
  chandrapur: { x: -22, y: 22, hasLeader: true },
  nagpur: { x: -10, y: -26, hasLeader: true },
  wardha: { x: -26, y: 20, hasLeader: true },
  bhandara: { x: 0, y: 28, hasLeader: true },
  gondia: { x: 20, y: -26, hasLeader: true },
  kolhapur: { x: 28, y: 20, hasLeader: true },
  solapur: { x: 18, y: 24, hasLeader: true },
  nashik: { x: 12, y: -24, hasLeader: true },
  sindhudurg: { x: -32, y: 18, hasLeader: true },
  sangli: { x: 38, y: -2, hasLeader: true },
  satara: { x: -34, y: -16, hasLeader: true },
  palghar: { x: -44, y: 0, hasLeader: true },
  "chhatrapati-sambhajinagar": { x: 0, y: -26, hasLeader: true },
  aurangabad: { x: 0, y: -26, hasLeader: true },
  pune: { x: 36, y: 12, hasLeader: true },
  raigad: { x: -46, y: 16, hasLeader: true },
  dharashiv: { x: 0, y: -26, hasLeader: true },
  osmanabad: { x: 0, y: -26, hasLeader: true }
};

export default function MaharashtraMapLandingPage() {
  const navigate = useNavigate();
  const [hoveredDistrictId, setHoveredDistrictId] = useState(null);

  const handleDistrictClick = (districtId) => {
    navigate(`/district/${districtId}`);
  };

  return (
    <div className="opening-screen-container">
      {/* TOP BRANDING: Exact requested hierarchy
          [ वारसा LOGO / HERITAGE SYMBOL ]
          वारसा
          “आपल्या मातीचा, आपल्या लोकांचा.”
      */}
      <header className="top-branding-header">
        {/* Prominent Heritage Symbol / Logo Mark */}
        <div className="heritage-symbol-wrapper" aria-hidden="true">
          <svg
            className="heritage-logo-svg"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="46" stroke="#C28A3D" strokeWidth="2.5" strokeDasharray="4 2" />
            <circle cx="50" cy="50" r="38" stroke="#C28A3D" strokeWidth="1.5" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
              <g key={index} transform={`rotate(${angle} 50 50)`}>
                <path
                  d="M50 20 C42 32 42 42 50 50 C58 42 58 32 50 20 Z"
                  fill={index % 2 === 0 ? "#C28A3D" : "#A8441A"}
                  opacity="0.92"
                />
                <circle cx="50" cy="22" r="2.5" fill="#E5C384" />
              </g>
            ))}
            <circle cx="50" cy="50" r="14" fill="#3A2115" stroke="#C28A3D" strokeWidth="2" />
            <circle cx="50" cy="50" r="6" fill="#C28A3D" />
          </svg>
        </div>

        {/* Prominent Project Name */}
        <h1 className="project-title-text">वारसा</h1>

        {/* Prominent Tagline */}
        <p className="project-tagline-text">“आपल्या मातीचा, आपल्या लोकांचा.”</p>
      </header>

      {/* MAP: Complete Maharashtra State Map in single view with all 17 highlighted districts */}
      <main className="map-display-area" aria-label="Maharashtra State Map">
        <svg
          viewBox={MAHARASHTRA_MAP_VIEWBOX}
          className="maharashtra-state-svg"
          preserveAspectRatio="xMidYMid meet"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
        >
          <defs>
            {/* Subtle glow filter for active highlighted districts */}
            <filter id="highlight-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#A8441A" floodOpacity="0.45" />
            </filter>

            {/* Subtle drop shadow for labels */}
            <filter id="label-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Render all 36 Maharashtra Districts */}
          <g className="all-districts-group">
            {MAHARASHTRA_DISTRICTS.map((district) => {
              const isHighlighted = HIGHLIGHTED_DISTRICT_IDS.includes(district.id);
              const isHovered = hoveredDistrictId === district.id;

              // Color styling
              let fill = '#3A2115'; // Earthy brown for muted districts
              let stroke = 'rgba(194, 138, 61, 0.25)';
              let strokeWidth = '1';
              let opacity = '0.78';
              let cursor = 'default';

              if (isHighlighted) {
                cursor = 'pointer';
                opacity = isHovered ? '1' : '0.94';
                fill = isHovered ? '#C85222' : '#A8441A'; // Terracotta
                stroke = isHovered ? '#FFFFFF' : '#F7D488';
                strokeWidth = isHovered ? '2.5' : '1.8';
              }

              return (
                <path
                  key={district.id}
                  d={district.path}
                  id={`state-district-${district.id}`}
                  className={`district-boundary ${isHighlighted ? 'district-interactive' : 'district-muted'}`}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  style={{
                    opacity,
                    cursor,
                    filter: isHighlighted && isHovered ? 'url(#highlight-glow)' : 'none',
                    transition: 'fill 0.25s ease, stroke 0.25s ease, opacity 0.25s ease'
                  }}
                  onClick={() => isHighlighted && handleDistrictClick(district.id)}
                  onMouseEnter={() => isHighlighted && setHoveredDistrictId(district.id)}
                  onMouseLeave={() => isHighlighted && setHoveredDistrictId(null)}
                  role={isHighlighted ? 'button' : undefined}
                  tabIndex={isHighlighted ? 0 : undefined}
                  aria-label={isHighlighted ? `${district.name} District - Explore` : undefined}
                  onKeyDown={(e) => {
                    if (isHighlighted && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      handleDistrictClick(district.id);
                    }
                  }}
                />
              );
            })}
          </g>

          {/* Readable Labels, Leader Lines & Touch Targets on the 17 Highlighted Districts */}
          <g className="highlighted-labels-group">
            {HIGHLIGHTED_DISTRICTS_LIST.map((dist) => {
              const geom = MAHARASHTRA_DISTRICTS.find((d) => d.id === dist.id || (dist.id === 'chhatrapati-sambhajinagar' && d.id === 'aurangabad') || (dist.id === 'dharashiv' && d.id === 'osmanabad'));
              if (!geom || !geom.centroid) return null;
              const [cx, cy] = geom.centroid;
              const isHovered = hoveredDistrictId === dist.id || (dist.id === 'chhatrapati-sambhajinagar' && hoveredDistrictId === 'aurangabad') || (dist.id === 'dharashiv' && hoveredDistrictId === 'osmanabad');
              const labelOffset = DISTRICT_LABEL_OFFSETS[dist.id] || { x: 0, y: 18 };

              return (
                <g
                  key={`label-${dist.id}`}
                  transform={`translate(${cx}, ${cy})`}
                  className="district-label-anchor"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDistrictClick(dist.id)}
                  onMouseEnter={() => setHoveredDistrictId(dist.id)}
                  onMouseLeave={() => setHoveredDistrictId(null)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open ${dist.name} District`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleDistrictClick(dist.id);
                    }
                  }}
                >
                  {/* Expanded invisible touch hit-box for easy tapping on mobile */}
                  <circle r="46" fill="transparent" style={{ pointerEvents: 'all' }} />

                  {/* Leader line if label is offset from district center */}
                  {labelOffset.hasLeader && (
                    <line
                      x1="0"
                      y1="0"
                      x2={labelOffset.x}
                      y2={labelOffset.y}
                      stroke={isHovered ? '#FFFFFF' : 'rgba(247, 212, 136, 0.75)'}
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                      style={{ transition: 'stroke 0.2s ease' }}
                    />
                  )}

                  {/* Pin Dot */}
                  <circle
                    r={isHovered ? '5.5' : '4.5'}
                    fill="#FFFFFF"
                    stroke="#A8441A"
                    strokeWidth="2.2"
                    style={{ transition: 'r 0.2s ease' }}
                  />

                  {/* Label Card Pill with District Name & Landmark Identity */}
                  <g transform={`translate(${labelOffset.x}, ${labelOffset.y})`} filter="url(#label-shadow)">
                    <rect
                      x="-56"
                      y="-15"
                      width="112"
                      height="30"
                      rx="7"
                      fill={isHovered ? '#A8441A' : 'rgba(36, 24, 18, 0.94)'}
                      stroke={isHovered ? '#FFFFFF' : '#C28A3D'}
                      strokeWidth={isHovered ? '1.8' : '1.1'}
                      style={{ transition: 'all 0.2s ease' }}
                    />
                    {/* District Name */}
                    <text
                      textAnchor="middle"
                      y="-3"
                      fill="#FFFFFF"
                      fontSize="9.2"
                      fontWeight="700"
                      letterSpacing="0.3"
                      fontFamily="var(--font-sans)"
                    >
                      {dist.name}
                    </text>
                    {/* Landmark / Heritage Specialty */}
                    <text
                      textAnchor="middle"
                      y="8"
                      fill={isHovered ? '#FFE8D6' : 'var(--color-heritage-gold)'}
                      fontSize="6.8"
                      fontWeight="600"
                      letterSpacing="0.2"
                      fontFamily="var(--font-sans)"
                    >
                      {dist.landmark}
                    </text>
                  </g>
                </g>
              );
            })}
          </g>
        </svg>
      </main>

      {/* Scoped CSS styling for minimal full-screen layout */}
      <style>{`
        .opening-screen-container {
          min-height: 100vh;
          width: 100%;
          background-color: var(--bg-cream);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 20px 20px 14px 20px;
          box-sizing: border-box;
          overflow: hidden;
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        /* TOP BRANDING AREA */
        .top-branding-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-bottom: 6px;
          flex-shrink: 0;
        }

        .heritage-symbol-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2px;
        }

        .heritage-logo-svg {
          width: clamp(56px, 6.2vw, 76px);
          height: clamp(56px, 6.2vw, 76px);
          filter: drop-shadow(0 4px 12px rgba(194, 138, 61, 0.25));
          transition: transform 0.3s ease;
        }

        .heritage-symbol-wrapper:hover .heritage-logo-svg {
          transform: rotate(15deg) scale(1.04);
        }

        .project-title-text {
          font-family: var(--font-marathi);
          font-size: clamp(3.2rem, 6.2vw, 4.6rem);
          font-weight: 700;
          color: var(--bg-dark-brown);
          line-height: 1.05;
          margin: 4px 0 2px 0;
          letter-spacing: 1px;
          text-shadow: 0 2px 6px rgba(58, 33, 21, 0.08);
        }

        .project-tagline-text {
          font-family: var(--font-marathi);
          font-size: clamp(1.15rem, 2.2vw, 1.55rem);
          font-weight: 600;
          color: var(--color-terracotta);
          margin: 0;
          letter-spacing: 0.4px;
        }

        /* MAP AREA */
        .map-display-area {
          flex: 1;
          width: 100%;
          max-width: 1080px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 0;
          padding: 4px 0;
        }

        .maharashtra-state-svg {
          width: 100%;
          height: 100%;
          max-height: calc(100vh - 200px);
          display: block;
          filter: drop-shadow(0 14px 28px rgba(36, 24, 18, 0.12));
          touch-action: manipulation;
        }

        .district-interactive {
          cursor: pointer;
          touch-action: manipulation;
        }

        .district-interactive:hover {
          fill: #C85222 !important;
        }

        .district-label-anchor {
          touch-action: manipulation;
        }

        .district-label-anchor:hover rect {
          fill: #A8441A !important;
          stroke: #FFFFFF !important;
        }

        /* MOBILE RESPONSIVE OPTIMIZATIONS */
        @media (max-width: 768px) {
          .opening-screen-container {
            padding: 12px 10px 8px 10px;
            min-height: 100vh;
            min-height: 100dvh;
            min-height: 100svh;
            justify-content: flex-start;
            gap: 6px;
          }

          .top-branding-header {
            margin-bottom: 2px;
          }

          .heritage-logo-svg {
            width: 48px;
            height: 48px;
          }

          .project-title-text {
            font-size: clamp(2.3rem, 9.2vw, 3rem);
            margin: 2px 0 1px 0;
          }

          .project-tagline-text {
            font-size: clamp(0.92rem, 3.8vw, 1.12rem);
          }

          .map-display-area {
            flex: 1;
            width: 100%;
            max-height: calc(100dvh - 135px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
          }

          .maharashtra-state-svg {
            width: 100%;
            height: auto;
            max-height: calc(100dvh - 135px);
          }
        }

        @media (max-width: 360px) {
          .opening-screen-container {
            padding: 10px 8px 6px 8px;
          }

          .heritage-logo-svg {
            width: 42px;
            height: 42px;
          }

          .project-title-text {
            font-size: 2.1rem;
          }

          .project-tagline-text {
            font-size: 0.85rem;
          }

          .map-display-area {
            max-height: calc(100dvh - 120px);
          }
        }
      `}</style>
    </div>
  );
}
