export const TLCBrand = {
  colors: { primary: '#FAF6F0', secondary: '#2B2B2B', accent: '#8B9E89' },
  fonts: { display: 'Georgia, Cormorant Garamond, serif', body: 'Arial, Inter, sans-serif' },
  video: { width: 1080, height: 1920, fps: 30, durationFrames: 1794, sourceHeight: 1908 },
  safe: { top: 250, bottom: 350, horizontal: 80 },
  // Visible portrait framing: face mostly in x=390..960, y=320..990.
  graphicAnchor: { x: 38, y: 395, width: 326 },
  caption: { y: 1545, x: 90, width: 900 },
  logo: { width: 315 },
} as const;
