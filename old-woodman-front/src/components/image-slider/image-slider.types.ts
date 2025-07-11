type SliderItem = {
  src: string;
  label: string;
};

export type SliderProps = {
  images: SliderItem[];
  selectedIndex?: number;
  onSelect?: (index: number) => void;
};