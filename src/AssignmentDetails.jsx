import React from 'react';
import {Link} from 'react-router-dom'

function AssignmentDetails(props) { 
    return (
       <div className='bg-white shadow-md rounded-md p-4 m-5'>

<div className='flex space-x-4'>
    
      <h1 className='font-semibold'> #{props.assignment.id}</h1>
      <h1 className='font-semibold'>{props.assignment.assignmentTitle}</h1>
      <h3 className='text-gray-400 font-bold'>({props.assignment.publishedDate})</h3>
      </div>
    <h2 className='text-red-600'>Due Date:{props.assignment.dueDate}</h2>

    <h2 className='text-green-600 flex justify-end' >Submited</h2>
    <div className='text-center flex-col'> 
      <h1 className='text-green-700'>Re-submit</h1>
      
      <a href="https://www.google.co.in/" className='text-blue-500 underline'>see your assignment</a>
       </div></div>
    );
}

export default AssignmentDetails;