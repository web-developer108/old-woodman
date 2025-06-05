export type MetaTag = {
  name?: string;
  property?: string;
  content: string;
};

export type SeoHeadProps = {
  title: string;
  meta?: MetaTag[];
  includeDefaults?: boolean;
};
