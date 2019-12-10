import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import confetti from 'canvas-confetti'

function App() {
  const [numFound, setNumFound] = useState(0);
  const [count, setCount] = useState(0);
  const [showDialog, setDialog] = useState(true);
  const [searchString, setSearchString] = useState('');
  const [searchTerm, searchTermSet] = useState('')
  const isFirstRun = useRef(true)

  useEffect(() => {
   //skip first run on component mount
   if (isFirstRun.current) {
      isFirstRun.current = false
      return
   }

    const timeout = setTimeout(() => {
      tagSearch(searchTerm)
    }, 1000) //2000 - timeout to execute this function if timeout will be not cleared

    return () => clearTimeout(timeout) //clear timeout (delete function execution)
  }, [searchTerm])

  // API call only one time in 2 seconds for the last value! Yeeeee
  async function tagSearch(value) {
    setSearchString(value)
    firstSearch(value)
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
  function firstSearch(text) {
    const searchValue = RegExp(`[^<^/]${text}`,'gi')
    var matches = document.body.children.root.innerHTML.match(searchValue);
    var countMatches = matches ? matches.length : 0;
    setNumFound(countMatches)
    setCount(count+1)
    console.log({count, money: document.body.children.root.innerHTML})
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
    if(count === numFound-1){ 
              setCount(0) 
    } else {  setCount(count+1) }
  }

  function closeDialog(){
    setDialog(false)
  }
  function openDialog(){
    setDialog(true)
  }

  function handleInput(e) {
    console.log(e.target.value, e.keyCode)
    // https://www.w3schools.com/charsets/ref_html_ascii.asp
    if(e.keyCode === 37 || e.keyCode === 39){
      // left and right arrow disabled. // should also disable cmd, opt, shift, ctrl, fn, caps, tab
      return
    }
    else if (e.keyCode === 38) {
      secondSearchReverse(searchString)
    }
    else if (e.keyCode === 40) {
      secondSearch(searchString)
    }
    else if (e.charCode === 13) {
      secondSearch(searchString)
    }
    else {
      searchTermSet(e.target.value)
    }
    

  }
  
    
  return (
    <div className="App" >
      <button onClick={() => openDialog()}>
        search
      </button>
      { showDialog ?
      <dialog open={undefined} className="box flex-items-center mimmic-google-search">
        <input autoFocus value={searchTerm} onChange={handleInput} onKeyPress={handleInput} onKeyDown={handleInput} className="google-input"></input>
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
