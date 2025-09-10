import React from 'react';
import { StickerDesign, StickerType, StickerMaterial } from './index';

// Import images
import imgImage from "figma:asset/6be2426974927e90f4f631d7e376d1a922b305f7.png";
import imgImage1 from "figma:asset/f2bbbf5137e15f87ab18b3e13c17b44d6b73ee50.png";
import imgImage2 from "figma:asset/8fe54093aea3f46b75882a87fd83833d18f74598.png";
import imgImage3 from "figma:asset/482e58cca3723c6cf8ec69b789d68aaf77b6f6dd.png";
import imgImage4 from "figma:asset/2f33487801809ad2bf0ddc27ddfe70fd676f2bf1.png";
import imgImage5 from "figma:asset/a79d87fe3e28d6bceef5a98d1eba0ac558770cf3.png";
import imgImage6 from "figma:asset/35d8deba93f44ef140bc47602e74f6a8e301573a.png";
import imgImage7 from "figma:asset/461f771f2320dec4fda3471211847aa9fd289ed4.png";
import imgImage8 from "figma:asset/286cb07dcde9e4a2d43fda2e2a87b00408c07300.png";
import imgImage9 from "figma:asset/10b6454492f55776817fcca630423f3e548acf56.png";
import imgImage10 from "figma:asset/3e81d4ea34903fd6b73f764d14f0d75f0510d025.png";

// Custom sticker types using imported images
const customStickerTypes: StickerType[] = [
  {
    id: 'die-cut',
    name: 'Die Cut Stickers',
    description: 'Precisely cut to any shape',
    image: imgImage,
    badge: { text: 'Popular', color: '#ffdb00' },
    popular: true,
  },
  {
    id: 'sticker-sheets', 
    name: 'Sticker Sheets',
    description: 'Multiple designs, one sheet',
    image: imgImage1,
    badge: { text: 'Trending', color: '#151515' },
    trending: true,
  },
  {
    id: 'heavy-duty',
    name: 'Heavy Duty',
    description: 'Industrial strength',
    image: imgImage2,
  },
  {
    id: 'singles-on-sheet',
    name: 'Singles on Sheet',
    description: 'Multiple copies',
    image: imgImage3,
  },
  {
    id: 'front-adhesive',
    name: 'Front Adhesive',
    description: 'Front side sticky',
    image: imgImage4,
  },
  {
    id: 'hang-tag',
    name: 'Hang Tag',
    description: 'Punctured hole',
    image: imgImage5,
  },
  {
    id: 'removable',
    name: 'Removable',
    description: 'Easy peel-off',
    image: imgImage6,
  },
  {
    id: 'floor',
    name: 'Floor',
    description: 'Slip resistant',
    image: imgImage7,
  },
  {
    id: 'wall',
    name: 'Wall',
    description: 'Easy on the wall',
    image: imgImage8,
  },
];

// Custom materials using imported images
const customMaterials: StickerMaterial[] = [
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
    image: imgImage9,
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
    image: imgImage10,
  },
];

export default function App() {
  const handleStickerSelect = (sticker: StickerType) => {
    console.log('Selected sticker:', sticker);
    // Add your custom logic here
  };

  const handleMaterialSelect = (material: StickerMaterial) => {
    console.log('Selected material:', material);
    // Add your custom logic here
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Demo Header */}
      <div style={{ 
        backgroundColor: '#151515', 
        color: 'white', 
        padding: '20px',
        textAlign: 'center' as const,
      }}>
        <h1 style={{ margin: '0 0 8px 0', fontSize: '24px' }}>
          Portable Sticker Design Component Demo
        </h1>
        <p style={{ margin: '0', opacity: 0.8 }}>
          This component can be easily integrated into any React website
        </p>
      </div>

      {/* Portable Sticker Component */}
      <StickerDesign
        config={{
          stickerTypes: customStickerTypes,
          materials: customMaterials,
          theme: {
            fontFamily: 'Noto Sans, system-ui, -apple-system, sans-serif',
            backgroundColor: '#ffffff',
            headerBackgroundColor: '#f5f5f5',
            sectionBackgroundColor: '#f5f5f5',
            materialsBackgroundColor: '#f5f5f5',
            primaryTextColor: '#151515',
            secondaryTextColor: '#2d2d2d',
            accentColor: '#ffdb00',
            cardBackgroundColor: '#ffffff',
            cardBorderColor: '#e5e5e5',
            buttonColors: {
              primary: '#ffdb00',
              secondary: '#e5c500',
              disabled: '#cccccc',
            },
          },
        }}
        onStickerSelect={handleStickerSelect}
        onMaterialSelect={handleMaterialSelect}
      />

      {/* Demo Footer */}
      <div style={{ 
        backgroundColor: '#f5f5f5', 
        padding: '40px 20px',
        textAlign: 'center' as const,
        borderTop: '1px solid #e5e5e5',
      }}>
        <h3 style={{ marginBottom: '16px' }}>Integration Example</h3>
        <pre style={{ 
          backgroundColor: '#151515',
          color: '#ffffff',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'left' as const,
          overflowX: 'auto' as const,
          fontSize: '14px',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
{`import { StickerDesign } from 'react-sticker-design';

function MyApp() {
  return (
    <div>
      <StickerDesign 
        onStickerSelect={(sticker) => console.log(sticker)}
        onMaterialSelect={(material) => console.log(material)}
      />
    </div>
  );
}`}
        </pre>
      </div>
    </div>
  );
}