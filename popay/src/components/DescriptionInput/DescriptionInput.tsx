import React from 'react';
import styles from './DescriptionInput.module.css';

interface DescriptionInputProps {
  description: string;
  onChange: (newDescription: string) => void;
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({ description, onChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor="descriptionInput" className={styles.label}>
        Descrição
      </label>
      <input
        type="text"
        id="descriptionInput"
        className={styles.input}
        value={description}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ex: Compra no mercado"
      />
    </div>
  );
};

export default DescriptionInput;
