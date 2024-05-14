"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import PromoCards from "@/components/promoCards/PromoCards";
import SupportCard from "@/components/supportCard/SupportCard";
import Pricing from "@/components/pricing/Pricing";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Pricing />
      <PromoCards />
      <SupportCard />
    </div>
  );
}
