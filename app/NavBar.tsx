"use client";

import React from 'react';
import Link from 'next/link';
import { FaBug } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';


const NavBar = () => {

  const currentPath = usePathname();
  console.log(currentPath);

  const links: Array<any> = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/issues" }
  ]

  return (
    <nav className='flex space-x-6 border-b-2 mb-6 px-5 h-20 items-center'>
      <Link className='text-2xl' href="/"><FaBug /></Link>

      <ul className='flex space-x-6'>
        { 
          links.map(link => <Link key={ link.href } 
          // Same thing doing using Classname pakage (npm install classnames)
          // className={ `${ link.href === currentPath ? "text-zinc-900" : "text-zinc-500" } hover:text-zinc-800 transition-colors text-2xl` } 
          className={ classNames({
            "text-zinc-900": link.href === currentPath,
            "text-zinc-500": link.href !== currentPath,
            "hover:text-zinc-800 transition-colors text-2xl": true
          }) }
          href={ link.href } > { link.lable } </Link>) 
        }
      </ul>
    </nav>
  )
}


export default NavBar;