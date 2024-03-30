import React from 'react'
import ban from './anh/Image.jpg'
type Props = {}

const Banner = (props: Props) => {
  return (
    <>
    <div className='container mx-auto w-[1400px]'>
        <div className='flex gap-4 pt-[130px]'>
          <div className='text1 w-[750px]'>
            <p className='text-5xl'>Transform Your Home with Our Stunning</p>
            <p className='pt-[15px] font-bold text-5xl'>Furniture Collection</p>
          </div>
          <div className='text2 w-[650px]'>
            <p className='text-lg'>Welcome to our furniture store, where we believe that a well-furnished home is a happy home. We offer a wide selection of high-quality furniture for every room in your home, from cozy sofas and elegant dining sets to stylish office desks and comfortable beds.</p>
            <div className='nút text-lg flex gap-5 pt-[30px]'>
              <button className='border-2 border-black bg-black text-white py-[10px] px-[20px] rounded-xl'>Shop now</button>
              <button className='border-2 border-black py-[10px] px-[20px] rounded-xl'>Learn More</button>
            </div>
          </div>
        </div>

        <div className="bannerimg pt-[70px] pb-[120px]">
          <img className='w-full' src={ban} alt="" />
        </div>
        </div>
    </>
  )
}

export default Banner