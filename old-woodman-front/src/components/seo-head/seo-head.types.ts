export type MetaTag = {
  name?: string;
  property?: string;
  content: string;
};

export type SeoHeadProps = {
  meta?: MetaTag[];
  includeDefaults?: boolean;
};
