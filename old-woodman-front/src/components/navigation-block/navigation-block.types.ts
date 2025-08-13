export type BlockType = 'doors' | 'furniture' | 'facades' | 'gifts';


export interface NavigationBlockProps {
  blocks?: BlockType[];
  isHome?: boolean;
}
