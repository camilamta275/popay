import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SaveButton.module.css';

const SaveButton = ({ disabled = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Aqui você pode também colocar lógica de validação/salvamento, se quiser
    navigate('/');
  };

  return (
    <button
      type="button" // troquei de "submit" para "button" para evitar envio automático de form
      className={styles.button}
      disabled={disabled}
      onClick={handleClick}
    >
      Salvar
    </button>
  );
};

export default SaveButton;
