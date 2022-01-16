import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from "./components/Home"
import Help from "./components/Howtoplay"
import Game from "./components/Game"

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/howtoplay" element={<Help/>} />
        <Route path="/gamepage" element={<Game/>} />
      </Routes>
      </BrowserRouter>,
      rootElement
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
