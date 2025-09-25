import type { GTMEvent } from '../types/global';


export const pushGTMEvent = (event: GTMEvent) => {
  if (window.dataLayer) {
    window.dataLayer?.push(event);
  }
};
