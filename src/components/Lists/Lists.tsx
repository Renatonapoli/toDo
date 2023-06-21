import styles from "./Lists.module.css";
import ClipboardImage from "../../assets/Clipboard.svg";
import TarshImagem from "../../assets/trash.svg";

import { useState } from "react";
import { Search } from "../Search/Search";
import { v4 as uuid } from "uuid";

interface ListsProps {
  title: string;
}

export function Lists(props: ListsProps) {
  const { title } = props;
  const [tasks, setTasks] = useState<{ id: string; name: string }[]>([]);
  const [completedTasks, setCompletedTasks] = useState<number>(0);
  const [selectedTasks, setSelectedTasks] = useState<string[]>([]);

  function handleAddTask(task: string) {
    const newTask = { id: uuid(), name: task };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleDeleteTask(taskId: string) {
    const deletedTask = tasks.find((task) => task.id === taskId);

    if (!deletedTask) {
      return;
    }

    const isCompleted = selectedTasks.includes(taskId);

    if (isCompleted) {
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks > 0 ? prevCompletedTasks - 1 : 0
      );
    }

    setTasks((prevTasks) => {
      const newTasks = prevTasks.filter((task) => task.id !== taskId);
      return newTasks;
    });

    setSelectedTasks((prevSelectedTasks) =>
      prevSelectedTasks.filter((taskId) => taskId !== deletedTask.id)
    );
  }

  function handleTaskStatusChange(taskId: string) {
    if (selectedTasks.includes(taskId)) {
      setSelectedTasks((prevSelectedTasks) =>
        prevSelectedTasks.filter((prevTaskId) => prevTaskId !== taskId)
      );
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks > 0 ? prevCompletedTasks - 1 : 0
      );
    } else {
      setSelectedTasks((prevSelectedTasks) => [...prevSelectedTasks, taskId]);
      setCompletedTasks((prevCompletedTasks) => prevCompletedTasks + 1);
    }
  }

  return (
    <div className={styles.containerLists}>
      <Search onAddTask={handleAddTask} />
      <h1 className={styles.title}>{title}</h1>
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

      {tasks.length === 0 ? (
        <ul className={styles.zeroList}>
          <img src={ClipboardImage} alt="" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </ul>
      ) : null}

      {tasks.map((task) => (
        <section key={task.id}>
          <ul>
            <input
              type="checkbox"
              name={`taskRadio${task.id}`}
              id={`taskRadio${task.id}`}
              className={styles.radio}
              checked={selectedTasks.includes(task.id)}
              onChange={() => handleTaskStatusChange(task.id)}
            />
            <label htmlFor={`taskCheckbox${task.id}`}></label>
            <p
              className={
                selectedTasks.includes(task.id) ? styles.completedTask : ""
              }
            >
              {task.name}
            </p>
            <img
              onClick={() => handleDeleteTask(task.id)}
              src={TarshImagem}
              alt=""
            />
          </ul>
        </section>
      ))}
    </div>
  );
}
