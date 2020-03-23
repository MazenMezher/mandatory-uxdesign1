import React, { Component } from 'react'
import Checkboxes from "./Checkboxes"
import RadioButtons from "./RadioButtons"
import TextField from "./TextField"
import Switch from "./Switch"
import {Link} from "react-router-dom"
import { BrowserRouter as Router, Route } from 'react-router-dom'


class Demo extends Component {
    render() {
        return (
            <div>
                <div className="flex" >

                <TextField />
                <p>
                    I min TextField så har jag använt en input av type text. 
                    Jag har följt specsen så gott det gick då det fanns mycket otydligheter tyckte jag.
                    Jag använde en label of span element som hjälp för att ändra placeholder text när input field används och när den inte används.
                     De olika status effekterna har jag skapat med hjälp utav css.
                </p>
                <Switch />
                <p>I min switch så använde jag en html checkbox element för att få lokigen att ändra utseendet när jag har klickar på själva switchen.
                    färger ändras och position och den har även en transition effekt för smidigare visuel effekt.
                </p>
                <br/>
                <Checkboxes />
                <p>
                    I min checkbox använde jag en html checkbox element till min fördel i bakgrunden sen skapade en custom checkbox style genom css på en label och ett span.
                    stilen på checkbox ändras ifall den är checked or unchecked.
                </p>
                <RadioButtons />
                <br/>
                <p>
                    I mina Radio buttons så stylade jag en default border settings när de inte är aktiva och när de är aktiva får de en specific style enligt de specs jag hittade på deras hemsida.
                    jag var osäker om den skulle ha en hover effect som de har på deras sida men inget nämdes i deras specs om det.
                </p>
                </div>
            </div>
        )
    }
}

export default Demo
