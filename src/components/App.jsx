import React, { Component } from 'react';
import Button from './Button.jsx';

/*

Step 1: To make sure everything is hooked up properly, first render a 
        <Button /> by putting one in the buttons array like so [<Button />]. 
        Now put a few more in there. How is this working? 🤔 Have a look
        at the Button.jsx file. We are creating a Button component and exporting 
        that component. At the top of this file, you'll notice that we're
        importing the button component. Every <Button /> is a placeholder for
        all the code inside the render method of the button.js file.
        
Step 2: Create a loop from 0 to 16 in order to push sixteen buttons
        to the buttons array. On each iteration, push a <Button /> component 
        to that array — your page should now be displaying 16 buttons.
        
Step 3: Let's add some props for each button. Create a prop called id and assign 
        to it the value of i. Your buttons array should now have 16 buttons each
        with a unique id like so <Button id={i} />. Create a key prop and also
        assign to it the value of i. 
        
Step 4: Create three more props: keyCode, keySymbol, and audioFile
        Assign to these props the current element from the this.state.keyCodes,
        this.state.keySymbols, and this.state.audioFiles arrays, respectively.

BONUS: Let's make our buttons work when we click on them. First, create a 
       handleKeydown prop on every button and assign this.handleKeydown to it.
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
      audioFiles: ["samples/clap.WAV", "samples/closed-hat.WAV", "samples/cowbell.WAV", "samples/cymbal.WAV", "samples/kick.WAV", "samples/low-tom.WAV", "samples/mid-tom.WAV", "samples/high-tom.WAV", "samples/open-hat.WAV", "samples/snare.WAV", "samples/bass-stab.WAV", "samples/blip.WAV", "samples/echo.WAV", "samples/nomsayn.WAV", "samples/pwa-pwa.WAV", "samples/haht-of-venice.WAV"],
    }
  }

  handleKeydown = (e) => {
    let code = e.keyCode;  
    let audio = document.getElementById(code);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
  };

  render() {
    window.addEventListener('keydown', this.handleKeydown);
    
    // ******************
    const buttons = [];
    // INSERT CODE HERE

    // ****************** 

    return (
      <div className="button-container">
        {buttons}
      </div>
    );
  }
}

export default App;
