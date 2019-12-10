import React, { useState, useEffect } from 'react';
import './App.css';
import confetti from 'canvas-confetti'

function App() {
  const [showDialog, setDialog] = useState(true);

  const [numFound, setNumFound] = useState(0);
  const [count, setCount] = useState(0);

  const [searchTerm, searchTermSet] = useState('')

  useEffect(() => {
   if (searchTerm === '') {
      setCount(0)
      setNumFound(0)
      return
   }
    const timeout = setTimeout(() => {
      tagSearch(searchTerm)
    }, 1000) //1000 - timeout to execute this function if timeout will be not cleared

    return () => clearTimeout(timeout) //clear timeout (delete function execution)
  }, [searchTerm])

  // API call only one time in 2 seconds for the last value! Yeeeee
  async function tagSearch(value) {
    firstSearch(value)
  }

  function firstSearch(text) {
    const searchValue = RegExp(`[^<^/]${text}`,'gi')
    var matches = document.body.children.root.innerHTML.match(searchValue);
    var countMatches = matches ? (setCount(count+1), matches.length) : 0;
    setNumFound(countMatches-1)
    
    window.find(text, false, false, true, false, false, false, true); 
  }
  function secondSearchReverse(text) {
    window.find(text, false, true, true, false, false, false, true); 
    if(count === 0){ 
              setCount(numFound) 
    } else {  setCount(count-1) }
  }
  function secondSearch(text) {
    window.find(text, false, false, true, false, false, false, true); 
    if(count === numFound){ 
              setCount(0) 
    } else {  setCount(count+1) }
  }

  function closeDialog(){
    setDialog(false)
  }
  function openDialog(){
    setDialog(true)
  }

  function handleInput(e) { // https://www.w3schools.com/charsets/ref_html_ascii.asp

    // left and right arrow disabled. // should also disable cmd, opt, shift, ctrl, fn, caps, tab
    if(e.keyCode === 37 || e.keyCode === 39){  
      return
    }
    else if (e.keyCode === 38) {
      secondSearchReverse(searchTerm)
    }
    else if (e.keyCode === 40) {
      secondSearch(searchTerm)
    }
    else if (e.charCode === 13) {
      secondSearch(searchTerm)
    }
    else {
      searchTermSet(e.target.value)
    }
  }
  
  function cashMoney(){
    confetti({
      particleCount: 100,
      spread: 70,
      origin: {
          y: 0.6
      }
    });
  }
  return (
    <div className="App" >
      <br/>
      { showDialog ?
      <dialog open={undefined} className="box flex-items-center mimmic-google-search">
        <input autoFocus value={searchTerm} onChange={handleInput} onKeyPress={handleInput} onKeyDown={handleInput} className="google-input"></input>
        {count}/{numFound}
        <div className="flex-items-center google-extras" >
          <div className="ml3 vertical-bar" ></div>
          <i onClick={()=>alert('disabled')} className="pl13 fas fa-chevron-up fa-m"></i>
          <i onClick={()=>alert('disabled')} className="pl13 fas fa-chevron-down fa-m"></i>
          <i onClick={async()=>closeDialog()} className="pl13 pr2 fas fa-times fa-m"></i>
        </div>
      </dialog>
      : <button onClick={() => openDialog()}>search</button>
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
          <br/><br/>This is a button that shoots confetti, (incorrect)!
          <br/><br/>This is a button that shoots confetti, (incorrect)!
          <br/><br/>This is a button that shoots confetti, (incorrect)!
          <br/><br/>
        </div>
        <br/>
      </div>
    </div>
  );
}

export default App;
