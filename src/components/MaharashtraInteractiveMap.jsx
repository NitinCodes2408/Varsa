import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MAHARASHTRA_DISTRICTS,
  MAHARASHTRA_MAP_VIEWBOX,
  HIGHLIGHTED_DISTRICTS_LIST
} from '../data/maharashtraMapData';
import { MapPin, ArrowRight, X, Sparkles, Compass, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

export default function MaharashtraInteractiveMap({ defaultDistrictId = 'gadchiroli' }) {
  const [selectedDistrictId, setSelectedDistrictId] = useState(defaultDistrictId);
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const mapContainerRef = useRef(null);

  const selectedDistrictData = HIGHLIGHTED_DISTRICTS_LIST.find((d) => d.id === selectedDistrictId);

  const handleDistrictClick = (district) => {
    if (district.isHighlighted) {
      setSelectedDistrictId(district.id);
    } else {
      setHoveredDistrict(district);
    }
  };

  const handleMouseMove = (e) => {
    if (!mapContainerRef.current) return;
    const rect = mapContainerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.25, 2.2));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.25, 0.9));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  return (
    <div className="maharashtra-map-wrapper">
      {/* Quick District Selector Pills */}
      <div className="map-district-pills-bar">
        <div className="pills-label">
          <Sparkles size={14} className="sparkle-icon" />
          <span>Featured Heritage Districts:</span>
        </div>
        <div className="pills-scroll-container">
          {HIGHLIGHTED_DISTRICTS_LIST.map((dist) => {
            const isSelected = selectedDistrictId === dist.id;
            return (
              <button
                key={dist.id}
                onClick={() => setSelectedDistrictId(dist.id)}
                className={`district-pill-btn ${isSelected ? 'active' : ''}`}
                aria-label={`Select ${dist.name} District`}
              >
                <span className="pill-emoji">{dist.landmarkIcon}</span>
                <span className="pill-name">{dist.name}</span>
                <span className="pill-marathi">({dist.marathiName})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Map Interactive Box */}
      <div
        className="map-viewport-card"
        ref={mapContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredDistrict(null)}
      >
        {/* Background Vintage Topographic Grid Texture */}
        <div className="map-bg-texture" />

        {/* Heritage Compass Rose Watermark */}
        <div className="map-watermark-compass">
          <Compass size={84} strokeWidth={1.2} />
          <span className="compass-subtext">MAHARASHTRA</span>
        </div>

        {/* Vintage Map Watermark Header */}
        <div className="map-legend-badge">
          <span className="badge-subtitle">वारसा भौगोलिक नकाशा</span>
          <h3 className="badge-title">MAHARASHTRA HERITAGE</h3>
          <span className="badge-districts-count">5 Active Cultural Clusters</span>
        </div>

        {/* Map Zoom Controls */}
        <div className="map-controls-group">
          <button onClick={handleZoomIn} className="map-ctrl-btn" title="Zoom In" aria-label="Zoom In">
            <ZoomIn size={17} />
          </button>
          <button onClick={handleZoomOut} className="map-ctrl-btn" title="Zoom Out" aria-label="Zoom Out">
            <ZoomOut size={17} />
          </button>
          <button onClick={handleResetZoom} className="map-ctrl-btn" title="Reset View" aria-label="Reset View">
            <RotateCcw size={15} />
          </button>
        </div>

        {/* Real Geographic SVG Map */}
        <div
          className="map-svg-transform-container"
          style={{
            transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
            transformOrigin: '50% 50%',
            transition: 'transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)'
          }}
        >
          <svg
            viewBox={MAHARASHTRA_MAP_VIEWBOX}
            className="maharashtra-svg-canvas"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Highlight Glow Filter */}
              <filter id="terracotta-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#A8441A" floodOpacity="0.5" />
              </filter>
              <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#C28A3D" floodOpacity="0.6" />
              </filter>
              {/* Radial gradient for highlighted active districts */}
              <radialGradient id="grad-gadchiroli" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#C85222" />
                <stop offset="100%" stopColor="#8F320E" />
              </radialGradient>
              <radialGradient id="grad-chandrapur" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#92400E" />
              </radialGradient>
              <radialGradient id="grad-nagpur" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#EA580C" />
                <stop offset="100%" stopColor="#9A3412" />
              </radialGradient>
              <radialGradient id="grad-kolhapur" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#C28A3D" />
                <stop offset="100%" stopColor="#78350F" />
              </radialGradient>
              <radialGradient id="grad-solapur" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#B45309" />
                <stop offset="100%" stopColor="#7C2D12" />
              </radialGradient>
            </defs>

            {/* Render All 36 Real Maharashtra Districts */}
            <g className="districts-layer">
              {MAHARASHTRA_DISTRICTS.map((district) => {
                const isSelected = selectedDistrictId === district.id;
                const isHovered = hoveredDistrict?.id === district.id;
                const isHighlighted = district.isHighlighted;

                // Color mappings
                let fill = '#3A2115'; // Earthy brown for muted districts
                let stroke = 'rgba(194, 138, 61, 0.22)';
                let strokeWidth = '1';
                let opacity = '0.72';
                let cursor = 'default';

                if (isHighlighted) {
                  cursor = 'pointer';
                  opacity = '1';
                  strokeWidth = isSelected ? '2.8' : '1.8';
                  stroke = isSelected ? '#FFFFFF' : '#F7D488';

                  if (district.id === 'gadchiroli') fill = 'url(#grad-gadchiroli)';
                  else if (district.id === 'chandrapur') fill = 'url(#grad-chandrapur)';
                  else if (district.id === 'nagpur') fill = 'url(#grad-nagpur)';
                  else if (district.id === 'kolhapur') fill = 'url(#grad-kolhapur)';
                  else if (district.id === 'solapur') fill = 'url(#grad-solapur)';
                  else fill = '#A8441A';
                } else if (isHovered) {
                  fill = '#4D2F1F';
                  opacity = '0.9';
                }

                return (
                  <path
                    key={district.id}
                    d={district.path}
                    id={`district-${district.id}`}
                    className={`district-path ${isHighlighted ? 'highlighted-district' : 'muted-district'} ${
                      isSelected ? 'selected' : ''
                    }`}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    style={{
                      opacity,
                      cursor,
                      filter: isSelected ? 'url(#terracotta-glow)' : 'none',
                      transition: 'all 0.25s ease'
                    }}
                    onClick={() => handleDistrictClick(district)}
                    onMouseEnter={() => setHoveredDistrict(district)}
                    onMouseLeave={() => setHoveredDistrict(null)}
                  />
                );
              })}
            </g>

            {/* Geographic Landmark Pins & Pulse Markers for the 5 Highlighted Districts */}
            <g className="landmarks-layer">
              {HIGHLIGHTED_DISTRICTS_LIST.map((dist) => {
                const matchingGeom = MAHARASHTRA_DISTRICTS.find((d) => d.id === dist.id);
                if (!matchingGeom || !matchingGeom.centroid) return null;
                const [cx, cy] = matchingGeom.centroid;
                const isSelected = selectedDistrictId === dist.id;

                return (
                  <g
                    key={`marker-${dist.id}`}
                    transform={`translate(${cx}, ${cy})`}
                    className={`district-marker-group ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedDistrictId(dist.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Animated Pulsing Halo */}
                    <circle
                      r={isSelected ? '24' : '18'}
                      className="pulse-halo-circle"
                      fill={dist.color}
                      opacity={isSelected ? '0.35' : '0.2'}
                    />

                    {/* Outer Border Circle */}
                    <circle
                      r={isSelected ? '16' : '13'}
                      fill={isSelected ? '#FFFFFF' : dist.color}
                      stroke={isSelected ? dist.color : '#FFFFFF'}
                      strokeWidth={isSelected ? '3' : '2'}
                      className="marker-core-circle"
                    />

                    {/* Landmark Emoji Icon */}
                    <text
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={isSelected ? '14' : '11'}
                      className="marker-emoji-text"
                    >
                      {dist.landmarkIcon}
                    </text>

                    {/* Geographic Text Label */}
                    <g transform="translate(0, 24)">
                      <rect
                        x="-48"
                        y="-10"
                        width="96"
                        height="20"
                        rx="10"
                        fill="rgba(36, 24, 18, 0.88)"
                        stroke={isSelected ? '#F7D488' : 'rgba(194, 138, 61, 0.4)'}
                        strokeWidth={isSelected ? '1.5' : '0.8'}
                      />
                      <text
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="#FFFFFF"
                        fontSize="9.5"
                        fontWeight="700"
                        letterSpacing="0.4"
                        fontFamily="var(--font-sans)"
                      >
                        {dist.name}
                      </text>
                    </g>
                  </g>
                );
              })}
            </g>
          </svg>
        </div>

        {/* Desktop District Hover Tooltip */}
        {hoveredDistrict && (
          <div
            className="map-hover-tooltip"
            style={{
              left: `${mousePos.x + 14}px`,
              top: `${mousePos.y - 12}px`
            }}
          >
            <div className="tooltip-title">
              <MapPin size={12} />
              <span>{hoveredDistrict.name}</span>
              <span className="tooltip-marathi">({hoveredDistrict.marathiName})</span>
            </div>
            {hoveredDistrict.isHighlighted ? (
              <div className="tooltip-highlight-badge">
                <Sparkles size={11} />
                <span>{hoveredDistrict.landmark}</span>
              </div>
            ) : (
              <div className="tooltip-muted-text">District Heritage in Archive</div>
            )}
          </div>
        )}

        {/* Floating Information Card for Desktop */}
        {selectedDistrictData && (
          <div className="desktop-district-info-card animate-fade-in">
            <div className="card-top-row">
              <div className="card-district-badge">
                <MapPin size={13} />
                <span>{selectedDistrictData.name} District</span>
                <span className="marathi-badge-text">({selectedDistrictData.marathiName})</span>
              </div>

              <button
                onClick={() => setSelectedDistrictId(null)}
                className="card-close-btn"
                aria-label="Close district info card"
              >
                <X size={16} />
              </button>
            </div>

            {/* Landmark & Special Product Title */}
            <div className="card-landmark-section">
              <span className="landmark-icon-large">{selectedDistrictData.landmarkIcon}</span>
              <div>
                <h4 className="landmark-title">{selectedDistrictData.landmark}</h4>
                <span className="landmark-subtitle">Special Regional Heritage</span>
              </div>
            </div>

            {/* Tagline / Authentic Quote */}
            <blockquote className="district-quote">
              “{selectedDistrictData.quote}”
            </blockquote>

            {/* Key Verified Products Badges */}
            <div className="key-products-row">
              {selectedDistrictData.keyProducts?.map((prod, idx) => (
                <span key={idx} className="product-tag-chip">
                  • {prod}
                </span>
              ))}
            </div>

            {/* Explore District Action Button */}
            <Link
              to={selectedDistrictData.route}
              className="btn-primary district-explore-action-btn"
            >
              <span>Explore {selectedDistrictData.name}</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Slide-Up Bottom Sheet Card */}
      {selectedDistrictData && (
        <div className="mobile-bottom-sheet animate-slide-up">
          <div className="sheet-drag-handle" />
          <div className="sheet-header">
            <div className="sheet-title-group">
              <span className="sheet-emoji">{selectedDistrictData.landmarkIcon}</span>
              <div>
                <h3 className="sheet-district-name">
                  {selectedDistrictData.name}
                  <span className="sheet-marathi">({selectedDistrictData.marathiName})</span>
                </h3>
                <span className="sheet-landmark-tag">{selectedDistrictData.landmark}</span>
              </div>
            </div>
            <button
              onClick={() => setSelectedDistrictId(null)}
              className="sheet-close-btn"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          <p className="sheet-description">
            “{selectedDistrictData.quote}”
          </p>

          <div className="sheet-products-tags">
            {selectedDistrictData.keyProducts?.map((prod, idx) => (
              <span key={idx} className="sheet-product-pill">
                {prod}
              </span>
            ))}
          </div>

          <Link
            to={selectedDistrictData.route}
            className="btn-primary sheet-cta-btn"
          >
            <span>Explore District</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      )}

      {/* Scoped CSS styling for Maharashtra Interactive Map */}
      <style>{`
        .maharashtra-map-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* District Selector Pills */
        .map-district-pills-bar {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          padding: 8px 12px;
          background-color: #EDE1CF;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(194, 138, 61, 0.3);
          box-shadow: var(--shadow-subtle);
        }

        .pills-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: var(--color-terracotta);
          white-space: nowrap;
        }

        .sparkle-icon {
          color: var(--color-heritage-gold);
        }

        .pills-scroll-container {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
          flex: 1;
        }
        .pills-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .district-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          border: 1.5px solid rgba(194, 138, 61, 0.35);
          background-color: #FFFFFF;
          color: var(--bg-dark-brown);
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition-smooth);
        }

        .district-pill-btn:hover {
          border-color: var(--color-terracotta);
          background-color: #FDF9F3;
          transform: translateY(-1px);
        }

        .district-pill-btn.active {
          background-color: var(--color-terracotta);
          color: #FFFFFF;
          border-color: var(--color-terracotta);
          box-shadow: 0 4px 12px rgba(168, 68, 26, 0.35);
        }

        .pill-emoji {
          font-size: 1rem;
        }

        .pill-marathi {
          font-size: 0.78rem;
          opacity: 0.85;
        }

        /* Map Viewport Card */
        .map-viewport-card {
          position: relative;
          width: 100%;
          height: 600px;
          background-color: #EDE1CF;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 2px solid var(--color-heritage-gold);
          box-shadow: var(--shadow-card);
        }

        .map-bg-texture {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#C28A3D 1px, transparent 1px), radial-gradient(#C28A3D 1px, #EDE1CF 1px);
          background-size: 32px 32px;
          background-position: 0 0, 16px 16px;
          opacity: 0.22;
          pointer-events: none;
        }

        .map-watermark-compass {
          position: absolute;
          bottom: 24px;
          left: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0.25;
          color: var(--bg-dark-brown);
          pointer-events: none;
        }

        .compass-subtext {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 2px;
          margin-top: -4px;
        }

        /* Map Legend Badge */
        .map-legend-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background-color: rgba(247, 240, 227, 0.94);
          backdrop-filter: blur(10px);
          padding: 12px 18px;
          border-radius: var(--radius-md);
          border: 1.5px solid var(--color-heritage-gold);
          box-shadow: var(--shadow-subtle);
          z-index: 5;
          pointer-events: none;
        }

        .badge-subtitle {
          font-family: var(--font-marathi);
          font-size: 0.76rem;
          font-weight: 700;
          color: var(--color-terracotta);
          display: block;
          margin-bottom: 2px;
        }

        .badge-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--bg-dark-brown);
          margin: 0;
          letter-spacing: 0.5px;
        }

        .badge-districts-count {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-text-muted);
        }

        /* Map Zoom Controls */
        .map-controls-group {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          z-index: 10;
        }

        .map-ctrl-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(247, 240, 227, 0.95);
          border: 1.5px solid var(--color-heritage-gold);
          color: var(--bg-dark-brown);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: var(--shadow-subtle);
          transition: var(--transition-smooth);
        }

        .map-ctrl-btn:hover {
          background-color: var(--color-terracotta);
          color: #FFFFFF;
          border-color: var(--color-terracotta);
          transform: scale(1.08);
        }

        /* SVG Map Container */
        .map-svg-transform-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .maharashtra-svg-canvas {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 12px 24px rgba(36, 24, 18, 0.18));
        }

        /* Pulsing Marker Animation */
        @keyframes pulseMarker {
          0% { transform: scale(0.9); opacity: 0.4; }
          50% { transform: scale(1.4); opacity: 0.1; }
          100% { transform: scale(0.9); opacity: 0.4; }
        }

        .pulse-halo-circle {
          animation: pulseMarker 2.4s infinite ease-in-out;
          transform-origin: 0 0;
        }

        .district-marker-group:hover .marker-core-circle {
          transform: scale(1.2);
          transition: transform 0.2s ease;
        }

        /* Hover Tooltip */
        .map-hover-tooltip {
          position: absolute;
          background-color: rgba(36, 24, 18, 0.95);
          color: #FFFFFF;
          padding: 8px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.84rem;
          pointer-events: none;
          z-index: 25;
          backdrop-filter: blur(6px);
          border: 1px solid var(--color-heritage-gold);
          box-shadow: var(--shadow-card);
          white-space: nowrap;
          transform: translateY(-50%);
        }

        .tooltip-title {
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 700;
        }

        .tooltip-marathi {
          color: var(--color-heritage-gold);
          font-size: 0.78rem;
        }

        .tooltip-highlight-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #F7D488;
          font-size: 0.75rem;
          font-weight: 600;
          margin-top: 3px;
        }

        .tooltip-muted-text {
          color: rgba(247, 240, 227, 0.65);
          font-size: 0.72rem;
          margin-top: 2px;
        }

        /* Desktop Floating Info Card */
        .desktop-district-info-card {
          position: absolute;
          bottom: 24px;
          right: 24px;
          width: 360px;
          max-width: calc(100% - 48px);
          background-color: rgba(247, 240, 227, 0.96);
          backdrop-filter: blur(12px);
          border-radius: var(--radius-lg);
          border: 2px solid var(--color-heritage-gold);
          padding: 22px;
          box-shadow: 0 16px 36px rgba(36, 24, 18, 0.22);
          z-index: 20;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-district-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: var(--color-terracotta);
          color: #FFFFFF;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.76rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .marathi-badge-text {
          color: #F7D488;
          font-size: 0.74rem;
        }

        .card-close-btn {
          background: none;
          border: none;
          color: var(--color-text-muted);
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }
        .card-close-btn:hover {
          background-color: rgba(168, 68, 26, 0.12);
          color: var(--color-terracotta);
        }

        .card-landmark-section {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 6px;
          border-bottom: 1px solid rgba(194, 138, 61, 0.25);
        }

        .landmark-icon-large {
          font-size: 2rem;
          line-height: 1;
        }

        .landmark-title {
          font-family: var(--font-serif);
          font-size: 1.42rem;
          font-weight: 700;
          color: var(--bg-dark-brown);
          line-height: 1.15;
          margin: 0;
        }

        .landmark-subtitle {
          font-size: 0.78rem;
          color: var(--color-terracotta);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .district-quote {
          font-size: 0.92rem;
          font-style: italic;
          color: var(--color-text-muted);
          line-height: 1.45;
          margin: 0;
        }

        .key-products-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .product-tag-chip {
          background-color: #EDE1CF;
          color: var(--bg-dark-brown);
          border: 1px solid rgba(194, 138, 61, 0.35);
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          font-size: 0.76rem;
          font-weight: 600;
        }

        .district-explore-action-btn {
          width: 100%;
          justify-content: center;
          padding: 11px 20px;
          font-size: 0.96rem;
          font-weight: 700;
          margin-top: 4px;
        }

        /* Mobile Bottom Sheet */
        .mobile-bottom-sheet {
          display: none;
          position: fixed;
          bottom: 64px;
          left: 12px;
          right: 12px;
          background-color: #F7F0E3;
          border: 2px solid var(--color-heritage-gold);
          border-radius: var(--radius-xl);
          padding: 18px 20px;
          box-shadow: 0 -8px 30px rgba(36, 24, 18, 0.25);
          z-index: 999;
          flex-direction: column;
          gap: 10px;
        }

        .sheet-drag-handle {
          width: 36px;
          height: 4px;
          background-color: var(--color-heritage-gold);
          border-radius: 2px;
          margin: -6px auto 4px auto;
          opacity: 0.6;
        }

        .sheet-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sheet-title-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .sheet-emoji {
          font-size: 1.8rem;
        }

        .sheet-district-name {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--bg-dark-brown);
          margin: 0;
          line-height: 1.15;
        }

        .sheet-marathi {
          font-size: 0.95rem;
          color: var(--color-terracotta);
          margin-left: 6px;
        }

        .sheet-landmark-tag {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-terracotta);
          display: block;
        }

        .sheet-close-btn {
          background: none;
          border: none;
          color: var(--color-text-muted);
          padding: 6px;
        }

        .sheet-description {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          margin: 0;
          line-height: 1.4;
          font-style: italic;
        }

        .sheet-products-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .sheet-product-pill {
          background-color: #EDE1CF;
          color: var(--bg-dark-brown);
          border: 1px solid rgba(194, 138, 61, 0.3);
          font-size: 0.74rem;
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          font-weight: 600;
        }

        .sheet-cta-btn {
          width: 100%;
          justify-content: center;
          padding: 12px 20px;
          font-size: 0.96rem;
          margin-top: 4px;
        }

        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-slide-up {
          animation: slideUp 0.35s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
        }

        /* Responsive Media Queries */
        @media (max-width: 900px) {
          .map-viewport-card {
            height: 520px;
          }
          .desktop-district-info-card {
            display: none;
          }
          .mobile-bottom-sheet {
            display: flex;
          }
          .map-hover-tooltip {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .map-viewport-card {
            height: 440px;
          }
          .map-legend-badge {
            padding: 8px 12px;
          }
          .badge-title {
            font-size: 0.95rem;
          }
          .badge-subtitle {
            font-size: 0.68rem;
          }
        }
      `}</style>
    </div>
  );
}
