import type { CircleButtonProps } from './circle-button.types.tsx';
import styles from './circle-button.module.scss';

export const CircleButton: React.FC<CircleButtonProps> = ({
  icon,
  bgColor = '#e3e3e3',
  onClick,
}) => {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};