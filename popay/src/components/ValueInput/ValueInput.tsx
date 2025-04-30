import React from 'react';
import styles from './ValueInput.module.css';

interface ValueInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

const formatCurrency = (value: string) => {
  const numericValue = value.replace(/\D/g, ''); // Remove tudo que não for número
  const number = parseFloat(numericValue) / 100;

  if (isNaN(number)) return '';

  return number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

const ValueInput: React.FC<ValueInputProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const numeric = raw.replace(/\D/g, ''); // só dígitos
    onChange(numeric); // valor limpo
  };

  return (
    <div className={styles.container}>
      <label htmlFor="valueInput" className={styles.label}>
        Valor
      </label>
      <input
        type="text"
        id="valueInput"
        className={styles.input}
        value={formatCurrency(value)}
        onChange={handleChange}
        placeholder="R$ 0,00"
        inputMode="numeric"
      />
    </div>
  );
};

export default ValueInput;
