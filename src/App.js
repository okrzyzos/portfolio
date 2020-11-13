import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import olivier from './olivier.jpg';
import './App.css';
import About from './components/1-About/About'
import Expérience from './components/2-Experience/Experience'
import Education from './components/3-Education/Education'
import Nav from './Nav'


function App() {
    return (

        <
        div >
        <
        Router >
        <
        Nav olivier = { olivier }
        />

        <
        div class = "container-fluid  p-0" >



        <
        Route path = "/"
        exact component = { About }
        /> <
        Route path = "/experience"
        component = { Expérience }
        /> <
        Route path = "/education"
        component = { Education }
        />


        <
        /div>

        <
        /Router> <
        /div>

    )
}
export default App;