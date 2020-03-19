import React, { Component } from 'react'

import "../Css/CheckBoxes.css";

export class Checkboxes extends Component {
    render() {
        return (
            <div>
                <label class="container-checkbox">
                <input type="checkbox" className="checked" />
                <span class="checkmark"></span>
                </label>
            </div>
        )
    }
}

export default Checkboxes
