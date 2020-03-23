import React, { Component } from 'react'

import "../Css/TextField.css";


class TextField extends Component {

    render() {
        return (
            <div className="container-textField">
                <input type="text" className="input-textField" required />
                <label className="control-placeholder">Label</label>
                <span class="focus-border"></span>
            </div>
        )
    }
}

export default TextField

