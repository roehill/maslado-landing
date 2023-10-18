import styles from "./promoCards.module.css";

const PromoCards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>intuicyjny interfejs</h3>
        <p className={styles.cardBody}>
          Tworzenie i udostępnianie galerii zdjęć stało się prostsze niż
          kiedykolwiek wcześniej. Nasza aplikacja umożliwia Ci prezentację
          swojej pracy w sposób, który wzbudzi zachwyt Twoich klientów. Dzięki
          intuicyjnemu interfejsowi, możesz łatwo organizować zdjęcia i
          udostępniać je w przystępny sposób, przyciągając uwagę potencjalnych
          klientów.
        </p>
      </div>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>transparentność</h3>
        <p className={styles.cardBody}>
          Oferujemy narzędzie do obliczania kosztów ujęć i wydruków, które
          pozwala Tobie i Twoim klientom zrozumieć, ile będą musieli zapłacić za
          wybrane ujęcia i wydruki. Niech brak niejasności finansowych stanie
          się Twoim atutem, zachęcając klientów do większej liczby zakupów.
        </p>
      </div>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>efektywna komunikacja</h3>
        <p className={styles.cardBody}>
          Nasza aplikacja skraca drogę od wyboru zdjęć do finalnego produktu. Po
          dokonaniu selekcji przez klienta, możesz błyskawicznie podjąć pracę
          nad zdjęciami, dostosowując je do jego oczekiwań. Dzięki temu szybko
          dostarczasz gotowe prace, zadowalając klientów i budując swoją renomę
          jako profesjonalny fotograf.
        </p>
      </div>
    </div>
  );
};

export default PromoCards;
