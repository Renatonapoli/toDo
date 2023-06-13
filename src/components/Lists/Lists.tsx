import styles from "./Lists.module.css"

export function Lists() {
  return (
    <div className={styles.containerLists}>
      <header>
        <div className={styles.taskCreated}>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>
        <div className={styles.completed}>
          <p>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </header>

      <section>
        <ul>
          <input type="radio" name="" id="" />
          <title>Texto</title>
          <img src="" alt="" />
        </ul>
      </section>
    </div>
  )
}
