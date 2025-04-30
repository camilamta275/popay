import { useState } from "react";
import { MovementType } from "../../types/movement";
import EntryExitToggle from "../EntryExitToggle/EntryExitToggle";
import ValueInput from "../ValueInput/ValueInput";
import AccountSelect from "../AccountSelect/AccountSelect";
import DescriptionInput from "../DescriptionInput/DescriptionInput";
import CategorySelect from "../CategorySelect/CategorySelectTemp";
import SaveButton from "../SaveButton/SaveButton";

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

  const handleSubmit = () => {
    console.log("Movimentação salva!");
  };

  const isFormValid =
    value.trim() !== "" &&
    selectedAccount !== "" &&
    selectedCategory !== "" &&
    description.trim() !== "" &&
    date !== "";

  return (
    <form onSubmit={handleSubmit}>
      <EntryExitToggle value={movementType} onChange={setMovementType} />
      <ValueInput value={value} onChange={setValue} />
      <AccountSelect
        accounts={accounts}
        selectedAccountId={selectedAccount}
        onChange={setSelectedAccount}
      />
      <DescriptionInput description={description} onChange={setDescription} />{" "}
      <CategorySelect
        categories={categories}
        selectedCategoryId={selectedCategory}
        onChange={setSelectedCategory}
      />
      <SaveButton disabled={!isFormValid} />
    </form>
  );
};

export default MovementForm;
