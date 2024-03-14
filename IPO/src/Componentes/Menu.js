import React from "react";
import { Link } from "react-router-dom";
import './Estilo.css'
import logo from '../Img/logo.png'


export default function Menu() {
    return (
        <nav>
            <div className="topnav">
                <a><Link to='/'>Home</Link></a>
                <a><Link to='/Oque'>O que é IPO?</Link></a>
                <a><Link to='/Quiz'>Fazer Quiz</Link></a>
                <div className="logo-b3"><a href="https://www.b3.com.br"><img className="logo" src={logo} alt=""/></a></div>
            </div>
        </nav>
    )
}