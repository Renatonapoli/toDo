import styles from "./Search.module.css";
import AddTaskList from "../../assets/addList.svg";

import { useState } from "react";

interface SearchProps {
  onAddTask: (task: string) => void;
}

export function Search({ onAddTask }: SearchProps) {
  const [inputValue, setInpuValue] = useState<string>("");

  function handleInsertInformation() {
    if (!inputValue) {
      return null;
    }
    onAddTask(inputValue);
    setInpuValue("");
  }

  function handleInputchange(event: React.ChangeEvent<HTMLInputElement>) {
    setInpuValue(event.target.value);
  }

  return (
    <div className={styles.container}>
      <input type="text" value={inputValue} onChange={handleInputchange} />
      <button onClick={handleInsertInformation}>
        Criar <img src={AddTaskList} alt="" />
      </button>
    </div>
  );
}
