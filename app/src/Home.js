import React from 'react'
import BaseCard from './MiniCard/DataCard'
import BigCard from './Card/DataCard2';
import { first,third } from './Card/DataCard2';
import { second,fourth,fifth } from './MiniCard/DataCard';
import BannerLight from './Banner/BannerLight';
import BannerDark from './Banner/BannerDark';

export default function Home() {
  return (
    <>
     <BannerLight
                imgLink={"https://www.lego.com/cdn/cs/set/assets/blt402aa227cb8836b9/Holiday-Home-BTG-202211-Hero-Standard-Large.jpg?fit=crop&format=webply&quality=80&width=1600&height=500&dpr=1.5"}
                title={"Costruisci un regalo. Fai un regalo."}
                subtitle={"Per ogni regalo costruito e condiviso con l'hashtag #BuildToGive, doneremo un set LEGO® a un bambino bisognoso."}
                bannerLogoLink={"https://www.lego.com/cdn/cs/set/assets/blt4b4cbcab65ae22fe/RTW-logo-white.png"}/>

    <BigCard array={first}/>
    <BaseCard array={second}/>
    <BannerDark
                imgLink={"https://www.lego.com/cdn/cs/set/assets/bltd08f4803d627def6/Retiring-Home-202011-Hero01-Standard-Large.jpg?fit=crop&format=jpg&quality=80&width=1600&height=500&dpr=1"}
                title={"Ultima occasione"}
                subtitle={"Questi popolari set LEGO® tra poco non saranno più disponibili. Non lasciarteli sfuggire!"} />

    <BigCard array={third}/>
    <BaseCard array={fourth}/>
    <BaseCard array={fifth}/>
    </>
  )
}
