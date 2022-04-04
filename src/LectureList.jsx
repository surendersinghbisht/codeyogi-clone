import React from 'react';
import LectureDetails from './LectureDetails';
import lectureData from './MockData/lectures';

function LectureList() {
    return (
      
      <div className="h-full p-10 pt-2 bg-white ">
       <h1 className='font-bold text-2xl'>Lectures</h1> 
{lectureData.map(lecture => <LectureDetails lecture={lecture}></LectureDetails>)}
  
    </div>
  
    );
  }
  
  export default LectureList;