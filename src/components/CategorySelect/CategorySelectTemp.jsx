import React from 'react';
import styles from './CategorySelect.module.css';

const CategorySelect = ({ categories, selectedCategoryId, onChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor="categorySelect" className={styles.label}>
        Categoria
      </label>
      <select
        id="categorySelect"
        className={styles.select}
        value={selectedCategoryId}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Selecione uma categoria</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
