export type BlockType = 'doors' | 'furniture' | 'facades';

export interface NavigationBlockData {
  title: string;
  description: string;
  to: string;
  imageDesktop: string;
  imageMobile: string;
  imageSmall?: string;
  textColor?: 'light' | 'dark';
}

export interface NavigationBlockProps {
  blocks?: BlockType[];
  isHome?: boolean;
}
