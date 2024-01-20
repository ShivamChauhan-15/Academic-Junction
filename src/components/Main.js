import React from 'react'
import {Link} from "react-router-dom";

const Main = (props) => {
  const accFun = (e) => {
    e.target.classList.toggle("active");
    console.log(e);
  }
  const change = x => {
      props.cSem(x);
      window.localStorage.setItem("sem",x);
  } 
  
  return (
    <>
    <h1 id='content'>MCA ACADEMIC CONTENT</h1><br />
    <div className='acc' onClick={accFun}>Batch 2022-2024</div>
    <div className='sem'>
      <Link to="/sem" onClick={() => change('I')}><div>Semester 1</div></Link>
      <Link to="/sem" onClick={() => change('II')}><div>Semester 2</div></Link>
    </div>
    </> 
  )
}

export default Main