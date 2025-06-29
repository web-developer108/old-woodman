export type BlockType = 'doors' | 'furniture' | 'facades';


export interface NavigationBlockProps {
  blocks?: BlockType[];
  isHome?: boolean;
}
