import tokens from '../../design-tokens.json';

export const meta = tokens.meta as {
  siteName: string;
  visualDirection: string;
  motionLevel: number;
  defaultLocale: string;
  locales: string[];
};

export const colors = tokens.colors as {
  brand: {
    primary: string;
    primaryForeground: string;
    secondary: string;
    accent: string;
  };
  neutral: {
    50: string;
    100: string;
    400: string;
    500: string;
    900: string;
  };
  semantic: {
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    muted: string;
    mutedForeground: string;
    accent: string;
    accentForeground: string;
    border: string;
    input: string;
    ring: string;
    success: string;
    warning: string;
    destructive: string;
  };
};

export const typography = tokens.typography as {
  families: {
    display: string;
    body: string;
    mono: string;
  };
  scale: Record<string, number>;
};

export const spacing = tokens.spacing as {
  scale: Record<string, number>;
  layout: {
    maxWidth: number;
    contentPadding: number;
    sectionGap: number;
  };
};

export const radius = tokens.radius as Record<string, number>;
export const shadows = tokens.shadows as Record<string, string>;
export const motion = tokens.motion as {
  duration: Record<string, number>;
  easing: Record<string, string>;
  variants: {
    fadeInUp: {
      initial: { opacity: number; y: number };
      animate: { opacity: number; y: number };
      transition: { duration: number };
    };
    stagger: { staggerChildren: number };
  };
};

export const getSpacing = (key: keyof typeof spacing.scale): number => spacing.scale[key];
export const getFontSize = (key: keyof typeof typography.scale): number => typography.scale[key];
export const getRadius = (key: keyof typeof radius): number => radius[key];
