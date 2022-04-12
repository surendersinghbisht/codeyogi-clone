import React from 'react';

import Button from './Button';


function AssignmentDetails({assignment}) { 

const[showPopup, updateshowPopup] =React.useState(false);
const[assignmentUrl, updateassignmentUrl]= React.useState('');

    return (
   <div>
       <div className='bg-white shadow-md rounded-md p-4 m-5'>

<div className='flex space-x-4'>
<h1 className='font-semibold'> #{assignment.id}</h1>
<h1 className='font-semibold'>{assignment.title}</h1>
      
      <h3 className='text-gray-400 font-bold'>({assignment.updated_at})</h3>
      </div>
    <h2 className='text-red-600'>Due Date:{assignment.due_date}</h2>

    <h2 className='text-green-600 flex justify-end' >Submited</h2>
    <div > 
      <Button onClick={() => updateshowPopup(true) }>submit</Button>
      
      <a href="https://www.google.co.in/" className='text-blue-500 underline'>see your assignment</a>
       </div></div>
       
{showPopup && (
      <div className='p-10 bg-gray-200 shadow-lg rounded-lg flex justify-center space-x-4  '>
        <div className='flex'>
        <button onClick={() => updateshowPopup(false) } className='bg-red-500 p-1 rounded  '>X</button>
         <input value={assignmentUrl} onChange={updateassignmentUrl} placeholder='submission link' className='px-20  rounded-md border  border-black ml-4' type="text" />
         <Button className="mt-4">save</Button>
         </div>
       </div> 
       )}
       </div>
    );
       
    
}

export default AssignmentDetails;