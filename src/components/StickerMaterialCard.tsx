import React from 'react';
import { StickerMaterial, Theme } from '../types/sticker-types';

export interface StickerMaterialCardProps {
  /** Material data to display */
  material: StickerMaterial;
  /** Click handler */
  onClick: () => void;
  /** Theme configuration */
  theme?: Theme;
}

/**
 * A card component that displays material information with pricing
 */
const StickerMaterialCard: React.FC<StickerMaterialCardProps> = ({
  material,
  onClick,
  theme = {},
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: theme.cardBackgroundColor || '#ffffff',
    border: `1px solid ${theme.cardBorderColor || '#e5e5e5'}`,
    borderRadius: '16px',
    padding: '0',
    boxShadow: '0px 4px 4px 0px rgba(4,4,4,0.08)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    position: 'relative' as const,
    minHeight: '624px',
    width: '100%',
    maxWidth: '384px',
    margin: '0 auto',
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
      aria-label={`Select ${material.name} material`}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0px 8px 16px 0px rgba(4,4,4,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow = '0px 4px 4px 0px rgba(4,4,4,0.08)';
      }}
    >
      {/* Header with image and title */}
      <div style={{ padding: '20px 20px 0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
          <div
            style={{
              width: '83px',
              height: '83px',
              flexShrink: 0,
              backgroundImage: `url(${material.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
            }}
            aria-hidden="true"
          />
          <div>
            <h3
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: theme.primaryTextColor || '#151515',
                margin: '0 0 4px 0',
                lineHeight: '1.3',
              }}
            >
              {material.name}
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: theme.secondaryTextColor || '#2d2d2d',
                margin: '0',
                lineHeight: '1.4',
              }}
            >
              Price based on 2" x 2" size
            </p>
          </div>
        </div>

        {/* Pricing Table */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: `1px solid ${theme.cardBorderColor || '#e5e5e5'}`,
            borderRadius: '8px',
            overflow: 'hidden' as const,
            marginBottom: '20px',
          }}
        >
          {material.pricing.map((tier, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px 16px',
                backgroundColor: tier.featured ? '#eeeeee' : '#ffffff',
                borderBottom: index < material.pricing.length - 1 ? `1px solid ${theme.cardBorderColor || '#e5e5e5'}` : 'none',
                fontWeight: tier.featured ? 'bold' : 'normal',
              }}
            >
              <span style={{ color: theme.primaryTextColor || '#2d2d2d' }}>
                ${tier.price}
              </span>
              <span style={{ color: theme.secondaryTextColor || '#2d2d2d' }}>
                {tier.quantity} pcs
                {tier.discount && (
                  <span
                    style={{
                      color: '#438448',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      marginLeft: '8px',
                    }}
                  >
                    - {tier.discount}%
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Features */}
        <div style={{ marginBottom: '20px' }}>
          {material.features.map((feature, index) => (
            <p
              key={index}
              style={{
                fontSize: '16px',
                color: theme.secondaryTextColor || '#2d2d2d',
                margin: '4px 0',
                lineHeight: '1.5',
              }}
            >
              • {feature}
            </p>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div style={{ padding: '0 20px 20px 20px' }}>
        <button
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: theme.buttonColors?.primary || '#ffdb00',
            color: theme.primaryTextColor || '#151515',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.buttonColors?.secondary || '#e5c500';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.buttonColors?.primary || '#ffdb00';
          }}
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            onClick();
          }}
        >
          Quick start
        </button>
      </div>

      {/* Bottom info */}
      <div style={{ 
        position: 'absolute',
        bottom: '80px',
        left: '20px',
        right: '20px',
      }}>
        <p
          style={{
            fontSize: '16px',
            color: '#979797',
            margin: '0 0 4px 0',
            lineHeight: '1.4',
          }}
        >
          {material.subtitle}
        </p>
        <p
          style={{
            fontSize: '16px',
            color: '#1477d6',
            fontWeight: 'normal',
            margin: '0 0 8px 0',
            textAlign: 'center' as const,
          }}
        >
          From ${material.basePrice}
        </p>
        <h4
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: theme.primaryTextColor || '#151515',
            margin: '0 0 4px 0',
            lineHeight: '1.2',
          }}
        >
          {material.name}
        </h4>
        <p
          style={{
            fontSize: '16px',
            color: theme.secondaryTextColor || '#2d2d2d',
            margin: '0',
            lineHeight: '1.5',
          }}
        >
          {material.description}
        </p>
      </div>
    </div>
  );
};

export default StickerMaterialCard;