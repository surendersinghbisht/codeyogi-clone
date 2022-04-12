
import React from 'react';


function Button(props) {
  return (
 <div>
     <button onClick={props.onClick}
       className='rounded-sm bg-indigo-700 px-6 text-white py-2  hover:bg-blue-400'>{props.children}  </button>
    </div>

  );
}

export default Button;