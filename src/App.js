import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./index.css"
import Animated from "./components/Animated";

function App() {
  return (
    <div className="flex">
      <Router>
          <Animated/>
      </Router>
    </div>
  );
}

export default App;
