import styles from "./Search.module.css"
import { useState } from "react"

interface SearchProps {
  onAddTask: (task: string) => void
}

export function Search({ onAddTask }: SearchProps) {
  const [inputValue, setInpuValue] = useState("")

  function handleInsertInformation() {
    onAddTask(inputValue)
    setInpuValue("")
  }

  function handleInputchange(event: React.ChangeEvent<HTMLInputElement>) {
    setInpuValue(event.target.value)
  }

  return (
    <div className={styles.container}>
      <input type="text" value={inputValue} onChange={handleInputchange} />
      <button onClick={handleInsertInformation}>
        Criar <img src="../../src/assets/addList.svg" alt="" />
      </button>
    </div>
  )
}
