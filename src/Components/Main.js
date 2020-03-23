import React, { Component } from 'react'
import Checkboxes from "./Checkboxes"
import RadioButtons from "./RadioButtons"
import TextField from "./TextField"
import Switch from "./Switch"
import Demo from "./Demo"
import {Link} from "react-router-dom"
import { BrowserRouter as Router, Route } from 'react-router-dom'



export class Main extends Component {
    render() {
        return (
            <div className="Main">
                <div className="flex" >

                <TextField />
                <Switch />
                <Checkboxes />
                <RadioButtons />
                </div>
            </div>
        )
    }
}

export default Main
