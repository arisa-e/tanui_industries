import { NavLinks } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 px-10">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                {NavLinks.map((link, i)=>(
                    <ul tabIndex={0} key={i} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='p-3'>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    </ul>
                ))}
            </div>
            <div className="btn btn-ghost text-xl">
                <Link href='/'>
                    Tanui Industries
                </Link>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            {NavLinks.map((link, i)=>(
                <ul tabIndex={0} key={i} className='menu menu-horizontal px-1'>
                    <li>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                </ul>
            ))}
        </div>
    </div>
  )
}

export default NavBar