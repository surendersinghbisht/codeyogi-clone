import React from "react";
import Button from "./Button";
import {Link} from "react-router-dom"

function Navbar() {
    return(
        <div className="bg-gray-800 h-14 w-screen">
            <div className="flex justify-between">
                <div className="text-white flex font-semibold space-x-2 mt-2 text-lg">
            <Link to="/lectures">CODEYOGI</Link>
            <span>|</span>
            <h1>welcome , Surender Singh</h1>
            </div>
            <div className=" flex  mt-2 mr-6">
            <Button >Logout</Button>
            </div>
            </div>
        </div>
    );
}

export default Navbar;