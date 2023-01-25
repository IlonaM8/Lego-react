import React from "react";
import BaseCard from "./MiniCard/DataCard";
import BigCard from "./Card/DataCard2";
import { first, third } from "./Card/DataCard2";
import { second, fourth, fifth } from "./MiniCard/DataCard";

export default function Home() {
  return (
    <>
      <BigCard array={first} title="Consigliati per te" />
      <BaseCard array={second} title="Tendenze attuali" />
      <BigCard array={third} title="Set in evidenza" />
      <BaseCard array={fourth} title="Nuovi giochi" />
      <BaseCard array={fifth} title="Leggi tutto" />
    </>
  );
}
