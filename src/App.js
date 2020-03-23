import React from 'react';
import Main from "./Components/Main"
import Demo from "./Components/Demo"
import {Link} from "react-router-dom"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <ul>
          <li>
            <Link to="/">To the Main page</Link>
          </li>
          <li>
            <Link to="/demo">To the Demo page</Link>
          </li>
        </ul>

        <Route exact path="/" component={Main} />
        <Route path="/demo" component={Demo} />
      </Router>
      

    </div>
  );
}

export default App;
