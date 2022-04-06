import React from "react";

import AssignmentDetails from "./AssignmentDetails";
import AssignmentMockData from "./MockData/assignmentMockData";

function AssignmentListPage() {
    return(
        
        <div>
          <h1 className="mb-4 text-xl font-bold  ">Assignments</h1>
        <div className="flex-col p-10 pt-2 bg-gray-100 ">
          
        {AssignmentMockData.map(assignment =><AssignmentDetails assignment={assignment}></AssignmentDetails>)}
          </div>    
        </div>
            
        
    );
}

export default AssignmentListPage;