import React, { Component } from 'react'
import "../Css/RadioButtons.css"

class RadioButtons extends Component {
    render() {
        return (
            <div className="radioBigbox">
            <div className="firstRadio">
                <label className="radio-box">
                    <input type="radio" name="radio" className="Radio" disabled={this.props.disabled} />
                    <span className="radio-checkmark"></span>
                </label>
            </div>

            <div className="secondRadio">
                <label className="radio-box">
                    <input type="radio" name="radio" className="Radio" disabled={this.props.disabled} />
                    <span className="radio-checkmark"></span>
                </label>
            </div>
           
            </div>
        )
    }
}

export default RadioButtons
