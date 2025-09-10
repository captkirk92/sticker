import React from 'react';
import { StickerType, Theme } from '../types/sticker-types';

export interface StickerProductCardProps {
  /** Sticker data to display */
  sticker: StickerType;
  /** Click handler */
  onClick: () => void;
  /** Theme configuration */
  theme?: Theme;
}

/**
 * A card component that displays information about a sticker type
 */
const StickerProductCard: React.FC<StickerProductCardProps> = ({
  sticker,
  onClick,
  theme = {},
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: theme.cardBackgroundColor || '#ffffff',
    border: `1px solid ${theme.cardBorderColor || '#e5e5e5'}`,
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0px 4px 4px 0px rgba(4,4,4,0.08)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    minHeight: '163px',
  };

  const handleClick = () => {
    onClick();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      style={cardStyle}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Select ${sticker.name} sticker type`}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0px 8px 16px 0px rgba(4,4,4,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow = '0px 4px 4px 0px rgba(4,4,4,0.08)';
      }}
    >
      {/* Badge */}
      {sticker.badge && (
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: sticker.badge.color,
            color: sticker.badge.color === '#151515' ? '#ffffff' : '#2d2d2d',
            fontSize: '16px',
            fontWeight: 'bold',
            padding: '4px 12px',
            borderRadius: '4px',
            textAlign: 'center' as const,
            zIndex: 1,
          }}
        >
          {sticker.badge.text}
        </div>
      )}

      {/* Image */}
      <div
        style={{
          width: '112px',
          height: '112px',
          flexShrink: 0,
          backgroundImage: `url(${sticker.image})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: theme.primaryTextColor || '#151515',
            margin: '0 0 8px 0',
            lineHeight: '1.4',
          }}
        >
          {sticker.name}
        </h3>
        <p
          style={{
            fontSize: '16px',
            color: theme.secondaryTextColor || '#2d2d2d',
            margin: '0',
            lineHeight: '1.5',
          }}
        >
          {sticker.description}
        </p>
      </div>
    </div>
  );
};

export default StickerProductCard;