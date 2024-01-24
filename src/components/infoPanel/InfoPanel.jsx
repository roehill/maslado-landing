import styles from "./infoPanel.module.css";

const InfoPanel = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className={styles.message}>
          Aplikacja Maslado znajduje się obecnie w fazie testowej. Wszystkie konta demo oraz galerie zostaną usunięte po
          jej zakończeniu.
        </p>
        <button className={styles.button} onClick={props.close}>
          Zrozumiałem
        </button>
      </div>
    </div>
  );
};

export default InfoPanel;
