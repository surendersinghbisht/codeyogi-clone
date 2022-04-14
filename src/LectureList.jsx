
import React from 'react';
import LectureDetails from './LectureDetails';
import axios from 'axios';



      
function LectureList() {

  const [lectures, setLectures ] = React.useState([]);

  React.useEffect( () => {
      const token= axios.get("https://api.codeyogi.io/batches/1/sessions",
      {withCredentials: true});
      
      token.then((response) => {
        setLectures(response.data);
       
      });
  }, []);



    return (
      <>
       <h1 className="mb-4 text-xl font-bold  ">Lectures</h1>
      <div className="h-full p-10 bg-white">
       
      {lectures.map((l) => <LectureDetails lecture={l} />)}
    </div>
  </>
    );
  }
  
  export default LectureList;