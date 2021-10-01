import React, {useState, useEffect} from 'react'
import {db} from "../base"
import React from 'react'
import { NavLink } from 'react-router-dom'

const Amaizing = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "rgb(120,120,120"}}>
                <NavLink to="/" className="btn" style={{color: "white"}}>
                  HOME
                </NavLink>
                <NavLink to="/add" className="btn" style={{color: "white"}}>
                  ADD
                </NavLink>
                <NavLink to="/" className="btn" style={{color: "white"}}>
                  ABOUT
                </NavLink>
                </nav> 
            
        </div>
    )
}

export default Amaizing