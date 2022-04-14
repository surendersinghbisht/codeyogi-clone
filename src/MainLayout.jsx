import React from 'react';
import Sidebar from './Sidebar';
import {Outlet} from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'
import {Link} from 'react-router-dom'

function MainLayout() {

const [sidebar, setSidebar] =React.useState(false);

const showSidebar=()=>{
  setSidebar(true);
}

  return (

  <div className="flex items-stretch  h-full grow">
    
    <div className='hidden sm:block'>
      <Sidebar  />
      
      </div>
   
      <div className="bg-gray-200 sm:p-20 p-12  grow">
   <GiHamburgerMenu onClick={showSidebar} className='sm:hidden block mb-8' />
   
         <Outlet />

         </div>
         {sidebar &&
         <div className=' absolute left-0 top-0'>
  <div className='   bg-gray-700 pr-10  '>
    <button className='font-bold text-lg text-white text-end  sm:hidden block ml-40' onClick={()=>setSidebar(false)}>X</button>
    <div className='flex flex-col space-y-4  py-4'>
    <h1 className='text-3xl text-white font-bold ml-6'>CODEYOGI</h1>
    <Link to="/assignments" className='hover:bg-gray-500 text-white text-xl ml-6'>Assignments</Link>
        <Link to="/lectures" className='hover:bg-gray-500 text-white text-xl ml-6'>Lectures</Link>
    <Link to="/Quiz" className='hover:bg-gray-500 text-white text-xl ml-6'>Quiz</Link>
    <Link to="/students"className='hover:bg-gray-500 text-white text-xl ml-6' >students</Link>
        <span className='h-72 mt-10'></span>
        <Link to="/profile" className='hover:bg-gray-500 text-white text-xl mt-10 ml-6 '> profile</Link>
      </div>
      </div></div>}
      </div>
  );
}

export default MainLayout;