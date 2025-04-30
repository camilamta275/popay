import React from 'react';
import styles from './EntryExitToggle.module.css';

type MovementType = 'entrada' | 'saida';

interface EntryExitToggleProps {
  value: MovementType;
  onChange: (value: MovementType) => void;
}

const EntryExitToggle: React.FC<EntryExitToggleProps> = ({ value, onChange }) => {
  return (
    <div className={styles.toggleContainer}>
      <button
        type="button"
        onClick={() => onChange('entrada')}
        className={`${styles.toggleButton} ${value === 'entrada' ? styles.activeEntrada : ''}`}
      >
        Entrada
      </button>
      <button
        type="button"
        onClick={() => onChange('saida')}
        className={`${styles.toggleButton} ${value === 'saida' ? styles.activeSaida : ''}`}
      >
        Saída
      </button>
    </div>
  );
};

export default EntryExitToggle;
