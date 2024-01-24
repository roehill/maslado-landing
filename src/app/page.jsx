"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import PromoCards from "@/components/promoCards/PromoCards";
import SupportCard from "@/components/supportCard/SupportCard";
import InfoPanel from "@/components/infoPanel/InfoPanel";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(true);

  const closeInfoPanel = () => {
    console.log("zamknij");
    setInfo(false);
  };

  return (
    <div className={styles.container}>
      <Header />
      {info ? <InfoPanel close={closeInfoPanel} /> : ""}
      <PromoCards />
      <SupportCard />
    </div>
  );
}
