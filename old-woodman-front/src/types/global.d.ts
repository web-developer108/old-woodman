
export type GTMEvent = {
  event: string;
  [key: string]: unknown;
};

declare global {
  interface Window {
    dataLayer?: GTMEvent[];
  }
}

export {};
