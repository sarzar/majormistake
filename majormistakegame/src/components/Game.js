import React from "react";
import "./Game.css";

import { Link } from 'react-router-dom';
import { useState } from 'react';
import Popup from './Popup';


export default function Game() {
    const [popupe, setPopupe] = useState(false);
    return (

        <div className="game-container">
            <div className="wingiveupbuttons-container">
                <Link to="/">
                    <button id="giveup" className="creategameimage"> <img src="resizedImage (14).png" /></button>
                </Link>
                <div className="spacer"></div>

                <button className="creategameimage" onClick={() => setPopupe(true)} onClick={() => setPopupe(true)} variant="outlined" ><img src='resizedImage (15).png' /></button>
                <div className="popup-content">
                    <Popup trigger={popupe} setTrigger={setPopupe}>
                        <h3>GUESS</h3>
                        <input className="guessfield" type="text" placeholder="Enter your guess..."/>
                        <Link to="gamepage">
                            <button className="submitGuess">Submit</button>
                        </Link>
                    </Popup>
                </div>


            </div>
            <div className="Question-container">
                <img src="art.png" />
            </div>
        </div>


    );
}