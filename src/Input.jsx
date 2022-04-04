import PreviousMap from 'postcss/lib/previous-map';
import React from 'react';


function Input(props) {
  return (
      <div>
 <div className='flex items-center justify-between px-10 py-6 '>
     <h1 className='text-gray-600'>{props.children}</h1>
     <input className='border-gray-200 rounded-md border-2 px-40' placeholder={props.placeholder} ></input>
     
    </div><hr /></div>

  );
}

export default Input;