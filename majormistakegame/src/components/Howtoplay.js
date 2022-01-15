import React from "react";
import "./Howtoplay.css"
import '../App.css';

export default function Howtoplay() {
    return (
        <div className="rules">

            <h1 className="howtoplay-title">How to Play:</h1>
            <ul>
                <div className="box">
                <li>
                    Two players go head to head, asking each other a series of questions 
                    in order to guess each other's majors!
                </li> <br/>
                <li>
                    Players will be assigned a bank of questions they are able to ask, up to a maximum of 10
                </li> <br/>
                <li>Player's have 1 opportunity to guess the other player's major at any point.
                    If you guess correcty, you win! If not, you lose.  
                </li>
                </div>
            </ul>
        </div>
    );
}