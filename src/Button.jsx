
import React from 'react';


function Button({theme, children, ...rest}) {

  let themeClasses="";

if(theme === "red"){
  themeClasses="bg-red-500 border border-red-800 hover:bg-red-300";
}else{
  themeClasses="bg-indigo-500 border border-indigo-800 hover:bg-indigo-300";
}


  return (

 <div>
     <button {...rest}
       className={'rounded-sm  text-white py-2 ' + themeClasses}>{children}  </button>
    </div>

  );
}

export default Button;