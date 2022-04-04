import React from 'react';
import {Link} from "react-router-dom";

function Sidebar(){
return(

<div className=' sticky top-0 bg-gray-700 flex flex-col space-y-4 h-screen    py-4 w-60 '>
  <h1 className='text-3xl text-white font-bold ml-6'>CODEYOGI</h1>
  <Link to="/assignments" className='hover:bg-gray-500 text-white text-xl ml-6'>Assignments</Link>
      <Link to="/lectures" className='hover:bg-gray-500 text-white text-xl ml-6'>Lectures</Link>
      
      <Link to="/Quiz" className='hover:bg-gray-500 text-white text-xl ml-6'>Quiz</Link>
     
      <span className='h-72 mt-10'></span>
      
      <Link to="/profile" className='hover:bg-gray-500 text-white text-xl mt-10 ml-6 '>profile</Link>
    </div>
);
}
 export default Sidebar;