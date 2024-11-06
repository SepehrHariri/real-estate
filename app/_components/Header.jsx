import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
      <Image src={'/th.jpeg'} width={150} height={150} alt='logo'/>
      <ul className='hidden md:flex gap-10'>
        <li>For Sale</li>
        <li>For Rent</li>
        <li>Agent Finder</li>
      </ul>
    </div>
  )
}

export default Header
