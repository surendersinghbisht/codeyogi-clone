import React from 'react';
import Sidebar from './Sidebar';
import {Outlet} from "react-router-dom";


function MainLayout() {
  return (

  <div className="flex items-stretch  h-full grow">
      <Sidebar />
     
      <div className="bg-gray-200 p-20 grow">
    
         <Outlet />
     
         </div>

  </div>

  );
}

export default MainLayout;