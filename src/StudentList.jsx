import React, {useEffect, useState}  from "react";
import axios from "axios";
import StudentsRow from "./StudentsRow";




function StudentList(props) {
  

    const [students, setStudents] = useState([]);
      
    useEffect(() => {
        const token = axios.get("https://randomuser.me/api/?results=10")
        token.then((response) => {
            setStudents(response.data.results);
            console.log(response.data.results);
        });
    }, []);
    

    
    
    return(
        
        <div className="h-full p-10 bg-white">
            
            <h1 className="text-2xl font-semibold">Students of batch 1</h1>
              <div className="flex flex-wrap space-x-4">  {students.map((u) => (
                    <StudentsRow user={u} />
                     ))}
              </div>
            
            
        </div>
        
    );
}

export default StudentList;