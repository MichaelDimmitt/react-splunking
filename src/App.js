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
      
      <dialog open style={{
        "font-size": "12px",
        "display": "flex",
        "alignItems": "center",
        "MozBoxShadow": "0 0 10px #000000",
        "WebkitBoxShadow": "0 0 10px #000000",
        "boxShadow": "0 0 2px #000000",
        "minWidth":"232px", "width":"40vw", "maxWidth":"327px",
        "border": "none","backgroundColor": "black", "color": "white"}} >
        <input autoFocus style={{ 'paddingRight': '14px', "width":"100%", "outline": "none", "border": "none","backgroundColor": "black", "color": "white"}}></input>
        {count}/{numFound}
        <div style={{ "height": '30px', "alignItems": "center","display":"flex","color": "#acaeb1"}}>
          <div style={{ 'marginLeft': '1rem', 'borderLeft': 'solid 1px #414243', "height": '30px'}}></div>
          <i style={{  }} className="Foo fas fa-chevron-up fa-m"></i>
          <i style={{ }} className="Foo fas fa-chevron-down fa-m"></i>
          <i style={{  'paddingRight': '0.5rem' }} className="Foo fas fa-times fa-m"></i>
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
