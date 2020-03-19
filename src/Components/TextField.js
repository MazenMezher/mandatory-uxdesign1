import React, { Component } from 'react'

import "../Css/TextField.css";

let Class = '';

class TextField extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked: false
        }

        this.onClick = React.createRef();
    }
    
    componentDidMount(){
        document.addEventListener('click', this.clickOutsideOfInput)
    }

    componentWillUnmount(){
        document.addEventListener('click', this.clickOutsideOfInput)
    }

    clickOutsideOfInput = (e) =>{
        if(this.onClick.current === e.target){
            this.setState({clicked: !this.state.clicked})
            Class = 'clicked'
        }
        else {
            Class = ''
        this.setState({clicked: false})
        }
    }
    render() {
        return (
            <div className={Class} data-placeholder="Name" >
                <input type="text" id="textField" className={Class} ref={this.onClick} onClick={this.clickOutsideOfInput} />
            </div>
        )
    }
}

export default TextField

