import React from 'react'
import Link from 'next/link'
import { FaBug } from "react-icons/fa";

const NavBar = () => {

  const links: Array<any> = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/issues" }
  ]

  return (
    <nav className='flex space-x-6 border-b-2 mb-5 px-5 h-20 items-center'>
      <Link className='text-2xl' href="/"><FaBug /></Link>

      <ul className='flex space-x-6'>
        { links.map(link => <Link key={ link.href } className='text-zinc-500 hover:text-zinc-800 transition-colors text-2xl' href={ link.href } > { link.lable } </Link>) }
      </ul>
    </nav>
  )
}

export default NavBar