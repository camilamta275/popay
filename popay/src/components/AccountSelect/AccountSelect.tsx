import React from 'react';
import styles from './AccountSelect.module.css';

interface Account {
  id: string;
  name: string;
}

interface AccountSelectProps {
  accounts: Account[];
  selectedAccountId: string;
  onChange: (accountId: string) => void;
}

const AccountSelect: React.FC<AccountSelectProps> = ({
  accounts,
  selectedAccountId,
  onChange,
}) => {
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
