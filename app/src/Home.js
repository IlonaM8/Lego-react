import React from 'react'
import BaseCard from './MiniCard/DataCard'
import BigCard from './Card/DataCard2';
import { first,third } from './Card/DataCard2';
import { second,fourth,fifth } from './MiniCard/DataCard';

export default function Home() {
  return (
    <>
    <BigCard array={first}/>
    <BaseCard array={second}/>
    <BigCard array={third}/>
    <BaseCard array={fourth}/>
    <BaseCard array={fifth}/>
    </>
  )
}
