import React from "react";
import "./Home.css";
import '../App.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Popup from './Popup';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const majors = [
    {
        value: 'M',
        label: 'Math',
    },
    {
        value: 'E',
        label: 'English',
    },
    {
        value: 'A',
        label: 'Astronomy',
    },
    {
        value: 'B',
        label: 'Biology',
    },
    {
        value: 'H',
        label: 'History',
    },
    {
        value: 'CS',
        label: 'Computer Science',
    },
    {
        value: 'ENG',
        label: 'Engineering',
    },
    {
        value: 'BU',
        label: 'Business',
    },
    {
        value: 'SOC',
        label: 'Social sciences',
    },
    {
        value: 'D',
        label: 'Dentistry',
    },
    {
        value: 'F',
        label: 'Film studies',
    },
    {
        value: 'G',
        label: 'Geography',
    },
    {
        value: 'P',
        label: 'Physics',
    },
    {
        value: 'PH',
        label: 'Philosophy',
    },
];

export default function Home() {
    const [major, setMajor] = React.useState('M');
    const [popup, setPopup] = useState(false);
    const [popups, setPopups] = useState(false);
    const handleChange = (event) => {
        setMajor(event.target.value);
    };
    return (
        <div className="homepage-container">
            <div id="container-flex" className="logo-container">
                <img src="major mistake.png" />
            </div>
            <div id="container-flex" className="username-container">
                <TextField id="standard-basic" label="Username" variant="standard" />
            </div>
            <div id="container-flex" className="majorselect-container">
                <TextField
                    id="standard-select-currency"
                    select
                    label="Major"
                    value={major}
                    onChange={handleChange}
                    helperText="Please pick your major"
                    variant="standard"
                >
                    {majors.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div id="container-flex" className="buttons-container">

           
                    <button className="creategameimage" onClick={() => setPopups(true)}onClick={() => setPopups(true)} variant="outlined" ><img src='creategamebutton.png'/></button>

                    <div className="popup-content">
                        <Popup trigger={popups} setTrigger={setPopups}>
                            <h3>Create Game</h3>
                            <p>Code: XGTSR</p>
                            <Link to ="gamepage">
                                    <button>Create</button>
                                </Link>
                        </Popup>
                
                        <button className="creategameimage" onClick={() => setPopup(true)} variant="outlined" ><img src="joingamebutton.png" /></button>
                        {/* <img onClick={() => setPopup(true)} variant="outlined" src='creategamebutton.png' /> */}

                        <div className="popup-content">
                            <Popup trigger={popup} setTrigger={setPopup}>
                                <h3>Join Game</h3>
                                <p>Input Code: </p> 
                                <input
                                className="guessfield"
                                type="text"
                                placeholder="Enter code..."
                                /> 
                                <Link to ="gamepage">
                                    <button className="submitGuess">Join</button>
                                </Link>
                            </Popup>
                        </div>
                    
                </div>
            </div>
            <div id="container-flex" className="howitworksbutton-container">
                <Link to="/howtoplay">
                    <button className="creategameimage"> <img src="howtoplaybutton.png" /></button>
                </Link>

            </div>

        </div>
    );
}