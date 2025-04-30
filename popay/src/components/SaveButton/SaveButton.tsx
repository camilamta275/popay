import React from 'react';
import styles from './SaveButton.module.css';

interface SaveButtonProps {
  disabled?: boolean;
}

const SaveButton: React.FC<SaveButtonProps> = ({ disabled = false }) => {
  return (
    <button
      type="submit"
      className={styles.button}
      disabled={disabled}
    >
      Salvar
    </button>
  );
};

export default SaveButton;
