import styles from "./Navbar.module.css"

export function Navbar() {
  return (
    <div className={styles.logo}>
      <img src="../../src/assets/logo.svg" alt="" />
    </div>
  )
}
