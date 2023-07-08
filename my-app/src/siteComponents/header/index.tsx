"use client"
import { Input } from "@/components/ui/input"
import { CiSearch } from 'react-icons/ci'
import { CgShoppingCart } from 'react-icons/cg'
import Image from "next/image"
import Link from "next/link"
import { MdProductionQuantityLimits } from "react-icons/md"
import { FaChild } from "react-icons/fa"
import { FaMale } from "react-icons/fa"
import { FaFemale } from "react-icons/fa"
import { useState } from "react"




export function InputDemo() {
  return
}
const Header = () => {
  
  
  return (
    <nav className=" sticky top-0 bg-white w-full z-[999] h-[60px]">
      <div className="md:mb-8 md:mt-3  mb-4 mt-4 md:mx-24 mx-10 pt-3 ">
        <div className="flex items-center justify-between ">
          <Link href="/"><Image src="/Logo.jpg" alt=""  height={19} width={150} /></Link>
          <div className="list xl:gap-12 lg:gap-5 lg:flex hidden">
            <Link href="/Female"  >Female</Link>
            <Link href="/Male" >Male</Link>
            <Link href="/Kids" >Kids</Link>
            <Link href="/Allproducts" >All Products</Link>
          </div>


          <div className="search-bar relative  lg:flex hidden">
            <Input placeholder="What you looking for" className=" text-xs relative h-[30px] pl-[30px]" />
            <div className=" absolute top-2 left-2 "> <CiSearch /></div>
          </div>

          <div className="cart flex p-[12px] rounded-full w-10 h-10 bg-gray-200 relative cursor-pointer 
          transition ease-in-out delay-200 hover:translate-y-1 hover:scale-110 lg:visible ">
            <CgShoppingCart />

            <div className="visible ">
              <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar" type="button" className="inline-flex items-center -mt-2 -ml-1 text-sm text-gray-500 rounded-lg lg:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75
                 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>

              <aside id="default-sidebar" className="hidden fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0:hidden" aria-label="Sidebar">
                <div className="h-full p-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                  <ul className="space-y-2">
                    <li>
                      <Link href="/">
                        <Image src="/logo.jpg" height={35} width={150} alt='logo' />
                      </Link>
                    </li>
                    <li className=' font-[500]'><button className='relative mt-5 mr-3 bg-[#f1f1f1] lg:flex rounded-full p-[12px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                      <div className="text-[18px] "><CgShoppingCart /></div>
                      <span className='absolute top-[-4px] right-0 bg-[#f02d34] rounded-full text-[13px] h-[18px] w-[18px] text-white'>0</span>
                    </button><Link href="#" className='text-[20px]'>Cart</Link></li>
                    <li className='font-[500]'>
                      <button className='relative mt-2 mr-3 bg-[#f1f1f1] lg:flex rounded-full p-[12px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                        <div className='text-[18px] ' >   <MdProductionQuantityLimits /></div> </button>
                      <Link href="/products" className='text-[20px]'>All Products</Link></li>
                    <li className=' font-[500]'>
                      <button className='relative mt-2 mr-3 bg-[#f1f1f1] lg:flex rounded-full p-[12px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                        <div className="text-[18px] "> <FaChild /></div></button>
                      <Link href="#" className='text-[20px]'>Kids</Link></li>
                    <li className=' font-[500]'>
                      <button className='relative mt-2 mr-3 bg-[#f1f1f1] lg:flex rounded-full p-[12px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                        <div className='text-[18px] '>  <FaMale /> </div></button>
                      <Link href="/male" className='text-[20px]'>Male</Link></li>
                    <li className=' font-[500]'>
                      <button className='relative mt-2 mr-3 bg-[#f1f1f1] lg:flex rounded-full p-[12px] transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110'>
                        <div className='text-[18px] '>
                          <FaFemale /></div></button>
                      <Link href="/female" className='text-[20px]'>Female</Link></li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>

        </div>
      </div>
    </nav>





  )
}
export default Header;