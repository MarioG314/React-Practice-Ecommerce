import React from "react";
import Main from "../src/pages/Main";
import {BrowserRouter} from 'react-router-dom'

function App() {
  // Zona JS
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
