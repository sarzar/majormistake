import React from "react";
import "./Home.css";
import '../App.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Popup from './Popup';
import { Link } from 'react-router-dom';

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
];

export default function Home() {
    const [major, setmajor] = React.useState('M');
    const [popup, setPopup] = useState(false);
    const [popups, setPopups] = useState(false);
    const handleChange = (event) => {
        setmajor(event.target.value);
    };
    return (
        <div className="homepage-container">
            <div className="logo-container">
                <img src="major mistake.png" />
            </div>
            <div className="username-container">
                <TextField id="standard-basic" label="Username" variant="standard" />
            </div>
            <div className="majorselect-container">
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
            <div className="button-container">
                <button onClick={() => setPopups(true)}>Create Game</button>

                <div className="popup-content">
                    <Popup trigger={popups} setTrigger={setPopups}>
                        <h3>Create Game</h3>
                        <p>Code: XGTSR</p>
                    </Popup>

                    <button onClick={() => setPopup(true)}>Join Game</button>

                <div className="popup-content">
                    <Popup trigger={popup} setTrigger={setPopup}>
                        <h3>Join Game</h3>
                        <p>Input Code: </p>
                    </Popup>
                </div>
                </div>
                <div className = "howitworksbutton-container">
                    <Link to = "/howtoplay">
                        <button> How to Play</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
}