import { useState } from "react"
import styles from "./Lists.module.css"
import { Search } from "../Search/Search"

interface ListsProps {}

export function Lists(props: ListsProps) {
  const [tasks, setTasks] = useState<string[]>([])
  const [completedTasks, setCompletedTasks] = useState<number>(0)
  const [checkedTask, setCheckedTask] = useState<number | null>(null)
  const [lastCheckedTask, setLastCheckedTask] = useState<number | null>(null)

  function handleAddTask(task: string) {
    setTasks((prevTasks) => [...prevTasks, task])
  }

  function handleDeleteTask(index: number) {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks]
      newTasks.splice(index, 1)
      return newTasks
    })
    setCheckedTask((prevCheckedTask) => {
      if (prevCheckedTask === index) {
        return null
      }
      return prevCheckedTask
    })
    setCompletedTasks((prevCompletedTasks) =>
      prevCompletedTasks ? prevCompletedTasks - 1 : 0
    )
  }

  function handleTaskStatusChange(index: number) {
    if (checkedTask === index) {
      setCheckedTask(null)
      setCompletedTasks((prevCompletedTasks) => prevCompletedTasks - 1)
    } else {
      setCheckedTask(index)
      setCompletedTasks((prevCompletedTasks) => prevCompletedTasks + 1)
    }
  }

  function handleRadioClick(index: number) {
    if (index === lastCheckedTask) {
      setCheckedTask(null)
      setCompletedTasks((prevCompletedTasks) => prevCompletedTasks - 1)
      setLastCheckedTask(null)
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

      <>
        {tasks.map((task, index) => (
          <section key={index}>
            <ul>
              <input
                type="radio"
                name="taskRadio"
                id={`taskRadio${index}`}
                checked={index === checkedTask}
                onChange={() => handleTaskStatusChange(index)}
                onClick={() => handleRadioClick(index)}
              />
              <p className={index === checkedTask ? styles.completedTask : ""}>
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
      </>
    </div>
  )
}
