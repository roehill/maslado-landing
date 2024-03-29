import Link from "next/link";
import RegisterForm from "../registerForm/RegisterForm";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.heroImage}>
        <div className={styles.image}></div>
      </div>
      <div className={styles.heroTextSmall}>
        <h4 className={styles.heroTextSmallParagraph}>
          Wybij się z tłumu jako profesjonalny fotograf! Dołącz do Maslado i zyskaj dostęp do narzędzi do zarządzania,
          prezentacji i zarabiania na swojej pasji. Załóż konto już teraz i rozpocznij swoją niesamowitą podróż
          fotograficzną z nami!
        </h4>
        <Link href="https://app.maslado.com/registration" className={styles.registerButton}>
          Zarejestruj się
        </Link>
      </div>
      <div className={styles.heroText}>
        <div className={styles.register}>
          <RegisterForm />
        </div>
        <div className={styles.heroParagraph}>
          <p>
            Jesteś fotografem, który pragnie usprawnić prowadzony przez siebie biznes?{" "}
            <span className={styles.brand}>Maslado</span> to Twój sposób na rewolucję w metodzie komunikacji z
            klientami. Oferujemy Ci platformę, dzięki której możesz bezproblemowo prezentować swoje galerie,
            umożliwiając klientom wybór i zakup swoich ulubionych zdjęć w łatwy i przejrzysty sposób. Nasza zintegrowana
            kalkulacja cen eliminuje trudności związane z określaniem kosztów ujęć i wydruków, zapewniając płynną i
            przejrzystą transakcję.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
