import React, { useState } from 'react';
import './App.css';
import confetti from 'canvas-confetti'

function App() {
  const [numFound, setNumFound] = useState(0);
  const [count, setCount] = useState(0);

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
  function secondSearch(text) {
    window.find('This is a button', false, false, true, false, false, false, true); 
    if(count === numFound){ 
              setCount(1) 
    } else {  setCount(count+1) }
  }
  
  return (
    <div className="App" >
      <button onClick={() => firstSearch('button')}>
      </button>
      <button onClick={() => secondSearch('button')}>
      </button>
      
      <dialog open className="box flex-items-center mimmic-google-search">
        <input autoFocus className="google-input"></input>
        {count}/{numFound}
        <div className="flex-items-center google-extras" style={{ }}>
          <div className="ml3 vertical-bar" style={{   }}></div>
          <i className="pl13 fas fa-chevron-up fa-m"></i>
          <i className="pl13 fas fa-chevron-down fa-m"></i>
          <i className="pl13 pr2 fas fa-times fa-m"></i>
        </div>
      </dialog>
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
