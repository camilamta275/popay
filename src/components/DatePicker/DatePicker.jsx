import React from 'react';
import styles from './DatePicker.module.css';

const DatePicker = ({ date, onChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor="datePicker" className={styles.label}>
        Data
      </label>
      <input
        type="date"
        id="datePicker"
        className={styles.input}
        value={date}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;
