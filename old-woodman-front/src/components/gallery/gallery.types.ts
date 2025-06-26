export type GalleryLayout = 'default' | 'two-large' | 'complex';

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryProps {
  images: GalleryImage[];
  layout?: GalleryLayout;
}