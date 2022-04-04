import React from 'react';


function Card(props) {
  return (
   <div className='h-40 w-40 shadow-md bg-white'>
     {props.children} 
    </div>

  );
}

export default Card;