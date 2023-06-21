import { useState } from "react";
import styles from "./Lists.module.css";
import { Search } from "../Search/Search";

interface ListsProps {}

export function Lists(props: ListsProps) {
  const [tasks, setTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<number>(0);
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

  function handleAddTask(task: string) {
    setTasks((prevTasks) => [...prevTasks, task]);
  }

  function handleDeleteTask(index: number) {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1);
      return newTasks;
    });

    setSelectedTasks((prevSelectedTasks) =>
      prevSelectedTasks.filter((taskIndex) => taskIndex !== index)
    );

    setCompletedTasks((prevCompletedTasks) =>
      prevCompletedTasks > 0 ? prevCompletedTasks - 1 : 0
    );
  }

  function handleTaskStatusChange(index: number) {
    if (selectedTasks.includes(index)) {
      setSelectedTasks((prevSelectedTasks) =>
        prevSelectedTasks.filter((taskIndex) => taskIndex !== index)
      );
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks > 0 ? prevCompletedTasks - 1 : 0
      );
    } else {
      setSelectedTasks((prevSelectedTasks) => [...prevSelectedTasks, index]);
      setCompletedTasks((prevCompletedTasks) => prevCompletedTasks + 1);
    }
  }

  return (
    <div className={styles.containerLists}>
      <Search onAddTask={handleAddTask} />
      <header>
        <div className={styles.taskCreated}>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.completed}>
          <p>Concluídas</p>
          <span>
            {completedTasks} de {tasks.length}
          </span>
        </div>
      </header>

      {tasks.map((task, index) => (
        <section key={index}>
          <ul>
            <input
              type="checkbox"
              name={`taskRadio${index}`}
              id={`taskRadio${index}`}
              className={styles.radio}
              checked={selectedTasks.includes(index)}
              onChange={() => handleTaskStatusChange(index)}
            />
            <label htmlFor={`taskCheckbox${index}`}></label>
            <p
              className={
                selectedTasks.includes(index) ? styles.completedTask : ""
              }
            >
              {task}
            </p>
            <img
              onClick={() => handleDeleteTask(index)}
              src="../../src/assets/trash.svg"
              alt=""
            />
          </ul>
        </section>
      ))}
    </div>
  );
}
