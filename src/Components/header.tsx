import React from 'react'
import Facebook from './anh/Facebook.png'
import Global from './anh/global.png'
import heart from './anh/heart.png'
import image from './anh/Image.jpg'
import noti from './anh/notification.png'
import shoppingcard from './anh/shopping-cart.png'
import insta from './anh/Instagram.png'
import link from './anh/LinkedIn.png'
import twitter from './anh/Twitter.png'
import nguoi from './anh/user.png'
import logo from './anh/Ddsgnr Library.png'
import { NavLink } from 'react-router-dom'
type Props = {}

const Header = (props: Props) => {
  return (

    <>
    {/* <button className='border-4'><NavLink to="/Dashboard">nút bẩm tạm sang admin</NavLink></button> */}
    <div className='container mx-auto w-[1400px]'>
      
      <div className='up py-[15px] flex justify-between font-medium'>
        <div className='trái flex'>
          <p className='border-r-2 border-black px-[20px]'>Phone Number: 956 742 455 678</p>
          <p className='px-[20px]'>Email:info@ddsgnr.com</p>
        </div>

        <div className='phải flex gap-3'>
          <div className='icon flex pr-[150px] gap-4'>
            <img src= {Facebook} alt=""/>
            <img src={insta} alt=""/>
            <img src={twitter} alt=""/>
            <img src={link} alt=""/>
          </div>

          <div className='flex'>
          <img className='scale-[0.9] pr-[10px]' src={Global} alt=""/>
          <p>English</p>
          </div>

          <div className='flex'>
          <img className='scale-[0.9] pl-[30px] pr-[10px]' src={nguoi} alt=""/>
          <NavLink to="/login"><p>Sign in</p></NavLink>
          
          </div>
        </div>
        </div>




      <div className='down flex justify-between border-y-2 py-[12px] border-black'>
        <img src={logo} alt=""/>
        <div className='right flex'>
          <div className="text flex gap-14 pt-[7px] text-lg">
            <a href='' className='hover:border-b-2 border-black'>Home</a>
            <a href='' className='hover:border-b-2 border-black'>Products</a>
            <a href='' className='hover:border-b-2 border-black'>About Us</a>
            <a href='' className='hover:border-b-2 border-black'>Contact</a>
          </div>




          <div className="search px-[30px]">
          <div className="relative">
  <input
    type="text"
    className="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
    placeholder="search..."
  />
  <svg
    className="w-4 h-4 absolute right-[10px] top-3.5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
</div>

          </div>

          <div className="icon2 flex gap-10">
            <div className=''>
              <img className='pl-[15px]' src={heart} alt="" />
              <p>Wishlist</p>
            </div>
            <div className=''>
              <img className='pl-[3px]' src={shoppingcard} alt="" />
              <p>Cart</p>
            </div>
            <div className=''>
               <img className='pl-[25px]' src={noti} alt="" />
               <p>Notification</p>
            </div>
          </div>





        </div>
      </div>



    </div>
    </>


    )
}

export default Header