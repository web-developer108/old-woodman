import { useLocation } from 'react-router-dom';

export const useCurrentCategory = (): 'doors' | 'furniture' | null => {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] === 'doors') return 'doors';
  if (segments[0] === 'furniture') return 'furniture';

  return null;
};
