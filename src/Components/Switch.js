import React, { Component } from 'react'

import "../Css/Switch.css";

export class Switch extends Component {
    render() {
        return (
            <div className="container">
            <input className="switch" type="checkbox" name="" disabled={this.props.disabled} />
            </div>
        )
    }
}

export default Switch
