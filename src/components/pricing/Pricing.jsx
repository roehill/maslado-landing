"use client";

import { useRouter } from "next/navigation";
import styles from "./pricing.module.scss";
import { FaCircleCheck } from "react-icons/fa6";

const Pricing = () => {
  const router = useRouter();

  const PRICING = [
    {
      id: 1,
      title: "Starter",
      price: "0",
      discount: null,
      functionalities: [
        "3 darmowe galerie na start",
        "wszystkie dostępne narzędzia",
        "limit 500 zdjęć",
        "wsparcie społeczności",
      ],
      actionButton: {
        title: "Załóż konto",
        redirect: "https://app.maslado.com/registration",
      },
    },
    {
      id: 2,
      title: "Pojedyncza",
      price: "9",
      discount: null,
      functionalities: ["1 galeria", "wszystkie dostępne narzędzia", "brak limitu zdjęć", "support 24/7"],
      actionButton: {
        title: "Kup teraz",
        redirect: "/packages",
      },
    },
    {
      id: 3,
      title: "Pakiet 10",
      price: "72",
      discount: "-20%",
      functionalities: ["10 galerii", "wszystkie dostępne narzędzia", "brak limitu zdjęć", "support 24/7"],
      actionButton: {
        title: "Kup teraz",
        redirect: "/packages",
      },
    },
    {
      id: 4,
      title: "Pakiet 30",
      price: "189",
      discount: "-30%",
      functionalities: ["30 galerii", "wszystkie dostępne narzędzia", "brak limitu zdjęć", "support 24/7"],
      actionButton: {
        title: "Kup teraz",
        redirect: "/packages",
      },
    },
  ];

  return (
    <div className={styles.container}>
      <h2>Cennik galerii</h2>
      <p>
        Rozpocznij swoją przygodę z Maslado, na start dostaniesz 3 darmowe galerie. Dodatkowe pakiety możesz dokupić w
        dowolnym momencie.
      </p>
      <div className={styles.pricingCards}>
        {PRICING.map((pricing) => (
          <div className={styles.pricingCard} key={pricing.id}>
            {pricing.discount && (
              <div className={styles.discount}>
                <p className={styles.discountAmount}>{pricing.discount}</p>
              </div>
            )}
            <h3>{pricing.title}</h3>
            <h4>
              {pricing.price} zł <span className={styles.brutto}>brutto</span>
            </h4>
            <div className={styles.functionalities}>
              {pricing.functionalities.map((functionality) => (
                <div key={functionality} className={styles.functionality}>
                  <div className={styles.icon}>
                    <FaCircleCheck size="20px" color="#0096EA" />
                  </div>
                  <p>{functionality}</p>
                </div>
              ))}
            </div>
            <button onClick={() => router.push(pricing.actionButton.redirect)} className={styles.callToAction}>
              {pricing.actionButton.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
