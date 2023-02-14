import React, { useState } from "react";


const App = () => {
  const color = "blanchedalmond";
  const [bg,setBg] = useState(color);
  const [name,setName] = useState("Click Me");
  
  const bgChange = () => {
  setBg("orange");
  setName("Ouch 😱");
  }
  
  const bgSecond = () => {
   setBg("black");
   setName("Yippeee Yoo 😁");
  }
  return(
   <>
    <div style={ { backgroundColor: bg } }>
      <button className="btn" onClick={bgChange} onDoubleClick={bgSecond} >{name}</button>
    </div>
   </>
  );
}


export default App;