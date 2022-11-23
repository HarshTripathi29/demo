import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Groups from "./Groups"
import SignIn from "./SignIn";
import LogIn from "./LogIn";
import AddGroups from "./AddGroups";
import Expense from "./Expense";
import AddExpense from "./AddExpense";




const App = () =>{
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Groups" element={<Groups/>}/>
        <Route path="/Groups/AddGroups" element={<AddGroups/>}/>
        <Route path="/Groups/AddGroups/Expense" element={<Expense/>}/>
        <Route path="/Groups/AddGroups/Expense/AddExpense" element={<AddExpense/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        </Routes>
        </BrowserRouter>
       </>
    )
}

export default App;