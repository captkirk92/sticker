# Example: Using React Sticker Design in Your Project

## Installation
```bash
npm install react-sticker-design
```

## Basic Usage

```jsx
// MyApp.jsx
import React from 'react';
import { StickerDesign } from 'react-sticker-design';

function MyApp() {
  const handleStickerSelection = (sticker) => {
    console.log('User selected sticker:', sticker);
    // Integrate with your backend, analytics, etc.
  };

  const handleMaterialSelection = (material) => {
    console.log('User selected material:', material);
    // Handle material selection for pricing, checkout, etc.
  };

  return (
    <div className="my-website">
      <header>
        <h1>Welcome to My Custom Sticker Shop</h1>
      </header>
      
      {/* Easily drop in the sticker component */}
      <StickerDesign 
        onStickerSelect={handleStickerSelection}
        onMaterialSelect={handleMaterialSelection}
      />
      
      <footer>
        <p>© 2024 My Sticker Shop</p>
      </footer>
    </div>
  );
}

export default MyApp;
```

## Advanced Custom Theme Example

```jsx
// CustomStickerShop.jsx
import React from 'react';
import { StickerDesign } from 'react-sticker-design';

const myBrandConfig = {
  theme: {
    primaryTextColor: '#1a202c',
    accentColor: '#3182ce', // My brand blue
    cardBackgroundColor: '#ffffff',
    headerBackgroundColor: '#f7fafc',
    buttonColors: {
      primary: '#3182ce',
      secondary: '#e2e8f0',
    }
  },
  headerText: {
    title: 'Premium Custom Stickers',
    subtitle: 'Designed for your brand',
    description: 'Professional quality stickers that make your brand memorable.'
  }
};

function CustomStickerShop() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <StickerDesign 
        config={myBrandConfig}
        onStickerSelect={(sticker) => {
          // Track with your analytics
          gtag('event', 'sticker_selected', {
            sticker_type: sticker.id,
            sticker_name: sticker.name
          });
          
          // Redirect to customization page
          window.location.href = `/customize/${sticker.id}`;
        }}
        onMaterialSelect={(material) => {
          // Update pricing calculation
          updatePricing(material);
        }}
        showHeader={true}
        showMaterials={true}
        className="my-custom-sticker-section"
      />
    </div>
  );
}

export default CustomStickerShop;
```

## Integration with E-commerce Platforms

### With Shopify Theme
```liquid
<!-- In your theme's liquid file -->
<div id="sticker-configurator"></div>
<script type="module">
  import { StickerDesign } from '/assets/react-sticker-design.js';
  import { createRoot } from '/assets/react-dom-client.js';

  const root = createRoot(document.getElementById('sticker-configurator'));
  root.render(React.createElement(StickerDesign, {
    onStickerSelect: (sticker) => {
      // Add to Shopify cart
      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: sticker.shopifyVariantId,
          quantity: 1
        })
      });
    }
  }));
</script>
```

### With Next.js
```jsx
// pages/stickers.js or app/stickers/page.jsx
import dynamic from 'next/dynamic';

// Dynamically import to avoid SSR issues
const StickerDesign = dynamic(
  () => import('react-sticker-design').then(mod => mod.StickerDesign),
  { 
    ssr: false,
    loading: () => <p>Loading sticker designer...</p>
  }
);

export default function StickersPage() {
  return (
    <div>
      <h1>Custom Stickers</h1>
      <StickerDesign 
        onStickerSelect={(sticker) => {
          // Use Next.js router for navigation
          router.push(`/customize?type=${sticker.id}`);
        }}
      />
    </div>
  );
}
```

## Key Benefits

✅ **Zero Configuration** - Works out of the box with sensible defaults
✅ **Fully Customizable** - Theme colors, text, product data, everything
✅ **TypeScript Ready** - Complete type definitions included
✅ **Framework Agnostic** - Works with any React setup
✅ **Mobile Responsive** - Automatically adapts to screen sizes
✅ **Accessible** - Built with WCAG guidelines in mind
✅ **Production Ready** - Optimized bundle, tree-shakeable