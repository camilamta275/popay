import React from 'react';
import styles from './SaveButton.module.css';

const SaveButton = ({ disabled = false }) => {
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
