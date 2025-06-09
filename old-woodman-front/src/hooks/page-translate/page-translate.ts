import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const getNamespaceFromPath = (pathname: string): string => {
  const parts = pathname.split('/').filter(Boolean);
  return parts[0] || 'home';
};

export const usePageTranslate = (customNs?: string) => {
  const location = useLocation();
  const namespace = customNs || getNamespaceFromPath(location.pathname);

  return useTranslation(namespace);
};
