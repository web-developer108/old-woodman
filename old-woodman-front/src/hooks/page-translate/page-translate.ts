import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const getNamespaceFromPath = (pathname: string): string => {
  const parts = pathname.split('/').filter(Boolean);
  console.log('parts', parts)
  return parts[0] || 'home';
};

export const usePageTranslate = (customNs?: string) => {
  const location = useLocation();
  console.log('location', location)
  const namespace = customNs || getNamespaceFromPath(location.pathname);
  console.log('namespace', namespace)

  return useTranslation(namespace);
};
