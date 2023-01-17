import React from 'react'
import MobileNavbarWhite from './Nav-mobile/MobileNavbarWhite'
import YellowNav from './Nav-yellow/YellowNav'
import WhiteBar from './White-bar/WhiteBar'

export default function Header() {
  return (
    <div>
         <WhiteBar />
         <YellowNav />
         <MobileNavbarWhite />
    </div>
  )
}
