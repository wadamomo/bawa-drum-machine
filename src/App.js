import React, { Component } from 'react';
import Button from './Button.jsx';
import './App.css'


/*
Challenge: Your goal is to create sixteen <Button /> components
Step 1: Run npm i, then npm start, you should see a gray background 
Step 2: Create a loop from 0 to 16 in order to push some buttons to the array
Step 3: On each iteration, push a <Button /> component to the buttons array
Step 4: Create a prop called id and assign to it the current value of i
Step 5: Create a prop called key and assign to it the current value of i
Step 6: Create three more props: keyCode, keySymbol, and audioFile
        Assign to these props the current element from the this.state.keyCodes,
        this.state.keySymbols, and this.state.audioFiles arrays, respectively.

BONUS: Let's make our buttons work when we click on them. First, create a 
       handleKeydown prop on every button and assign to it this.handleKeydown.
       Now navigate to the Button.jsx file and add an onClick property to the 
       div, assigning to it this.props.handleKeydown (NB: we would usually 
       create a separate click handler method, but since the functionality is 
       roughtly the same we'll go ahead and just make a slight modification to 
       handleKeydown). Finally, back in App.js modify the line just below 
       handleKeydown and change it from "let code = e.keyCode;" to 
       "let code = e.keyCode || e.target.children[1].id"
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyCodes: [49, 50, 51, 52, 81, 87, 69, 82, 65, 83, 68, 70, 90, 88, 67, 86],
      keySymbols: [1, 2, 3, 4, 'q', 'w', 'e', 'r', 'a', 's', 'd', 'f', 'z', 'x', 'c', 'v'],
      audioFiles: [
        "samples/clap.WAV",
        "samples/closed-hat.WAV",
        "samples/cowbell.WAV",
        "samples/cymbal.WAV",
        "samples/kick.WAV",
        "samples/low-tom.WAV",
        "samples/mid-tom.WAV",
        "samples/high-tom.WAV",
        "samples/open-hat.WAV",
        "samples/snare.WAV",
        "samples/bass-stab.WAV",
        "samples/blip.WAV",
        "samples/echo.WAV",
        "samples/nomsayn.WAV",
        "samples/pwa-pwa.WAV",
        "samples/haht-of-venice.WAV",
      ],
    }
  }

  handleKeydown = (e) => {
    let code = e.keyCode || e.target.children[1].id;   
    let audio = document.getElementById(code);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
  };

  render() {
    window.addEventListener('keydown', this.handleKeydown);

    // ******************
    // INSERT CODE HERE
    const buttons = [];

    // ****************** 

    return (
      <div className="button-container">
        {buttons}
      </div>
    );
  }
}

export default App;
