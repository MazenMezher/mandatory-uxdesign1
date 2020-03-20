import React, { Component } from 'react'
import "../Css/RadioButtons.css"



export class RadioButtons extends Component {
    render() {
        return (
            <>
            <div className="firstRadio">
                <label class="radio-box">
                    <input type="radio" name="radio" className="Radio" />
                    <span class="radio-checkmark"></span>
                </label>
            </div>

            <div className="secondRadio">
                <label class="radio-box">
                    <input type="radio" name="radio" className="Radio" />
                    <span class="radio-checkmark"></span>
                </label>
            </div>
           
            </>
        )
    }
}

export default RadioButtons
