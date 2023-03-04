
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from './components/NavBar';
import Gallery from './components/Gallery';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Gallery />}/>
      <Route path="/mountains" element={<Gallery category="mountain" />}/>
      <Route path="/beaches"  element={<Gallery category="beaches" />}/>
      <Route path="/food"  element={<Gallery category="food" />}/>
      <Route path="/birds"  element={<Gallery category="birds" />}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
