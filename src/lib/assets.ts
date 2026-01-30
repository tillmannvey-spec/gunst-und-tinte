/**
 * Asset path constants for Gunst & Tinte website
 * All paths are relative to the public directory
 */

// Logos
export const LOGO_START = '/logos/logo-start.svg';
export const LOGO_SHORT = '/logos/logo-short.svg';
export const LOGO_SHORT_LONG = '/logos/logo-short-long.svg';
export const LOGO_SHORT_LONG_PNG = '/logos/logo-short-long.png';
export const LOGO_SHORT_LONG_2 = '/logos/logo-short-long-2.svg';
export const LOGO_KONTAKT = '/logos/logo-kontakt.svg';

// Hero Images
export const HERO_RUBENS = '/images/hero/rubens.jpg';

// Background Images
export const BG_FOREST = '/images/backgrounds/forest.jpg';
export const BG_GREEN = '/images/backgrounds/green.jpg';
export const BG_OFFWHITE = '/images/backgrounds/offwhite.jpg';
export const BG_RED = '/images/backgrounds/red.jpg';

// Theresa Portrait
export const THERESA_PORTRAIT = '/images/theresa/theresa-portrait.png';

// Graphics
export const GRAPHIC_SONNE = '/graphics/sonne.svg';
export const GRAPHIC_STRAHLEN = '/graphics/strahlen.svg';

// Social Media Icons
export const ICON_INSTAGRAM_OFFWHITE = '/icons/social/instagram-offwhite.svg';
export const ICON_INSTAGRAM_ORANGE = '/icons/social/instagram-orange.svg';
export const ICON_TIKTOK_OFFWHITE = '/icons/social/tiktok-offwhite.svg';
export const ICON_TIKTOK_ORANGE = '/icons/social/tiktok-orange.svg';

// UI Icons
export const ICON_MAIL_ORANGE = '/icons/ui/mail-orange.svg';
export const ICON_TEL_ORANGE = '/icons/ui/tel-orange.svg';

// Grouped exports for convenience
export const logos = {
  start: LOGO_START,
  short: LOGO_SHORT,
  shortLong: LOGO_SHORT_LONG,
  shortLongPng: LOGO_SHORT_LONG_PNG,
  shortLong2: LOGO_SHORT_LONG_2,
  kontakt: LOGO_KONTAKT,
} as const;

export const backgrounds = {
  forest: BG_FOREST,
  green: BG_GREEN,
  offwhite: BG_OFFWHITE,
  red: BG_RED,
} as const;

export const graphics = {
  sonne: GRAPHIC_SONNE,
  strahlen: GRAPHIC_STRAHLEN,
} as const;

export const socialIcons = {
  instagram: {
    offwhite: ICON_INSTAGRAM_OFFWHITE,
    orange: ICON_INSTAGRAM_ORANGE,
  },
  tiktok: {
    offwhite: ICON_TIKTOK_OFFWHITE,
    orange: ICON_TIKTOK_ORANGE,
  },
} as const;

export const uiIcons = {
  mail: ICON_MAIL_ORANGE,
  tel: ICON_TEL_ORANGE,
} as const;
