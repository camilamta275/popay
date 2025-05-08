import React from 'react';
import styles from './AccountSelect.module.css';

const AccountSelect = ({ accounts, selectedAccountId, onChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor="accountSelect" className={styles.label}>
        Conta
      </label>
      <select
        id="accountSelect"
        className={styles.select}
        value={selectedAccountId}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Selecione uma conta</option>
        {accounts.map((account) => (
          <option key={account.id} value={account.id}>
            {account.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AccountSelect;
