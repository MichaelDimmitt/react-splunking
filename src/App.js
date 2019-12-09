import React, { useState } from 'react';
import './App.css';
import confetti from 'canvas-confetti'

function App() {
  const [numFound, setNumFound] = useState(0);
  const [count, setCount] = useState(0);
  const [showDialog, setDialog] = useState(true);
  const [searchString, setSearchString] = useState('');

  function cashMoney(){
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
          y: 0.6
      }
    });
  }
  function firstSearch(text) {
    const searchValue = RegExp(`[^<^/]${text}`,'gi')
    var matches = document.body.children.root.innerHTML.match(searchValue);
    var countMatches = matches ? matches.length : 0;
    setCount(count+1)
    setNumFound(countMatches)

    console.log({count, money: document.body.children.root.innerHTML})
    window.find('This is a button', false, false, true, false, false, false, true); 
  }
  function secondSearchReverse(text) {
    window.find('This is a button', false, true, true, false, false, false, true); 
    if(count === 1){ 
              setCount(numFound) 
    } else {  setCount(count-1) }
  }
  function secondSearch(text) {
    window.find('This is a button', false, false, true, false, false, false, true); 
    if(count === numFound){ 
              setCount(1) 
    } else {  setCount(count+1) }
  }

  function closeDialog(){
    setDialog(false)
  }
  function openDialog(){
    setDialog(true)
  }

  function keyPressed(e){
    
    // https://www.w3schools.com/charsets/ref_html_ascii.asp
    if(e.keyCode === 37 || e.keyCode === 39){
      alert(e.keyCode, 'num or char... (KeyPress, use charCode)');
    }
    else if (e.keyCode === 38) {
      alert('up arrow... (KeyPress, use charCode)');
    }
    else if (e.keyCode === 40) {
      alert('down arrow... (KeyPress, use charCode)');
    }
    else if (e.charCode === 13) {
      alert('Enter... (KeyPress, use charCode)');
    }
    else {
      console.log({t: e.target.value, a: e.target})
      setSearchString(searchString)
    }

  }
    
  return (
    <div className="App" >
      <button onClick={() => openDialog()}>
        search
      </button>
      { showDialog ?
      <dialog open={undefined} className="box flex-items-center mimmic-google-search">
        <input autoFocus onKeyPress={keyPressed} onKeyDown={keyPressed} className="google-input"></input>
        {count}/{numFound}
        <div className="flex-items-center google-extras" >
          <div className="ml3 vertical-bar" ></div>
          <i onClick={()=>secondSearchReverse()} className="pl13 fas fa-chevron-up fa-m"></i>
          <i onClick={()=>secondSearch()} className="pl13 fas fa-chevron-down fa-m"></i>
          <i onClick={()=>closeDialog()} className="pl13 pr2 fas fa-times fa-m"></i>
        </div>
      </dialog>
      : ""
      }
      <div style={{
          "position":"relative",
          "margin": "auto",
          "top": "50%"
          }}>
        <button onClick={() => cashMoney()} >
          This is a button that shoots confetti!
        </button>
        <div style={{"color":"white"}}>
          <br/><br/>This is a button that shoots confetti!
          <br/><br/>This is a button that shoots confetti!
          <br/><br/>This is a button that shoots confetti!
          <br/><br/>
        </div>
        <br/>
        <button  onClick={() => cashMoney()} >
          This is a button that shoots confetti!
        </button>
      </div>
    </div>
  );
}

export default App;
