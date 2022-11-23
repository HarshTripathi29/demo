import React, { useState } from "react";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import "./index.css";
import "./AddExpense.css";
import StripeContainer from "./Stripe/StripeContainer";

const AddExpense = () =>{
    const[fullName,setFullName] = useState({
        gname : " ",
        description : " ",
        mname : " ",
        mmail : " ",
    });


    const inputEvent=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);

        const{name, value} = event.target;
        
        setFullName((preValue) =>{

            console.log(preValue);
            return{
                ...preValue,
                [name] : value,
            };
        });
        };

        const payNow =()=>{
            console.log("pay with stripe");
        }
    
    return(
        <>
        <Header/>
        <div className="fullBills">
        <h1 className="head5">Bills</h1>
        <div className="outerBox4">
            <div className="box4">
                <h2 className="heading3">Settled Bills</h2> </div> 
                <button className="addBtn3" onClick={payNow}><NavLink to="/Groups/AddGroups/Expense" className = "billLink">Settle</NavLink></button>   
            {/* <div className="box5">
            <h2 className="heading3">Active Bills</h2> 
        <button className="addBtn3"><NavLink to="/Groups/AddGroups/Expense">Settle</NavLink></button>
        </div> */}
        </div>
        <div className="App">
      <StripeContainer />
    </div>
        </div>
        </>
    );
}
export default AddExpense;