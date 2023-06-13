import styles from "./Lists.module.css"

import { Search } from "../Search/Search"

export function Lists() {
  return (
    <div className={styles.containerLists}>
      <Search />
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
          <p>
            Integer urna interdum massa libero auctor neque turpis turpis
            semper. Duis vel sed fames integer.
          </p>
          <img src="../../src/assets/trash.svg" alt="" />
        </ul>
      </section>
    </div>
  )
}
