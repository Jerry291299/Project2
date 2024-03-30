import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import anh1 from './anh/Frame 895.png'
import anh2 from './anh/Frame 896.png'
import anh3 from './anh/Frame 897.png'
import anh4 from './anh/Frame 919.png'
import anh5 from './anh/Frame 894.png'
import anh6 from './anh/Frame 922.png'
import anh7 from './anh/Frame 911.png'
import anh16 from "./anh/anh16.png"
import anh15 from "./anh/anh15.png"
import anh13 from "./anh/anh13.png"
import anh12 from "./anh/anh12.png"
type Props = {}

const Detail = (props: Props) => {
  return (
    <>
    <div className='container mx-auto w-[1400px] pt-[100px]'>
        <div className='container mx-auto w-[1300px] flex' >
        <div className=''>
            <img className='mb-[20px]' src={anh1} alt="" />
            <img className='mb-[20px]' src={anh2} alt="" />
            <img className='mt-[10px]' src={anh3} alt="" />
            <img className='mt-[10px]' src={anh4} alt="" />
        </div>
        <div className='ml-[40px]'>
            <img className='w-[100%]' src={anh5} alt="" />
        </div>
        <div className='ml-[70px]'>
            <h1 className='text-3xl font-bold pb-[20px]'>Havic HV G-92 Gamepad</h1>
            <img src={anh6} alt="" />
            <p className='pt-[20px] text-[30px] pb-[20px]'>$192.00</p>
            <p className='pb-[30px]'>PlayStation 5 Controller Skin High quality vinyl with air<br/> channel adhesive for easy bubble free install & mess<br/> free removal Pressure sensitive.</p>
            <div className='foot pt-[100px] mb-[10px] border-t-2 border-black justify-between flex'>
            <form
                className='mt-[1px]'
                style={{
                  border: "1px solid grey",
                  width: "max-content",
                  borderRadius: "9px",
                }}>
                <div className='relative flex items-center max-w-[8rem] '>
                  <button
                    type='button'
                    id='decrement-button'
                    data-input-counter-decrement='quantity-input'
                    className='bg-white-100 dark:bg-white-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'>
                    <svg
                      className='w-3 h-3 text-gray-900 dark:text-black'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 18 2'>
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M1 1h16'
                      />
                    </svg>
                  </button>
                  <input
                    value={1}
                    type='text'
                    id='quantity-input'
                    data-input-counter=''
                    aria-describedby='helper-text-explanation'
                    className='bg-white-50 border-x-0 border-gray-300 h-11 text-center text-black-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  />
                  <button
                    type='button'
                    id='increment-button'
                    data-input-counter-increment='quantity-input'
                    className='bg-[#DB4444] dark:bg-red-700 dark:hover:bg-gray-600 dark:border-red-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none'>
                    <svg
                      className='w-3 h-3 text-white dark:text-white'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 18 18'>
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 1v16M1 9h16'
                      />
                    </svg>
                  </button>
                </div>
              </form>
              <button className='border-2 border-red dark:bg-red-700 bg-red rounded-lg py-[2px] px-[50px] text-white'>
                Buy now
              </button>
              
            </div>
            <img src={anh7} alt="" />
        </div>
        </div>
        <div className='pt-[90px]'>
        <h1 className="text-4xl font-bold mb-[10px]">Other Products</h1>
        <div className='pt-[10px] grid grid-cols-4 gap-4'>
        <div className="pt-[40px]">
        <img className="w-[100%]" src={anh16} alt="" />
        <div className="flex  ">
          <h2 className="text-[18px] font-bold">Round Dining Table</h2>
          <p className="text-[20px] font-bold pl-[110px]">$55</p>
        </div>
        <p>Bed table</p>
        <button className="border-2 border-black rounded-lg py-[5px] px-[125px] mt-[10px]">Add to cart</button>
      </div>
      <div className="pt-[40px]">
        <img className="w-[100%]" src={anh15} alt="" />
        <div className="flex  ">
          <h2 className="text-[18px] font-bold">Right Hand Fabric</h2>
          <p className="text-[20px] font-bold pl-[110px]">$55</p>
        </div>
        <p>Desk decor</p>
        <button className="border-2 border-black rounded-lg py-[5px] px-[125px] mt-[10px]">Add to cart</button>
      </div>
      <div className="pt-[40px]">
        <img className="w-[100%]" src={anh13} alt="" />
        <div className="flex  ">
          <h2 className="text-[18px] font-bold">Velvet Wingback Chair</h2>
          <p className="text-[20px] font-bold pl-[110px]">$55</p>
        </div>
        <p>Basket</p>
        <button className="border-2 border-black rounded-lg py-[5px] px-[125px] mt-[10px]">Add to cart</button>
      </div>
      <div className="pt-[40px]">
        <img className="w-[100%]" src={anh12} alt="" />
        <div className="flex  ">
          <h2 className="text-[18px] font-bold">Velvet Wingback Chair</h2>
          <p className="text-[20px] font-bold pl-[110px]">$55</p>
        </div>
        <p>Chair</p>
        <button className="border-2 border-black rounded-lg py-[5px] px-[125px] mt-[10px]">Add to cart</button>
      </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Detail