import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.footerBody}>
        Masz pytania do naszego zespołu?<br></br> Skorzystaj z formularza
        kontaktowego, lub napisz email bezpośrednio na{" "}
        <span className={styles.brand}>support@maslado.com</span>
      </p>
    </div>
  );
};

export default Footer;
