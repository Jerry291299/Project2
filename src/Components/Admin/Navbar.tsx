import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

type Props = {
  handleLogout:()=>void
}

const Navbar = ({handleLogout}: Props) => {
  
  
  return (
   <>
<>
<>
  
  <aside
    id="default-sidebar"
    className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
    <div className='pt-[50px] pl-[20px]'>
        <p className='text-white font-bold text-[30px] pb-[90px]'>Admin Page</p>
    </div>

      <ul className="space-y-2 font-medium">
        <li className='py-[20px] '>
            <NavLink className="text-white font-bold text-[25px] hover:border-2 rounded-xl px-[25px] py-[15px]  hover:text-black hover:bg-white" to="/Dashboard/list">Dashboard</NavLink>
        </li>
        <li className='py-[20px]'>
            <NavLink className="text-white font-bold text-[25px] hover:border-2 rounded-xl px-[25px] py-[15px]  hover:text-black hover:bg-white" to="/Dashboard/Add">Add product</NavLink>
        </li>
        <li className='py-[20px]'>
            <NavLink className="text-white font-bold text-[25px] hover:border-2 rounded-xl px-[25px] py-[15px]  hover:text-black hover:bg-white" to="/">Trang chủ</NavLink>
        </li>
        <li className='py-[20px]'>
            <NavLink className="text-white font-bold text-[25px] hover:border-2 rounded-xl px-[25px] py-[15px]  hover:text-black hover:bg-white" to="/">
              <button onClick={handleLogout}>Logout</button>
            </NavLink>
        </li>

        {/* <li>
        <NavLink className="text-white font-bold text-[25px] " to="/Dashboard/Add">Add product</NavLink>
        </li>
        <li>
        <NavLink className="text-white font-bold text-[25px] " to="/Dashboard/Add">Add product</NavLink>
        </li>
        <li>
        <NavLink className="text-white font-bold text-[25px] " to="/Dashboard/Add">Add product</NavLink>
        </li>
        <li>
        <NavLink className="text-white font-bold text-[25px] " to="/Dashboard/Add">Add product</NavLink>
        </li>
        <li>
        <NavLink className="text-white font-bold text-[25px] " to="/Dashboard/Add">Add product</NavLink>
        </li> */}
      </ul>
    </div>
  </aside>
  <div className="p-4 sm:ml-64">
  </div>
</>

</>
   
   
   
   
   </>
  )
}

export default Navbar