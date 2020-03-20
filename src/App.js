import React from 'react';
import logo from './logo.svg';
import Checkboxes from "./Components/Checkboxes"
import RadioButtons from "./Components/RadioButtons"
import TextField from "./Components/TextField"
import Switch from "./Components/Switch"


import './App.css';

function App() {
  return (
    <div className="App">
      <TextField />
      <Switch />
      <Checkboxes />
      <RadioButtons />
    </div>
  );
}

export default App;
