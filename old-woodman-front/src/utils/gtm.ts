import type { GTMEvent } from '../types/global';

export const initGTM = (gtmId: string) => {
  if (typeof window === 'undefined') return;

  if (!window.dataLayer) window.dataLayer = [];

  if (!document.getElementById('gtm-script')) {
    const script = document.createElement('script');
    script.id = 'gtm-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);

    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });
  }
};

export const pushGTMEvent = (event: GTMEvent) => {
  if (window.dataLayer) {
    window.dataLayer?.push(event);
  }
};
