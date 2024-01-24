import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.footerBody}>
        Masz pytania do naszego zespołu?<br></br> Skorzystaj z{" "}
        <Link href="https://app.maslado.com/contact">formularza kontaktowego</Link>, lub napisz email bezpośrednio na{" "}
        <span className={styles.brand}>kontakt@maslado.com</span>
      </p>
    </div>
  );
};

export default Footer;
