import React, { useState } from 'react';
import './Styles/style1.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import Sem from './components/Sem';
import { BrowserRouter as Router,Routes, Route, Navigate} from 'react-router-dom'; 

const App = () => {
  const [sem,setSem] = useState("I");

  const changeSem = x => {
    setSem(x);
    window.localStorage.setItem("sem",sem);
  }

  return (
    <Router>
      <>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Main cSem={changeSem}/> }></Route>
          <Route exact path='/sem' element={ <Sem /> }></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </>
    </Router>
  )
}

export default App