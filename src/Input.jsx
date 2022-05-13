import {  useField } from 'formik';
import React from 'react';



function Input({id, type, name, Children,...rest}) {

const [field, meta] = useField(name);

  return (
      <div className='items-center space-x-4 justify-between py-6 sm:px-20 sm:flex'>

<label htmlFor={id} className="text-gray-500">{Children}</label> 
<div>
<input onChange={field.onChange} 
onBlur={field.onBlur}
value={field.value}
id={id}
name={name}
type={type || 'text'}
{ ...rest}
className="block w-11/12 py-2 bg-gray-100 border-2 border-gray-200 rounded-md sm:w-96"
/>
{meta.error&& meta.touched &&(
  <span className="text-sm text-red-500 h-10 ">{meta.error}</span>
)}
</div>
</div>

  );
}

export default Input;