import React from 'react';
import LectureDetails from './LectureDetails';
import lectureData from './MockData/lectures';

function LectureList() {
    return (
      <>
      <h1 className='font-bold text-2xl mb-4 '>Lectures</h1> 
      <div className="h-full p-10 pt-2 bg-gray-100 ">
       
{lectureData.map(lecture => <LectureDetails lecture={lecture}></LectureDetails>)}
  
    </div>
    </>
  
    );
  }
  
  export default LectureList;