import React from 'react';
import styles from './ValueInput.module.css';

const formatCurrency = (value) => {
  const numericValue = value.replace(/\D/g, '');
  const number = parseFloat(numericValue) / 100;

  if (isNaN(number)) return '';

  return number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

const ValueInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const raw = e.target.value;
    const numeric = raw.replace(/\D/g, '');
    onChange(numeric);
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
