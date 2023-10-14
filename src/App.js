import React from "react";
import ColorPicker from "./components/ColorPicker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{backgroundColor:"#dda0dd",height:"100vh"}}>
      <h1 className="text-center" style={{position:"relative",top:"30px",fontWeight:"bold"}}>Color Picker</h1>
      <ColorPicker colors={['red', 'green', 'blue', 'yellow', '#FF03EF', '#03E7FF','#FFA303','#730080','#FFDDE3','#1A8300','#FF7700','#1F6BAE','#F3DC44']} />
    </div>
  );
}

export default App;

