"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import PromoCards from "@/components/promoCards/PromoCards";
import SupportCard from "@/components/supportCard/SupportCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <PromoCards />
      <SupportCard />
    </div>
  );
}
