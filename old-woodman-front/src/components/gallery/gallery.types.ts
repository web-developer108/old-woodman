export type GalleryLayout = 'default' | 'complex'| 'repeatingBlock';

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryProps {
  images: GalleryImage[];
  layout?: GalleryLayout;
}