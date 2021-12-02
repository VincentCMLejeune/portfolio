import Header from "../../components/header/Header";

import styles from "./Details.module.css";

export default function DetailGarou() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>La carte du Loup Garou</h2>
      </div>
    </div>
  );
}
