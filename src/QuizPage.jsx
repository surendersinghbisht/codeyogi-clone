import React from "react";
import Navbar from "./Navbar";


function QuizPage(props) {
    return(
        <div className=" ">
            <Navbar></Navbar>
            
            <h1 className="flex justify-center mt-40">No active quiz!!!!!</h1>
        </div>
    );
}

export default QuizPage;