import React from "react";
import { useParams } from "react-router-dom";
import AssignmentDetails from "./AssignmentDetails";
import {Link} from 'react-router-dom'
import AssignmentMockData from "./Mock Data/AssignmentMockData";

function AssignmentDescription() {
    const data = useParams();
    const selectedId = +data.assignmentNumber;
    const selectedAssignment = AssignmentMockData.find(assignment => assignment.id === selectedId)
  
    return (
        <div>
            <div className="p-10 bg-white border-2 border-gray-200 shadow-md ">
                <h1 className="text-3xl font-extrabold text-center "> Description of assignment {selectedAssignment.assignmentNumber}</h1>
                <h3 className="p-4 text-lg font-semibold ">Assignment Details</h3>
                <hr />
                <div className="space-y-6">
                    <div className="flex justify-between mt-4">
                        <h2>Title</h2>
                        <p className="mr-60">{selectedAssignment.assignmentTitle }</p>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <h2>Due Date</h2>
                        <p className="pr-60">{ selectedAssignment.dueDate}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <h2>Description</h2>
                        <p className="mr-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, ut perspiciatis? </p>
                    </div>
                    <hr />
                </div>
                <div className="mt-4 space-x-10">
                    <Button>Re-submit</Button>
                    <a href = "https//:www.google.com">See your submission</a>
                </div>
                
                
               
               
                
                
            </div>
            <div className="text-xl text-red-500">
                <Links to ="/lectures">BACK</Links>
            </div>
        </div>
    );
}

export default AssignmentDescription;
