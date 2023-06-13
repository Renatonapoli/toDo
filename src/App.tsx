import { Navbar } from "./components/Navbar/Navbar"
import { Lists } from "./components/Lists/Lists"

import styles from "./App.module.css"

import "./global.css"

export function App() {
  return (
    <div>
      <Navbar />
      <main className={styles.containerLists}>
        <Lists />
      </main>
    </div>
  )
}
