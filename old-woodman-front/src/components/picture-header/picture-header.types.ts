export type PictureHeaderProps = {
  title: string;
  label: string;
  imageBg:  string;
  imageSmall: {
    src:string;
    alt:string
  }
  imageBig:  {
    src:string;
    alt:string
  }
  color? : 'black' | 'white';
  reverseImages?: boolean;
};
