import React, { Component } from 'react'

import "../Css/CheckBoxes.css";

export class Checkboxes extends Component {
    render() {
        return (
            <div>
                <div className="checkBigBox">
                    <label className="container-checkbox">
                    <input type="checkbox" className="checked" disabled={this.props.disabled}/>
                    <span className="checkmark"></span>
                </label>
                </div>
                
            </div>
            
        )
    }
}

export default Checkboxes
