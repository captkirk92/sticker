export interface StickerType {
  /** Unique identifier for the sticker type */
  id: string;
  /** Display name */
  name: string;
  /** Short description */
  description: string;
  /** Image URL or path */
  image: string;
  /** Optional badge information */
  badge?: {
    text: string;
    color: string;
  };
  /** Whether this is a popular item */
  popular?: boolean;
  /** Whether this is a trending item */
  trending?: boolean;
}

export interface PricingTier {
  /** Quantity for this tier */
  quantity: number;
  /** Price for this tier */
  price: number;
  /** Discount percentage if applicable */
  discount?: number;
  /** Whether this tier is featured/highlighted */
  featured?: boolean;
}

export interface StickerMaterial {
  /** Unique identifier for the material */
  id: string;
  /** Display name */
  name: string;
  /** Subtitle text */
  subtitle?: string;
  /** Description text */
  description: string;
  /** Base price (starting price) */
  basePrice: number;
  /** Array of pricing tiers */
  pricing: PricingTier[];
  /** List of features/benefits */
  features: string[];
  /** Image URL or path */
  image: string;
}

export interface Theme {
  /** Primary font family */
  fontFamily?: string;
  /** Main background color */
  backgroundColor?: string;
  /** Header section background color */
  headerBackgroundColor?: string;
  /** Section background color */
  sectionBackgroundColor?: string;
  /** Materials section background color */
  materialsBackgroundColor?: string;
  /** Primary text color */
  primaryTextColor?: string;
  /** Secondary text color */
  secondaryTextColor?: string;
  /** Accent/brand color */
  accentColor?: string;
  /** Card background color */
  cardBackgroundColor?: string;
  /** Card border color */
  cardBorderColor?: string;
  /** Button colors */
  buttonColors?: {
    primary?: string;
    secondary?: string;
    disabled?: string;
  };
}

export interface HeaderText {
  /** Main title */
  title?: string;
  /** Subtitle */
  subtitle?: string;
  /** Description text */
  description?: string;
}

export interface MaterialsText {
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
}

export interface StickerConfig {
  /** Custom sticker types to display */
  stickerTypes?: StickerType[];
  /** Custom materials to display */
  materials?: StickerMaterial[];
  /** Theme customization */
  theme?: Theme;
  /** Header text customization */
  headerText?: HeaderText;
  /** Materials section text customization */
  materialsText?: MaterialsText;
}