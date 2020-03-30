import React, { Component } from 'react'

import "../Css/TextField.css";


class TextField extends Component {

    render() {
        return (
            <div className="container-textField">
                <input type="text" disabled={this.props.disabled} className="input-textField" required />
                <span className="control-placeholder">Label</span>
                <span className="focus-border"></span>
            </div>
        )
    }
}

export default TextField

