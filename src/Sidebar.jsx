import React from 'react';
import {Link} from "react-router-dom";
import {CgProfile} from 'react-icons/cg'


function Sidebar(){
return(
  <div>

<div className=' sticky top-0 bg-gray-700 pr-10 h-screen '>
  <div className='flex flex-col space-y-4  py-4'>
  <h1 className='text-3xl text-white font-bold ml-6'>CODEYOGI</h1>
  <Link to="/assignments" className='hover:bg-gray-500 text-white text-xl ml-6'>Assignments</Link>
      <Link to="/lectures" className='hover:bg-gray-500 text-white text-xl ml-6'>Lectures</Link>
  <Link to="/Quiz" className='hover:bg-gray-500 text-white text-xl ml-6'>Quiz</Link>
  <Link to="/students"className='hover:bg-gray-500 text-white text-xl ml-6' >students</Link>
      <span className='h-72 mt-10'></span>

      <div className=' '>
      
      <Link to="/profile" className='hover:bg-gray-500 text-white text-xl mt-10 ml-6 '> profile</Link>
    </div>
    </div>
    </div></div>
);
}
 export default Sidebar;