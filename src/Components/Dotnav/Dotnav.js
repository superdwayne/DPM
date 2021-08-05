import React from "react";

import './Dotnav.css'
const Dotnav = ({ onClickfirst, onClicksecond, onClickthird, onClicktforth }) => {

  return (
   <section className="Dotnav mobile-shift" >
   <nav>
       <ul>
           <li onClick={onClickfirst}>3D</li>
           <li onClick={onClicksecond}>Video</li>
           <li onClick={onClicktforth}>Hello</li>
           <li onClick={onClickthird}>Home</li>
       </ul>
   </nav>
    </section>
  );
};

export default Dotnav;