import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerBody}>
        <p className={styles.contact}>
          Masz pytania do naszego zespołu?<br></br> Skorzystaj z{" "}
          <Link className={styles.s} href="https://app.maslado.com/contact">
            formularza kontaktowego
          </Link>
          , lub napisz email bezpośrednio na <span className={styles.brand}>kontakt@maslado.com</span>
        </p>
        <div className={styles.links}>
          {" "}
          <p>2024 © Maslado. </p>
          <Link href="/terms-and-conditions/" className={styles.link}>
            Regulamin
          </Link>
          <Link href="/privacy-policy/" className={styles.link}>
            Polityka prywatności
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
