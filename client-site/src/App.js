import React from 'react';
import './App.css';
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import ManagedProduct from "./components/Dashboard/ManagedProduct/ManagedProduct";
import {
    BrowserRouter as Router,
    Route, Routes,
} from "react-router-dom";
import Details from "./components/Details/Details";
import AddProduct from "./components/Dashboard/AddProduct/AddProduct";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Login from "./components/Login/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/orders"} element={<Orders/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/dashboard/manageProduct"} element={<ManagedProduct/>}/>
                <Route path={"/dashboard/addProduct"} element={<AddProduct/>}/>
                <Route path={"/details"} element={<Details/>}/>
            </Routes>
        </Router>

    );
}

export default App;
