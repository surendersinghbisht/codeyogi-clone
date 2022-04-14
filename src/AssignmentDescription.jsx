import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import AssignmentMockData from "./MockData/AssignmentMockData";
import Button from "./Button";

function AssignmentDescription() {
    const data = useParams();
    const selectedId = +data.id;
    const selectedAssignment = AssignmentMockData.find(assignment => assignment.id === selectedId)

    return (
        <div>
<div className="p-10 bg-white border-2 border-gray-200 shadow-md ">

 <h3 className="p-4 text-lg font-semibold ">Assignment Details</h3>
<hr />
<div className="space-y-6">
<div className="flex justify-between mt-4">
 <h2>Title: {selectedAssignment.assignmentTitle}</h2>
       <p className="mr-60"></p>
 </div>
 <hr />
 <div className="flex justify-between">
                        <h2>Due Date</h2>
      <p className="pr-60">{selectedAssignment.dueDate}</p>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <h2>Description</h2>
                        <p className="mr-20">: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, ut perspiciatis? </p>
                    </div>
                    <hr />
                </div>
                <div className="mt-4 space-x-10">
                    <Button>submit</Button>
                    <a href="https//:www.google.com" className="text-red-500  flex justify-end">See your submission</a>
                </div>
            </div>
            <div className="text-xl text-red-500">
                <Button className="bg-red-500"> <Link to="/lectures">BACK</Link></Button>
            </div>
        </div>
    );
}

export default AssignmentDescription;
