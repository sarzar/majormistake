import React, {useEffect} from "react";
import "./client.css";
import "./Home.css";
import '../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Popup from './Popup';
import io from 'socket.io-client';

export default function client() {
    const [popupe, setPopupe] = useState(false);
    const [userID, setUserID] = useState();
    const [message, setMessage] = useState("");
    
    const socketRef = useRef();
    
    useEffect(() => {
        socketRef.current = io.connect('/');
    }
)
    
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
                
            </div>

            <div className="answer-container">
                <input className="answer-box"type="text" placeholder="Enter your answer..."/> <br/>
            </div>
            <div className="opponentanswer-container">
                <p className="opponent-answer">Opponent's Answer: Waiting for opponent to answer...</p>
            </div>

        </div>


    );
}