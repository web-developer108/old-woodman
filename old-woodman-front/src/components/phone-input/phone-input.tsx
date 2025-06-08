import type { PhoneInputProps } from './phone-input.types.ts';
import styles from './phone-input.module.scss'

export const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    const digitsOnly = input.replace(/\D/g, '');
    const formatted = '+' + digitsOnly;

    onChange(formatted);
  };

  const digitsCount = value.replace(/\D/g, '').length;
  const isInvalid = digitsCount < 12;

  return (
      <input
        className={isInvalid ? styles.error : styles.phone}
        type="tel"
        value={value}
        onChange={handleChange}
        placeholder="Номер телефона"
        required
      />

  );
};