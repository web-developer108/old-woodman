export type GalleryLayout = 'default' | 'complex';

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryProps {
  images: GalleryImage[];
  layout?: GalleryLayout;
}