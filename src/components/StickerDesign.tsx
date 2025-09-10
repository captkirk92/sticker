import React from 'react';
import { StickerConfig, StickerType, StickerMaterial } from '../types/sticker-types';
import StickerProductCard from './StickerProductCard';
import StickerMaterialCard from './StickerMaterialCard';

export interface StickerDesignProps {
  /** Configuration object for customizing the sticker component */
  config?: StickerConfig;
  /** CSS class name for styling the container */
  className?: string;
  /** Custom styling for the container */
  style?: React.CSSProperties;
  /** Callback when a sticker type is selected */
  onStickerSelect?: (sticker: StickerType) => void;
  /** Callback when a material is selected */
  onMaterialSelect?: (material: StickerMaterial) => void;
  /** Whether to show the header section */
  showHeader?: boolean;
  /** Whether to show the materials section */
  showMaterials?: boolean;
}

// Default sticker types data
const defaultStickerTypes: StickerType[] = [
  {
    id: 'die-cut',
    name: 'Die Cut Stickers',
    description: 'Precisely cut to any shape',
    image: '/images/die-cut-sticker.png',
    badge: { text: 'Popular', color: '#ffdb00' },
    popular: true,
  },
  {
    id: 'sticker-sheets', 
    name: 'Sticker Sheets',
    description: 'Multiple designs, one sheet',
    image: '/images/sticker-sheets.png',
    badge: { text: 'Trending', color: '#151515' },
    trending: true,
  },
  {
    id: 'heavy-duty',
    name: 'Heavy Duty',
    description: 'Industrial strength',
    image: '/images/heavy-duty.png',
  },
  {
    id: 'singles-on-sheet',
    name: 'Singles on Sheet',
    description: 'Multiple copies',
    image: '/images/singles-on-sheet.png',
  },
  {
    id: 'front-adhesive',
    name: 'Front Adhesive',
    description: 'Front side sticky',
    image: '/images/front-adhesive.png',
  },
  {
    id: 'hang-tag',
    name: 'Hang Tag',
    description: 'Punctured hole',
    image: '/images/hang-tag.png',
  },
  {
    id: 'removable',
    name: 'Removable',
    description: 'Easy peel-off',
    image: '/images/removable.png',
  },
  {
    id: 'floor',
    name: 'Floor',
    description: 'Slip resistant',
    image: '/images/floor.png',
  },
  {
    id: 'wall',
    name: 'Wall',
    description: 'Easy on the wall',
    image: '/images/wall.png',
  },
];

// Default materials data
const defaultMaterials: StickerMaterial[] = [
  {
    id: 'vinyl',
    name: 'Vinyl',
    subtitle: 'The OG Material',
    description: 'Our best-selling classic sticker material.',
    basePrice: 26,
    features: ['PVC Free', 'Back Paper Print', 'Waterproof'],
    pricing: [
      { quantity: 57, price: 26, featured: true },
      { quantity: 100, price: 46 },
      { quantity: 200, price: 62, discount: 32 },
      { quantity: 300, price: 92, discount: 32 },
      { quantity: 500, price: 109, discount: 52 },
      { quantity: 600, price: 131, discount: 52 },
      { quantity: 900, price: 168, discount: 59 },
      { quantity: 1200, price: 225, discount: 59 },
      { quantity: 1500, price: 242, discount: 65 },
    ],
    image: '/images/vinyl-material.png',
  },
  {
    id: 'transparent',
    name: 'Transparent',
    subtitle: 'Custom stickers',
    description: 'A clear favorite with a see-thru effect.',
    basePrice: 32,
    features: ['PVC Free', 'Back Paper Print', 'Waterproof'],
    pricing: [
      { quantity: 58, price: 32, featured: true },
      { quantity: 100, price: 55 },
      { quantity: 200, price: 109 },
      { quantity: 300, price: 111, discount: 32 },
      { quantity: 500, price: 131, discount: 52 },
      { quantity: 600, price: 158, discount: 52 },
      { quantity: 900, price: 168, discount: 66 },
      { quantity: 1200, price: 225, discount: 66 },
      { quantity: 1500, price: 242, discount: 71 },
    ],
    image: '/images/transparent-material.png',
  },
];

