import React, { useState, useEffect, useMemo } from 'react';
import {Link} from "react-router-dom";
import "../Styles/style2.css";
import SubAcc from './SubAcc';
import Material from './Material';


const Sem = () => {
  const [reqData, setReqData] = useState([]);
  const num = window.localStorage.getItem("sem") ? window.localStorage.getItem("sem") : "";

  useEffect(() => {
    if (num==="I") 
      setReqData(Material[0]);
    else if (num==='II') 
      setReqData(Material[1]);
  }, [num]);

  const subAcc = reqData.map((e,i) => {
    return (
      <SubAcc key={i} subName={e.sub} data={e.data}/>
    );
  });
  
  const subName = document.getElementsByClassName("subName");
  useEffect(() => {
    Array.from(subName).forEach(e => e.onclick = (e) => {
      e.target.classList.toggle("active-cards");
    });
  });
  
  const nothing = useMemo(() => {
    console.log("nothing");
    return (
      <>
        <h1 className='cards' style={{color:"rgb(245, 0, 0)", textShadow:"0 0 2px white", fontSize:"1.7rem", fontFamily:"cursive"}}>Somthing Gone Wrong!</h1>
        <Link className='nothing' to={"/"}>Click Here...</Link>
      </>
    );
  }, []);

  return (
    <>
        <main>
            <div className="head-sem">Semester {num}</div>
            {subAcc.length ? subAcc : nothing}
        </main>
    </>
  )
}

export default Sem;