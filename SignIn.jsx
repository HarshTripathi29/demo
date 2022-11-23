import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import "./index.css";
import "./Expense.css";
import "./SignIn.css";

const SignIn=()=>{
    const[fullName,setFullName] = useState({
        fname : " ",
        lname : " ",
        email : " ",
        password : " ",
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

    const onSubmits=(event)=>{
        event.preventDefault();
        alert("form Submitted");
    };

    return(
        <>
        <Header/>
        <div className="fullPage">
        <div className = "bigBox">
        <div className="headS">
            <form onSubmit={onSubmits}>
            <div className="formBox">   
            <h1 className="heading">Sign Up {fullName.fname} {fullName.lname}</h1>
            <input 
            type="text" 
            placeholder=" First Name " 
            name="fname"
            onChange={inputEvent} 
            value={fullName.fname} 
            className="box"/>

            <input 
            type="text" 
            placeholder=" Last Name " 
            name="lname"
            onChange={inputEvent} 
            value={fullName.lname} 
            className="box"/>

            <input 
            type="email" 
            placeholder=" e-mail " 
            name="email"
            onChange={inputEvent} 
            value={fullName.email} 
            className="box"/>

            
            <input 
            type="number" 
            placeholder=" Password " 
            name="password"
            onChange={inputEvent} 
            value={fullName.password} 
            className="box"/>       
            <div className ="submitBox">
            <button type="submit" className="submitButton">Submit</button>
            <div className="redirectToLogin">Already have an account <NavLink to="/LogIn" className = "navRedirectToLogin">Log In</NavLink></div>
            </div>
            </div>
            </form>
        </div>
        <img src = "https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-2242.jpg?w=2000" className="img1" alt="image2"/>
        </div>
        </div>
        </>
    );
}

export default SignIn;


