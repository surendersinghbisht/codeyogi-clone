import React from 'react';
import {Link} from "react-router-dom";



function NotFound() {
  return (

      <div className=' flex h-screen bg-yellow-500 '>
    <h1 className="text-red-500 text-5xl  ">go back</h1>

    <Link to="/lectures">go back to lectures</Link>
    </div>
  );
}

export default NotFound;