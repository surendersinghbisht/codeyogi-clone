import React from 'react';



function LectureDetails(props) {
  return (
    <div className="p-4 m-5 font-semibold bg-white border-2 border-gray-50 rounded-md shadow-md ">
   
        <div className='flex flex-col ml-4 '>
        <div className='flex justify-start space-x-2 '>
<h1 className='font-bold'>Lecture #{props.lecture.id}</h1>
<h3 className=' text-gray-400 font-semibold'>{props.lecture.date}</h3>
</div>
<h3 className='text-sm text-gray-600 '> Duration :({props.lecture.duration})</h3>
</div>

<h1 className=' mt-6 ml-4'>
 <ul className="px-6 my-6">
 {props.lecture.topics.map(topic => (<li> {topic}</li>  )) }
  </ul>
</h1>
<div className='py-2'>
<h3 className='text-sm text-gray-600 text-center font-semibold '>watch/download</h3>
</div>

    </div>
 

  );
}

export default LectureDetails;