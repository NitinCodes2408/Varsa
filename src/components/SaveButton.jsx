import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function SaveButton({ heritageId, size = "md", variant = "light" }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('varsa_saved_items') || '[]');
      setIsSaved(saved.includes(heritageId));
    } catch (e) {
      console.error(e);
    }
  }, [heritageId]);

  const toggleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const saved = JSON.parse(localStorage.getItem('varsa_saved_items') || '[]');
      let updated;
      if (saved.includes(heritageId)) {
        updated = saved.filter(id => id !== heritageId);
        setIsSaved(false);
      } else {
        updated = [...saved, heritageId];
        setIsSaved(true);
      }
      localStorage.setItem('varsa_saved_items', JSON.stringify(updated));
      window.dispatchEvent(new Event('varsa_saved_updated'));
    } catch (e) {
      console.error(e);
    }
  };

  const isDarkBtn = variant === "dark";
  const iconSize = size === "lg" ? 22 : 18;

  return (
    <button
      onClick={toggleSave}
      aria-label={isSaved ? "Remove from saved" : "Save heritage"}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        padding: size === "lg" ? "10px 20px" : "8px",
        borderRadius: "var(--radius-full)",
        border: isDarkBtn ? "1px solid rgba(247, 240, 227, 0.3)" : "1px solid rgba(58, 33, 21, 0.15)",
        backgroundColor: isSaved 
          ? "#A8441A" 
          : (isDarkBtn ? "rgba(36, 24, 18, 0.6)" : "rgba(255, 255, 255, 0.85)"),
        color: isSaved ? "#FFFFFF" : (isDarkBtn ? "#F7F0E3" : "var(--bg-dark-brown)"),
        cursor: 'pointer',
        backdropFilter: 'blur(4px)',
        transition: 'var(--transition-smooth)',
        fontWeight: '600',
        fontSize: '0.9rem'
      }}
    >
      <Heart
        size={iconSize}
        fill={isSaved ? "#FFFFFF" : "none"}
        stroke={isSaved ? "#FFFFFF" : (isDarkBtn ? "#F7F0E3" : "var(--bg-dark-brown)")}
      />
      {size === "lg" && <span>{isSaved ? "Saved in Collection" : "Save Heritage"}</span>}
    </button>
  );
}
