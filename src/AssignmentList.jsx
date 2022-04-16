import React from "react";
import axios from "axios";
import AssignmentDetails from "./AssignmentDetails";

function AssignmentListPage() {

  const [assignments, setAssignments ] = React.useState([]);
  

  React.useEffect( () => {
      const token= axios.get("https://api.codeyogi.io/batches/1/assignments",
      {withCredentials: true});
      
      token.then((response) => {
        setAssignments(response.data);
       
      });
  }, []);



    return(
        
        <div>
          <h1 className="mb-4 text-xl font-bold  ">Assignments</h1>
        <div className="flex-col p-10 pt-2 bg-gray-100 ">
          
        {assignments.map((a) =><AssignmentDetails assignment={a}></AssignmentDetails>)}
          </div>    
        </div>
            
        
    );
}

export default AssignmentListPage;