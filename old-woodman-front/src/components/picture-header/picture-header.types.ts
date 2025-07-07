export type PictureHeaderProps = {
  title: string;
  label: string;
  color? : 'black' | 'white';
  images: {
    small: string;
    medium: string;
    large: string;
  };
};
