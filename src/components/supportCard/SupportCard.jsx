import styles from "./supportCard.module.css";

const SupportCard = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.cardTitle}>Pomoc techniczna 24/7</h2>
      <p className={styles.cardBody}>
        Rozumiemy, że praca fotografa to czasem nieprzewidywalny proces, który
        może wymagać wsparcia o każdej porze dnia i nocy. Dlatego jesteśmy tu,
        aby Ci pomóc, 24 godziny na dobę, 7 dni w tygodniu. Niezależnie od tego,
        czy masz pytania techniczne, potrzebujesz pomocy z konfiguracją, czy
        napotkasz na trudności w korzystaniu z aplikacji, nasz zespół służy
        wsparciem, gdy go potrzebujesz. Jesteśmy Twoim partnerem w każdym kroku
        Twojej przygody z naszą aplikacją, dbając o to, abyś mógł skupić się na
        tworzeniu wspaniałych fotografii, wiedząc, że możesz na nas polegać, gdy
        tylko tego potrzebujesz.
      </p>
    </div>
  );
};

export default SupportCard;
