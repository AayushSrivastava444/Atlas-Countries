import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Countries from './Pages/Countries';
import Contact from './Pages/Contact';


function App(){
  return(
  <Router>
    <Header/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Countries" element={<Countries/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>

  </Router>
  );
}

export default App;