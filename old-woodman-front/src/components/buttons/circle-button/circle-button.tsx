import type { CircleButtonProps } from './circle-button.types.tsx';
import styles from './circle-button.module.scss';

export const CircleButton: React.FC<CircleButtonProps> = ({
  icon,
  bgColor = '#e3e3e3',
  onClick,
  disabled
}) => {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};