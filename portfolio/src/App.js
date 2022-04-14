import React from "react";
import{Routes,Route,} from 'react-router-dom'
import AboutUs from "./Pages/AboutUs";
import GlobalStyles from "./components/GlobalStyle";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Nav/>
      <AboutUs/>

    
    </div>
  );
}

export default App;
