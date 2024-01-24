"use client";

import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h3 className={styles.logo} onClick={() => router.push("https://maslado.com")}>
        Maslado
      </h3>
      <button className={styles.accountButton} onClick={() => router.push("https://app.maslado.com/login")}>
        Twoje Konto
      </button>
    </div>
  );
};

export default Navbar;
