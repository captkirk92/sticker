# React Sticker Design

A portable and highly customizable React component for creating sticker design interfaces that can be easily integrated into any React website.

## Features

- **Portable**: Drop into any React project with minimal setup
- **Customizable**: Full theming and configuration support
- **TypeScript Ready**: Complete TypeScript definitions included
- **Responsive**: Works on desktop and mobile devices
- **Accessible**: Built with accessibility in mind
- **Modern**: Uses modern React patterns and hooks

## Installation

```bash
npm install react-sticker-design
```

## Quick Start

```jsx
import React from 'react';
import { StickerDesign } from 'react-sticker-design';

function App() {
  return (
    <div>
      <StickerDesign 
        onStickerSelect={(sticker) => console.log('Selected:', sticker)}
        onMaterialSelect={(material) => console.log('Selected:', material)}
      />
    </div>
  );
}

export default App;
```

## Advanced Usage

### Custom Configuration

```jsx
import { StickerDesign } from 'react-sticker-design';

const customConfig = {
  theme: {
    primaryTextColor: '#000000',
    accentColor: '#ff6b35',
    cardBackgroundColor: '#ffffff',
    buttonColors: {
      primary: '#ff6b35',
      secondary: '#e5e5e5',
    }
  },
  headerText: {
    title: 'Your Custom Stickers',
    subtitle: 'Design your way',
    description: 'Create amazing stickers with our custom tools.'
  }
};

function App() {
  const handleStickerSelection = (sticker) => {
    // Your custom logic here
    console.log('User selected sticker:', sticker);
  };

  const handleMaterialSelection = (material) => {
    // Your custom logic here
    console.log('User selected material:', material);
  };

  return (
    <StickerDesign 
      config={customConfig}
      onStickerSelect={handleStickerSelection}
      onMaterialSelect={handleMaterialSelection}
      showHeader={true}
      showMaterials={true}
    />
  );
}
```

### Custom Sticker Types

```jsx
const customStickerTypes = [
  {
    id: 'custom-design',
    name: 'Custom Design',
    description: 'Your unique design',
    image: '/path/to/image.png',
    badge: { text: 'New', color: '#00ff00' }
  }
];

const config = {
  stickerTypes: customStickerTypes
};

<StickerDesign config={config} />
```

## Props

### StickerDesign Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `config` | `StickerConfig` | Default config | Configuration object for customizing the component |
| `className` | `string` | `''` | CSS class name for the container |
| `style` | `React.CSSProperties` | `{}` | Inline styles for the container |
| `onStickerSelect` | `(sticker: StickerType) => void` | `undefined` | Callback when a sticker is selected |
| `onMaterialSelect` | `(material: StickerMaterial) => void` | `undefined` | Callback when a material is selected |
| `showHeader` | `boolean` | `true` | Whether to show the header section |
| `showMaterials` | `boolean` | `true` | Whether to show the materials section |

## Configuration

### Theme Options

```typescript
interface Theme {
  fontFamily?: string;
  backgroundColor?: string;
  headerBackgroundColor?: string;
  sectionBackgroundColor?: string;
  materialsBackgroundColor?: string;
  primaryTextColor?: string;
  secondaryTextColor?: string;
  accentColor?: string;
  cardBackgroundColor?: string;
  cardBorderColor?: string;
  buttonColors?: {
    primary?: string;
    secondary?: string;
    disabled?: string;
  };
}
```

### StickerType Interface

```typescript
interface StickerType {
  id: string;
  name: string;
  description: string;
  image: string;
  badge?: {
    text: string;
    color: string;
  };
  popular?: boolean;
  trending?: boolean;
}
```

### StickerMaterial Interface

```typescript
interface StickerMaterial {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  basePrice: number;
  pricing: PricingTier[];
  features: string[];
  image: string;
}
```

## Development

### Running the Demo

```bash
npm run dev
```

### Building the Library

```bash
npm run build:lib
```

### Building the Demo

```bash
npm run build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Examples

Check out the demo at: `npm run dev`

The demo shows various configuration options and usage patterns.