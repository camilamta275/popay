import { useState } from "react";
import { MovementType } from "../../types/movement";
import EntryExitToggle from "../EntryExitToggle/EntryExitToggle";
import ValueInput from "../ValueInput/ValueInput";
import AccountSelect from "../AccountSelect/AccountSelect";
import DescriptionInput from "../DescriptionInput/DescriptionInput";
import CategorySelect from "../CategorySelect/CategorySelectTemp";
import SaveButton from "../SaveButton/SaveButton";
import styles from "../../styles/formStyles.module.css";

const MovementForm = () => {
  const [movementType, setMovementType] = useState<MovementType>("entrada");
  const [value, setValue] = useState("");
  const [selectedAccount, setSelectedAccount] = useState("");
  const accounts = [
    { id: "1", name: "Carteira" },
    { id: "2", name: "Banco do Brasil" },
    { id: "3", name: "Nubank" },
  ];
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [
    { id: "1", name: "Alimentação" },
    { id: "2", name: "Transporte" },
    { id: "3", name: "Salário" },
  ];
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Movimentação salva!");
  };

  const isFormValid =
    value.trim() !== "" &&
    selectedAccount !== "" &&
    selectedCategory !== "" &&
    description.trim() !== "" &&
    date !== "";

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Cadastrar movimentação</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.toggleButtonGroup}>
            <EntryExitToggle value={movementType} onChange={setMovementType} />
          </div>

          <div className={styles.row}>
            <div className={styles.column}>
              <ValueInput value={value} onChange={setValue} />
            </div>
            <div className={styles.column}>
              <AccountSelect
                accounts={accounts}
                selectedAccountId={selectedAccount}
                onChange={setSelectedAccount}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <DescriptionInput description={description} onChange={setDescription} />
          </div>

          <div className={styles.inputGroup}>
            <CategorySelect
              categories={categories}
              selectedCategoryId={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>

          <SaveButton disabled={isFormValid} className={styles.saveButton} />
        </form>
      </div>
    </div>
  );
};

export default MovementForm;
