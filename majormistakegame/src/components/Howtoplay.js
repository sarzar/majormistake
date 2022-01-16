import React from "react";
import "./Howtoplay.css"
import '../App.css';
import { Link } from 'react-router-dom';

export default function Howtoplay() {
    return (
        <div className="rules-container">
            <div className="goback-container">
            <Link to="/">
                    <button id="goback" className="creategameimage"> <img src="goback.png" /></button>
                </Link>
            </div>
            <div className = "image-container">
                <img src = "howitworks.png"/>
            </div>

        </div>
    );
}