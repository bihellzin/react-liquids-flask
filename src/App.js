import './App.css';
import Flask from './components/Flask/flask';
import React from 'react';
import { useState } from 'react';

function App() {
  const [chosenFlask, setChosenFlask] = useState(null)
  const [chosenFlaskIndex, setChosenFlaskIndex] = useState(null)
  const [flasks, setFlasks] = useState([
    [null, "blue", "blue", "red"],
    ["red", "red", "blue", "blue"],
    [null, null, null, "red"],
    [null, "blue", "blue", "red"],
    ["red", "red", "blue", "blue"],
    [null, null, null, "red"],
    [null, "blue", "blue", "red"],
    ["red", "red", "blue", "blue"],
    [null, null, null, "red"]
  ])

  return (
    <div className="App">
      <Flask 
        chosenFlask={chosenFlask}
        setChosenFlask={setChosenFlask}
        chosenFlaskIndex={chosenFlaskIndex}
        setChosenFlaskIndex={setChosenFlaskIndex}
        index={0}
        setFlasks={setFlasks}
        flasks={flasks} />
      <Flask 
        chosenFlask={chosenFlask}
        setChosenFlask={setChosenFlask}
        chosenFlaskIndex={chosenFlaskIndex}
        setChosenFlaskIndex={setChosenFlaskIndex}
        index={1}
        setFlasks={setFlasks}
        flasks={flasks} />
      <Flask 
        chosenFlask={chosenFlask}
        setChosenFlask={setChosenFlask}
        chosenFlaskIndex={chosenFlaskIndex}
        setChosenFlaskIndex={setChosenFlaskIndex}
        index={2}
        setFlasks={setFlasks}
        flasks={flasks} />
        <Flask 
        chosenFlask={chosenFlask}
        setChosenFlask={setChosenFlask}
        chosenFlaskIndex={chosenFlaskIndex}
        setChosenFlaskIndex={setChosenFlaskIndex}
        index={3}
        setFlasks={setFlasks}
        flasks={flasks} />
      <Flask 
        chosenFlask={chosenFlask}
        setChosenFlask={setChosenFlask}
        chosenFlaskIndex={chosenFlaskIndex}
        setChosenFlaskIndex={setChosenFlaskIndex}
        index={4}
        setFlasks={setFlasks}
        flasks={flasks} />
      <Flask 
        chosenFlask={chosenFlask}
        setChosenFlask={setChosenFlask}
        chosenFlaskIndex={chosenFlaskIndex}
        setChosenFlaskIndex={setChosenFlaskIndex}
        index={5}
        setFlasks={setFlasks}
        flasks={flasks} />
        <Flask 
        chosenFlask={chosenFlask}
        setChosenFlask={setChosenFlask}
        chosenFlaskIndex={chosenFlaskIndex}
        setChosenFlaskIndex={setChosenFlaskIndex}
        index={6}
        setFlasks={setFlasks}
        flasks={flasks} />
      <Flask 
        chosenFlask={chosenFlask}
        setChosenFlask={setChosenFlask}
        chosenFlaskIndex={chosenFlaskIndex}
        setChosenFlaskIndex={setChosenFlaskIndex}
        index={7}
        setFlasks={setFlasks}
        flasks={flasks} />
      <Flask 
        chosenFlask={chosenFlask}
        setChosenFlask={setChosenFlask}
        chosenFlaskIndex={chosenFlaskIndex}
        setChosenFlaskIndex={setChosenFlaskIndex}
        index={8}
        setFlasks={setFlasks}
        flasks={flasks} />
    </div>
  );
}

export default App;
