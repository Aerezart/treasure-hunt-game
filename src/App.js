import { useLayoutEffect, useState } from "react";
import "./App.css";
import Board from "./Board/Board";
import ControlsNav from "./ControlsNav/ControlsNav";

function App() {

  const [windoWidth, setWindoWidth] = useState(window.innerWidth)

  
  useLayoutEffect(() => {
    setWindoWidth(window.innerWidth)
    function updateSize() {
      setWindoWidth(window.innerWidth)
    }
    window.addEventListener("resize", updateSize);
    updateSize();
  }, [window.innerWidth]);


  if(windoWidth<800){
    return (
      <div className="app_mobile">
          <h1>This game is not yet avilable on mobile</h1>
      </div>
    );
  }

  return (
    <div className="app">
      <Board />
      <ControlsNav />
    </div>
  );
}

export default App;
