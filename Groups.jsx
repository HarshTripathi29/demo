import React from "react";
import Header from "./Header";
import "./index.css";
import "./groups.css";
import { NavLink } from "react-router-dom";

const Groups = () =>{
    
    return(
        <>
        <Header/>
        <div className="fullGroups">
        <div className="head1">Groups</div>
        <div className = "outerBox1">
        <div className="innerBox1">
        <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuCQQebXenjk3oNmv2R88sFNA08fLWj5roYCoLYENNByztJXyF8qwx6hEg03nWdSjaJA&usqp=CAU</div>" className="img"/>
        <button className="btn"><NavLink to="/Groups/AddGroups" className="navList1">Add Group</NavLink></button>
        </div></div>
        <div className="lowerBox"></div>
        </div>
        </>
    );
}
export default Groups;