/**
 * A portable and configurable sticker design component that can be easily
 * integrated into any React website. Displays sticker types and materials
 * with pricing information.
 */
const StickerDesign: React.FC<StickerDesignProps> = ({
  config,
  className = '',
  style = {},
  onStickerSelect,
  onMaterialSelect,
  showHeader = true,
  showMaterials = true,
}) => {
  const stickerTypes = config?.stickerTypes || defaultStickerTypes;
  const materials = config?.materials || defaultMaterials;
  const theme = config?.theme || {};

  const handleStickerClick = (sticker: StickerType) => {
    onStickerSelect?.(sticker);
  };

  const handleMaterialClick = (material: StickerMaterial) => {
    onMaterialSelect?.(material);
  };

  return (
    <div 
      className={`sticker-design ${className}`}
      style={{
        fontFamily: theme.fontFamily || 'system-ui, -apple-system, sans-serif',
        backgroundColor: theme.backgroundColor || '#ffffff',
        ...style,
      }}
    >
      {/* Header Section */}
      {showHeader && (
        <div className="sticker-header" style={{ 
          backgroundColor: theme.headerBackgroundColor || '#f5f5f5',
          padding: '60px 20px',
          textAlign: 'center' as const,
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '20px',
              fontWeight: 'bold',
              color: theme.primaryTextColor || '#151515',
              marginBottom: '8px',
            }}>
              {config?.headerText?.subtitle || 'Make your own'}
            </h2>
            <h1 style={{ 
              fontSize: '56px',
              fontWeight: 'bold',
              color: theme.primaryTextColor || '#151515',
              marginBottom: '24px',
              lineHeight: '1',
            }}>
              {config?.headerText?.title || 'Custom Stickers'}
            </h1>
            <p style={{ 
              fontSize: '20px',
              color: theme.secondaryTextColor || '#2d2d2d',
              lineHeight: '1.4',
              maxWidth: '688px',
              margin: '0 auto',
            }}>
              {config?.headerText?.description || 
               'Choose between our most popular products like our single Die Cut Stickers or Sticker Sheets, tailored to any shape you need. Perfect for creating a unique, high-quality look that makes your brand stand out.'}
            </p>
          </div>
        </div>
      )}

      {/* Sticker Types Section */}
      <div className="sticker-types-section" style={{
        backgroundColor: theme.sectionBackgroundColor || '#f5f5f5',
        padding: '60px 20px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '20px',
            justifyContent: 'center',
          }}>
            {stickerTypes.map((sticker) => (
              <StickerProductCard
                key={sticker.id}
                sticker={sticker}
                onClick={() => handleStickerClick(sticker)}
                theme={theme}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Materials Section */}
      {showMaterials && (
        <div className="sticker-materials-section" style={{
          backgroundColor: theme.materialsBackgroundColor || '#f5f5f5',
          padding: '60px 20px',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: 'bold',
              color: theme.primaryTextColor || '#151515',
              marginBottom: '24px',
            }}>
              {config?.materialsText?.title || 'Sticker Materials'}
            </h2>
            <p style={{
              fontSize: '16px',
              color: theme.secondaryTextColor || '#2d2d2d',
              lineHeight: '1.5',
              marginBottom: '60px',
              maxWidth: '684px',
            }}>
              {config?.materialsText?.description || 
               'Explore our durable materials, from vinyl and crystal-clear transparents to iridescent holographic, brushed metallic, glitter, prismatic, and more. Discover the exact finish and feel that brings your design to life.'}
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '20px',
              justifyContent: 'center',
            }}>
              {materials.map((material) => (
                <StickerMaterialCard
                  key={material.id}
                  material={material}
                  onClick={() => handleMaterialClick(material)}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StickerDesign;