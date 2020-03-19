import React, { Component } from 'react'

import "../Css/Switch.css";

export class Switch extends Component {
    render() {
        return (
            <div>
                <label className="checkbox">
                    <input type="checkbox" />
                    <span className="fake"></span>
                </label>
            </div>
        )
    }
}

export default Switch
