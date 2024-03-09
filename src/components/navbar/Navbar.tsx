'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

import { usePathname } from 'next/navigation'


const Navbar = () => {
  const pathname = usePathname()
  const [navOpen, setNavOpen] = useState(false)
  const [showLogout, setShowLogout] = useState(false)

  const navButton = () => {
    setNavOpen(!navOpen)
  }

  const logout = () => {
    setShowLogout(!showLogout)
  }

  return (
    <nav className={`flex flex-col relative space-y-2 shadow-md h-full ${navOpen ? 'w-[272px] ' : 'w-20  transition-all ease-in-out delay-150 duration-1000'}`}>

      <div className={`h-[9%] p-5 flex  items-center ${navOpen ? 'justify-between' : 'flex-col-reverse justify-center mt-4 '}`}>
        <Link href="/" className={` ${navOpen ? 'w-[60%] justify-center' : 'w-full justify-start'} flex  space-x-3 h-[50px]  items-center '`}>
          <Image src='logo.svg' alt="Verisync Logo" width={35} height={35} />
          <h1 className={`font-bold text-2xl ${navOpen ? '' : 'hidden'}`}>
            Verisync
          </h1>
        </Link>
        <div className={`${navOpen ? 'rotate-180 ' : 'mb-3 '}  w-8 h-8 rounded-full flex justify-center items-center bg-[#E9E8FF] cursor-pointer `} onClick={navButton}>
          <Image src='/arrow-left.svg' alt="" width={30} height={30} />
        </div>
      </div>

      <div className='flex flex-col space-y-3 w-full p-5 h-[83%]'>
        <Link href="/" className={` ${pathname === '/' ? 'bg-[#F6F6F9] ' : ''} w-full p-3 hover:bg-[#e1e1e6] rounded-xl h-10 border-2 flex justify-between items-center  `}>
          <div className='flex justify-start space-x-3 items-center text-[#73729B]'>
            <Image src='/plus-icon.svg' alt="" width={20} height={20} />
            <h1 className={`${navOpen ? '' : 'hidden'} text-sm ${pathname === '/' ? 'font-bold' : 'font-normal'}`}>Get started</h1>
          </div>
          <div className={` ${pathname === '/' ? 'w-2 h-2 rounded-full bg-[#7B73FE]' : 'hidden'} ${navOpen ? '' : 'hidden'} `}></div>
        </Link>
        <Link href="/dashboard" className={` ${pathname === '/dashboard' ? 'bg-[#F6F6F9] ' : ''} w-full p-3 hover:bg-[#e1e1e6] rounded-xl h-10 border-2 flex justify-between items-center  `}>
          <div className='flex justify-start space-x-3 items-center text-[#73729B]'>
            <Image src='/home-icon.svg' alt="" width={20} height={20} />
            <h1 className={`${navOpen ? '' : 'hidden'} text-sm ${pathname === '/dashboard' ? 'font-bold' : 'font-normal'}`}>Dashboard</h1>
          </div>
          <div className={` ${pathname === '/dashboard' ? 'w-2 h-2 rounded-full bg-[#7B73FE]' : 'hidden'} ${navOpen ? '' : 'hidden'} `}></div>
        </Link>
        <Link href="/flow" className={` ${pathname === '/flow' ? 'bg-[#F6F6F9] ' : ''} w-full p-3 hover:bg-[#e1e1e6] rounded-xl h-10 border-2 flex justify-between items-center  `}>
          <div className='flex justify-start space-x-3 items-center text-[#73729B]'>
            <Image src='/workflow-icon.svg' alt="" width={20} height={20} />
            <h1 className={`${navOpen ? '' : 'hidden'} text-sm ${pathname === '/flow' ? 'font-bold' : 'font-normal'}`}>Flow</h1>
          </div>
          <div className={` ${pathname === '/flow' ? 'w-2 h-2 rounded-full bg-[#7B73FE]' : 'hidden'} ${navOpen ? '' : 'hidden'} `}></div>
        </Link>
        <Link href="/syncs" className={` ${pathname === '/syncs' ? 'bg-[#F6F6F9] ' : ''} w-full p-3 hover:bg-[#e1e1e6] rounded-xl h-10 border-2 flex justify-between items-center  `}>
          <div className='flex justify-start space-x-3 items-center text-[#73729B]'>
            <Image src='/syncs-icon.svg' alt="" width={20} height={20} />
            <h1 className={`${navOpen ? '' : 'hidden'} text-sm ${pathname === '/syncs' ? 'font-bold' : 'font-normal'}`}>Syncs</h1>
          </div>
          <div className={` ${pathname === '/syncs' ? 'w-2 h-2 rounded-full bg-[#7B73FE]' : 'hidden'} ${navOpen ? '' : 'hidden'} `}></div>
        </Link>
        <Link href="/integration" className={` ${pathname === '/integration' ? 'bg-[#F6F6F9] ' : ''} w-full p-3 hover:bg-[#e1e1e6] rounded-xl h-10 border-2 flex justify-between items-center  `}>
          <div className='flex justify-start space-x-3 items-center text-[#73729B]'>
            <Image src='/flash-icon.svg' alt="" width={20} height={20} />
            <h1 className={`${navOpen ? '' : 'hidden'} text-sm ${pathname === '/integration' ? 'font-bold' : 'font-normal'}`}>Integrations</h1>
          </div>
          <div className={` ${pathname === '/integration' ? 'w-2 h-2 rounded-full bg-[#7B73FE]' : 'hidden'} ${navOpen ? '' : 'hidden'} `}></div>
        </Link>

      </div>
      <div className={`'w-full h-[8%] border-t-[1px] border-[#E9E8FF] shadow-sm flex justify-between items-center p-5`}>
        <div className={`${navOpen ? 'w-[80%]' : 'w-full'} flex justify-start  space-x-5 items-center`}>
          <div className='w-10 h-10 rounded-full bg-[#E9E8FF] flex justify-center items-center'>
            <h1>VL</h1>
          </div>
          <div className={`${navOpen ? '' : 'hidden'} flex flex-col space-y-1`}>
            <h1 className={`text-[#4B4A69] font-[500] text-[14px]`}>Verisync Ltd</h1>
            <h1 className={`${showLogout ? 'hidden' : 'text-[12px] font-normal text-[#73729B]'} `}>Mayowa Adegbuyi</h1>
            <button className={`${showLogout ? 'text-[12px] font-bold text-red-600 hover:bg-red-600 hover:text-white flex justify-center items-center rounded-lg p-1 shadow' : 'hidden'} `}>Logout</button>
          </div>
        </div>

        <div className={`${navOpen ? '' : 'hidden'} w-10 h-10 rounded-full  cursor-pointer flex justify-center items-center bg-transparent hover:bg-[#E9E8FF]`} onClick={logout}>
          <Image src='/arrow-down.svg' alt="" width={30} height={30} />

        </div>
      </div>
    </nav >
  )
}

export default Navbar