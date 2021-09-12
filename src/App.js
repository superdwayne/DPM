import './App.css';
import React, { useRef, useEffect, useState} from 'react'
import Video from './Components/Kids';
import Threedee from './Components/Threedee';
import { useMediaQuery } from 'react-responsive'

import {
  BrowserRouter as Router,
  Link, Switch, Route,
} from "react-router-dom";

import Modal from 'react-modal';
import Pagelinks from './Components/Pagelinks';
import Website from './Components/Websites';
import Applications from './Components/Applications';
import Interactive from './Components/interactiveemails';
import Playground from './Components/Playground';



// const MediaQuery = () => {
//   const isDesktopOrLaptop = useMediaQuery({
//     query: '(min-width: 1224px)'
//   })
//   const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
//   const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
//   const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
//   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

//   return <div>
//     <h1>Device Test!</h1>
//     {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
//     {isBigScreen && <p>You  have a huge screen</p>}
//     {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
//     <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
//     {isRetina && <p>You are retina</p>}
//   </div>
// }

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


function Modalfunction(){

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="fixedDPM" onClick={openModal}>Let's get personal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <section className="flex">
          <section className="metaverse">
                <svg className="avatar" xmlns="http://www.w3.org/2000/svg" version="1.1" width="300px" height="300px" viewBox="0 0 180 180"><defs><rect id="r0" width="6" height="6" fill="#000000"></rect></defs><rect x="0" y="0" width="180" height="180" fill="#fefefe"></rect><use x="3" y="3" xlinkHref="#r0"></use><use x="9" y="3" xlinkHref="#r0"></use><use x="15" y="3" xlinkHref="#r0"></use><use x="21" y="3" xlinkHref="#r0"></use><use x="27" y="3" xlinkHref="#r0"></use><use x="33" y="3" xlinkHref="#r0"></use><use x="39" y="3" xlinkHref="#r0"></use><use x="51" y="3" xlinkHref="#r0"></use><use x="57" y="3" xlinkHref="#r0"></use><use x="87" y="3" xlinkHref="#r0"></use><use x="105" y="3" xlinkHref="#r0"></use><use x="111" y="3" xlinkHref="#r0"></use><use x="117" y="3" xlinkHref="#r0"></use><use x="123" y="3" xlinkHref="#r0"></use><use x="135" y="3" xlinkHref="#r0"></use><use x="141" y="3" xlinkHref="#r0"></use><use x="147" y="3" xlinkHref="#r0"></use><use x="153" y="3" xlinkHref="#r0"></use><use x="159" y="3" xlinkHref="#r0"></use><use x="165" y="3" xlinkHref="#r0"></use><use x="171" y="3" xlinkHref="#r0"></use><use x="3" y="9" xlinkHref="#r0"></use><use x="39" y="9" xlinkHref="#r0"></use><use x="99" y="9" xlinkHref="#r0"></use><use x="111" y="9" xlinkHref="#r0"></use><use x="135" y="9" xlinkHref="#r0"></use><use x="171" y="9" xlinkHref="#r0"></use><use x="3" y="15" xlinkHref="#r0"></use><use x="15" y="15" xlinkHref="#r0"></use><use x="21" y="15" xlinkHref="#r0"></use><use x="27" y="15" xlinkHref="#r0"></use><use x="39" y="15" xlinkHref="#r0"></use><use x="51" y="15" xlinkHref="#r0"></use><use x="69" y="15" xlinkHref="#r0"></use><use x="75" y="15" xlinkHref="#r0"></use><use x="81" y="15" xlinkHref="#r0"></use><use x="93" y="15" xlinkHref="#r0"></use><use x="111" y="15" xlinkHref="#r0"></use><use x="135" y="15" xlinkHref="#r0"></use><use x="147" y="15" xlinkHref="#r0"></use><use x="153" y="15" xlinkHref="#r0"></use><use x="159" y="15" xlinkHref="#r0"></use><use x="171" y="15" xlinkHref="#r0"></use><use x="3" y="21" xlinkHref="#r0"></use><use x="15" y="21" xlinkHref="#r0"></use><use x="21" y="21" xlinkHref="#r0"></use><use x="27" y="21" xlinkHref="#r0"></use><use x="39" y="21" xlinkHref="#r0"></use><use x="51" y="21" xlinkHref="#r0"></use><use x="57" y="21" xlinkHref="#r0"></use><use x="69" y="21" xlinkHref="#r0"></use><use x="81" y="21" xlinkHref="#r0"></use><use x="93" y="21" xlinkHref="#r0"></use><use x="99" y="21" xlinkHref="#r0"></use><use x="105" y="21" xlinkHref="#r0"></use><use x="135" y="21" xlinkHref="#r0"></use><use x="147" y="21" xlinkHref="#r0"></use><use x="153" y="21" xlinkHref="#r0"></use><use x="159" y="21" xlinkHref="#r0"></use><use x="171" y="21" xlinkHref="#r0"></use><use x="3" y="27" xlinkHref="#r0"></use><use x="15" y="27" xlinkHref="#r0"></use><use x="21" y="27" xlinkHref="#r0"></use><use x="27" y="27" xlinkHref="#r0"></use><use x="39" y="27" xlinkHref="#r0"></use><use x="51" y="27" xlinkHref="#r0"></use><use x="57" y="27" xlinkHref="#r0"></use><use x="63" y="27" xlinkHref="#r0"></use><use x="69" y="27" xlinkHref="#r0"></use><use x="81" y="27" xlinkHref="#r0"></use><use x="93" y="27" xlinkHref="#r0"></use><use x="117" y="27" xlinkHref="#r0"></use><use x="135" y="27" xlinkHref="#r0"></use><use x="147" y="27" xlinkHref="#r0"></use><use x="153" y="27" xlinkHref="#r0"></use><use x="159" y="27" xlinkHref="#r0"></use><use x="171" y="27" xlinkHref="#r0"></use><use x="3" y="33" xlinkHref="#r0"></use><use x="39" y="33" xlinkHref="#r0"></use><use x="57" y="33" xlinkHref="#r0"></use><use x="75" y="33" xlinkHref="#r0"></use><use x="87" y="33" xlinkHref="#r0"></use><use x="111" y="33" xlinkHref="#r0"></use><use x="117" y="33" xlinkHref="#r0"></use><use x="135" y="33" xlinkHref="#r0"></use><use x="171" y="33" xlinkHref="#r0"></use><use x="3" y="39" xlinkHref="#r0"></use><use x="9" y="39" xlinkHref="#r0"></use><use x="15" y="39" xlinkHref="#r0"></use><use x="21" y="39" xlinkHref="#r0"></use><use x="27" y="39" xlinkHref="#r0"></use><use x="33" y="39" xlinkHref="#r0"></use><use x="39" y="39" xlinkHref="#r0"></use><use x="51" y="39" xlinkHref="#r0"></use><use x="63" y="39" xlinkHref="#r0"></use><use x="75" y="39" xlinkHref="#r0"></use><use x="87" y="39" xlinkHref="#r0"></use><use x="99" y="39" xlinkHref="#r0"></use><use x="111" y="39" xlinkHref="#r0"></use><use x="123" y="39" xlinkHref="#r0"></use><use x="135" y="39" xlinkHref="#r0"></use><use x="141" y="39" xlinkHref="#r0"></use><use x="147" y="39" xlinkHref="#r0"></use><use x="153" y="39" xlinkHref="#r0"></use><use x="159" y="39" xlinkHref="#r0"></use><use x="165" y="39" xlinkHref="#r0"></use><use x="171" y="39" xlinkHref="#r0"></use><use x="57" y="45" xlinkHref="#r0"></use><use x="69" y="45" xlinkHref="#r0"></use><use x="93" y="45" xlinkHref="#r0"></use><use x="99" y="45" xlinkHref="#r0"></use><use x="105" y="45" xlinkHref="#r0"></use><use x="111" y="45" xlinkHref="#r0"></use><use x="117" y="45" xlinkHref="#r0"></use><use x="3" y="51" xlinkHref="#r0"></use><use x="9" y="51" xlinkHref="#r0"></use><use x="15" y="51" xlinkHref="#r0"></use><use x="21" y="51" xlinkHref="#r0"></use><use x="39" y="51" xlinkHref="#r0"></use><use x="51" y="51" xlinkHref="#r0"></use><use x="87" y="51" xlinkHref="#r0"></use><use x="105" y="51" xlinkHref="#r0"></use><use x="129" y="51" xlinkHref="#r0"></use><use x="147" y="51" xlinkHref="#r0"></use><use x="153" y="51" xlinkHref="#r0"></use><use x="159" y="51" xlinkHref="#r0"></use><use x="171" y="51" xlinkHref="#r0"></use><use x="3" y="57" xlinkHref="#r0"></use><use x="9" y="57" xlinkHref="#r0"></use><use x="15" y="57" xlinkHref="#r0"></use><use x="33" y="57" xlinkHref="#r0"></use><use x="45" y="57" xlinkHref="#r0"></use><use x="57" y="57" xlinkHref="#r0"></use><use x="105" y="57" xlinkHref="#r0"></use><use x="111" y="57" xlinkHref="#r0"></use><use x="117" y="57" xlinkHref="#r0"></use><use x="129" y="57" xlinkHref="#r0"></use><use x="135" y="57" xlinkHref="#r0"></use><use x="141" y="57" xlinkHref="#r0"></use><use x="147" y="57" xlinkHref="#r0"></use><use x="171" y="57" xlinkHref="#r0"></use><use x="9" y="63" xlinkHref="#r0"></use><use x="27" y="63" xlinkHref="#r0"></use><use x="39" y="63" xlinkHref="#r0"></use><use x="45" y="63" xlinkHref="#r0"></use><use x="51" y="63" xlinkHref="#r0"></use><use x="87" y="63" xlinkHref="#r0"></use><use x="99" y="63" xlinkHref="#r0"></use><use x="111" y="63" xlinkHref="#r0"></use><use x="123" y="63" xlinkHref="#r0"></use><use x="129" y="63" xlinkHref="#r0"></use><use x="135" y="63" xlinkHref="#r0"></use><use x="141" y="63" xlinkHref="#r0"></use><use x="159" y="63" xlinkHref="#r0"></use><use x="165" y="63" xlinkHref="#r0"></use><use x="3" y="69" xlinkHref="#r0"></use><use x="9" y="69" xlinkHref="#r0"></use><use x="15" y="69" xlinkHref="#r0"></use><use x="21" y="69" xlinkHref="#r0"></use><use x="27" y="69" xlinkHref="#r0"></use><use x="51" y="69" xlinkHref="#r0"></use><use x="69" y="69" xlinkHref="#r0"></use><use x="75" y="69" xlinkHref="#r0"></use><use x="81" y="69" xlinkHref="#r0"></use><use x="87" y="69" xlinkHref="#r0"></use><use x="99" y="69" xlinkHref="#r0"></use><use x="111" y="69" xlinkHref="#r0"></use><use x="123" y="69" xlinkHref="#r0"></use><use x="129" y="69" xlinkHref="#r0"></use><use x="135" y="69" xlinkHref="#r0"></use><use x="141" y="69" xlinkHref="#r0"></use><use x="171" y="69" xlinkHref="#r0"></use><use x="3" y="75" xlinkHref="#r0"></use><use x="9" y="75" xlinkHref="#r0"></use><use x="21" y="75" xlinkHref="#r0"></use><use x="39" y="75" xlinkHref="#r0"></use><use x="45" y="75" xlinkHref="#r0"></use><use x="51" y="75" xlinkHref="#r0"></use><use x="57" y="75" xlinkHref="#r0"></use><use x="69" y="75" xlinkHref="#r0"></use><use x="81" y="75" xlinkHref="#r0"></use><use x="87" y="75" xlinkHref="#r0"></use><use x="93" y="75" xlinkHref="#r0"></use><use x="99" y="75" xlinkHref="#r0"></use><use x="105" y="75" xlinkHref="#r0"></use><use x="111" y="75" xlinkHref="#r0"></use><use x="117" y="75" xlinkHref="#r0"></use><use x="141" y="75" xlinkHref="#r0"></use><use x="153" y="75" xlinkHref="#r0"></use><use x="159" y="75" xlinkHref="#r0"></use><use x="3" y="81" xlinkHref="#r0"></use><use x="9" y="81" xlinkHref="#r0"></use><use x="15" y="81" xlinkHref="#r0"></use><use x="21" y="81" xlinkHref="#r0"></use><use x="27" y="81" xlinkHref="#r0"></use><use x="33" y="81" xlinkHref="#r0"></use><use x="63" y="81" xlinkHref="#r0"></use><use x="69" y="81" xlinkHref="#r0"></use><use x="93" y="81" xlinkHref="#r0"></use><use x="105" y="81" xlinkHref="#r0"></use><use x="111" y="81" xlinkHref="#r0"></use><use x="117" y="81" xlinkHref="#r0"></use><use x="135" y="81" xlinkHref="#r0"></use><use x="159" y="81" xlinkHref="#r0"></use><use x="165" y="81" xlinkHref="#r0"></use><use x="171" y="81" xlinkHref="#r0"></use><use x="3" y="87" xlinkHref="#r0"></use><use x="9" y="87" xlinkHref="#r0"></use><use x="21" y="87" xlinkHref="#r0"></use><use x="33" y="87" xlinkHref="#r0"></use><use x="39" y="87" xlinkHref="#r0"></use><use x="45" y="87" xlinkHref="#r0"></use><use x="51" y="87" xlinkHref="#r0"></use><use x="63" y="87" xlinkHref="#r0"></use><use x="75" y="87" xlinkHref="#r0"></use><use x="105" y="87" xlinkHref="#r0"></use><use x="117" y="87" xlinkHref="#r0"></use><use x="123" y="87" xlinkHref="#r0"></use><use x="135" y="87" xlinkHref="#r0"></use><use x="147" y="87" xlinkHref="#r0"></use><use x="159" y="87" xlinkHref="#r0"></use><use x="165" y="87" xlinkHref="#r0"></use><use x="171" y="87" xlinkHref="#r0"></use><use x="9" y="93" xlinkHref="#r0"></use><use x="15" y="93" xlinkHref="#r0"></use><use x="21" y="93" xlinkHref="#r0"></use><use x="27" y="93" xlinkHref="#r0"></use><use x="45" y="93" xlinkHref="#r0"></use><use x="75" y="93" xlinkHref="#r0"></use><use x="99" y="93" xlinkHref="#r0"></use><use x="147" y="93" xlinkHref="#r0"></use><use x="165" y="93" xlinkHref="#r0"></use><use x="3" y="99" xlinkHref="#r0"></use><use x="9" y="99" xlinkHref="#r0"></use><use x="15" y="99" xlinkHref="#r0"></use><use x="39" y="99" xlinkHref="#r0"></use><use x="45" y="99" xlinkHref="#r0"></use><use x="51" y="99" xlinkHref="#r0"></use><use x="57" y="99" xlinkHref="#r0"></use><use x="69" y="99" xlinkHref="#r0"></use><use x="81" y="99" xlinkHref="#r0"></use><use x="87" y="99" xlinkHref="#r0"></use><use x="93" y="99" xlinkHref="#r0"></use><use x="111" y="99" xlinkHref="#r0"></use><use x="123" y="99" xlinkHref="#r0"></use><use x="129" y="99" xlinkHref="#r0"></use><use x="147" y="99" xlinkHref="#r0"></use><use x="153" y="99" xlinkHref="#r0"></use><use x="165" y="99" xlinkHref="#r0"></use><use x="9" y="105" xlinkHref="#r0"></use><use x="15" y="105" xlinkHref="#r0"></use><use x="33" y="105" xlinkHref="#r0"></use><use x="57" y="105" xlinkHref="#r0"></use><use x="63" y="105" xlinkHref="#r0"></use><use x="75" y="105" xlinkHref="#r0"></use><use x="87" y="105" xlinkHref="#r0"></use><use x="93" y="105" xlinkHref="#r0"></use><use x="99" y="105" xlinkHref="#r0"></use><use x="123" y="105" xlinkHref="#r0"></use><use x="141" y="105" xlinkHref="#r0"></use><use x="153" y="105" xlinkHref="#r0"></use><use x="159" y="105" xlinkHref="#r0"></use><use x="165" y="105" xlinkHref="#r0"></use><use x="3" y="111" xlinkHref="#r0"></use><use x="15" y="111" xlinkHref="#r0"></use><use x="21" y="111" xlinkHref="#r0"></use><use x="33" y="111" xlinkHref="#r0"></use><use x="39" y="111" xlinkHref="#r0"></use><use x="51" y="111" xlinkHref="#r0"></use><use x="57" y="111" xlinkHref="#r0"></use><use x="63" y="111" xlinkHref="#r0"></use><use x="69" y="111" xlinkHref="#r0"></use><use x="75" y="111" xlinkHref="#r0"></use><use x="87" y="111" xlinkHref="#r0"></use><use x="93" y="111" xlinkHref="#r0"></use><use x="123" y="111" xlinkHref="#r0"></use><use x="141" y="111" xlinkHref="#r0"></use><use x="147" y="111" xlinkHref="#r0"></use><use x="159" y="111" xlinkHref="#r0"></use><use x="15" y="117" xlinkHref="#r0"></use><use x="21" y="117" xlinkHref="#r0"></use><use x="33" y="117" xlinkHref="#r0"></use><use x="45" y="117" xlinkHref="#r0"></use><use x="51" y="117" xlinkHref="#r0"></use><use x="57" y="117" xlinkHref="#r0"></use><use x="63" y="117" xlinkHref="#r0"></use><use x="75" y="117" xlinkHref="#r0"></use><use x="99" y="117" xlinkHref="#r0"></use><use x="105" y="117" xlinkHref="#r0"></use><use x="123" y="117" xlinkHref="#r0"></use><use x="129" y="117" xlinkHref="#r0"></use><use x="135" y="117" xlinkHref="#r0"></use><use x="141" y="117" xlinkHref="#r0"></use><use x="159" y="117" xlinkHref="#r0"></use><use x="9" y="123" xlinkHref="#r0"></use><use x="15" y="123" xlinkHref="#r0"></use><use x="27" y="123" xlinkHref="#r0"></use><use x="33" y="123" xlinkHref="#r0"></use><use x="39" y="123" xlinkHref="#r0"></use><use x="45" y="123" xlinkHref="#r0"></use><use x="57" y="123" xlinkHref="#r0"></use><use x="63" y="123" xlinkHref="#r0"></use><use x="69" y="123" xlinkHref="#r0"></use><use x="75" y="123" xlinkHref="#r0"></use><use x="87" y="123" xlinkHref="#r0"></use><use x="93" y="123" xlinkHref="#r0"></use><use x="99" y="123" xlinkHref="#r0"></use><use x="105" y="123" xlinkHref="#r0"></use><use x="111" y="123" xlinkHref="#r0"></use><use x="123" y="123" xlinkHref="#r0"></use><use x="129" y="123" xlinkHref="#r0"></use><use x="135" y="123" xlinkHref="#r0"></use><use x="141" y="123" xlinkHref="#r0"></use><use x="147" y="123" xlinkHref="#r0"></use><use x="153" y="123" xlinkHref="#r0"></use><use x="159" y="123" xlinkHref="#r0"></use><use x="51" y="129" xlinkHref="#r0"></use><use x="75" y="129" xlinkHref="#r0"></use><use x="81" y="129" xlinkHref="#r0"></use><use x="99" y="129" xlinkHref="#r0"></use><use x="105" y="129" xlinkHref="#r0"></use><use x="111" y="129" xlinkHref="#r0"></use><use x="123" y="129" xlinkHref="#r0"></use><use x="147" y="129" xlinkHref="#r0"></use><use x="153" y="129" xlinkHref="#r0"></use><use x="159" y="129" xlinkHref="#r0"></use><use x="165" y="129" xlinkHref="#r0"></use><use x="171" y="129" xlinkHref="#r0"></use><use x="3" y="135" xlinkHref="#r0"></use><use x="9" y="135" xlinkHref="#r0"></use><use x="15" y="135" xlinkHref="#r0"></use><use x="21" y="135" xlinkHref="#r0"></use><use x="27" y="135" xlinkHref="#r0"></use><use x="33" y="135" xlinkHref="#r0"></use><use x="39" y="135" xlinkHref="#r0"></use><use x="69" y="135" xlinkHref="#r0"></use><use x="75" y="135" xlinkHref="#r0"></use><use x="81" y="135" xlinkHref="#r0"></use><use x="99" y="135" xlinkHref="#r0"></use><use x="105" y="135" xlinkHref="#r0"></use><use x="111" y="135" xlinkHref="#r0"></use><use x="117" y="135" xlinkHref="#r0"></use><use x="123" y="135" xlinkHref="#r0"></use><use x="135" y="135" xlinkHref="#r0"></use><use x="147" y="135" xlinkHref="#r0"></use><use x="153" y="135" xlinkHref="#r0"></use><use x="165" y="135" xlinkHref="#r0"></use><use x="3" y="141" xlinkHref="#r0"></use><use x="39" y="141" xlinkHref="#r0"></use><use x="57" y="141" xlinkHref="#r0"></use><use x="81" y="141" xlinkHref="#r0"></use><use x="87" y="141" xlinkHref="#r0"></use><use x="111" y="141" xlinkHref="#r0"></use><use x="123" y="141" xlinkHref="#r0"></use><use x="147" y="141" xlinkHref="#r0"></use><use x="153" y="141" xlinkHref="#r0"></use><use x="165" y="141" xlinkHref="#r0"></use><use x="3" y="147" xlinkHref="#r0"></use><use x="15" y="147" xlinkHref="#r0"></use><use x="21" y="147" xlinkHref="#r0"></use><use x="27" y="147" xlinkHref="#r0"></use><use x="39" y="147" xlinkHref="#r0"></use><use x="75" y="147" xlinkHref="#r0"></use><use x="81" y="147" xlinkHref="#r0"></use><use x="87" y="147" xlinkHref="#r0"></use><use x="93" y="147" xlinkHref="#r0"></use><use x="105" y="147" xlinkHref="#r0"></use><use x="123" y="147" xlinkHref="#r0"></use><use x="129" y="147" xlinkHref="#r0"></use><use x="135" y="147" xlinkHref="#r0"></use><use x="141" y="147" xlinkHref="#r0"></use><use x="147" y="147" xlinkHref="#r0"></use><use x="159" y="147" xlinkHref="#r0"></use><use x="165" y="147" xlinkHref="#r0"></use><use x="171" y="147" xlinkHref="#r0"></use><use x="3" y="153" xlinkHref="#r0"></use><use x="15" y="153" xlinkHref="#r0"></use><use x="21" y="153" xlinkHref="#r0"></use><use x="27" y="153" xlinkHref="#r0"></use><use x="39" y="153" xlinkHref="#r0"></use><use x="51" y="153" xlinkHref="#r0"></use><use x="63" y="153" xlinkHref="#r0"></use><use x="69" y="153" xlinkHref="#r0"></use><use x="75" y="153" xlinkHref="#r0"></use><use x="81" y="153" xlinkHref="#r0"></use><use x="87" y="153" xlinkHref="#r0"></use><use x="93" y="153" xlinkHref="#r0"></use><use x="99" y="153" xlinkHref="#r0"></use><use x="117" y="153" xlinkHref="#r0"></use><use x="129" y="153" xlinkHref="#r0"></use><use x="141" y="153" xlinkHref="#r0"></use><use x="147" y="153" xlinkHref="#r0"></use><use x="153" y="153" xlinkHref="#r0"></use><use x="171" y="153" xlinkHref="#r0"></use><use x="3" y="159" xlinkHref="#r0"></use><use x="15" y="159" xlinkHref="#r0"></use><use x="21" y="159" xlinkHref="#r0"></use><use x="27" y="159" xlinkHref="#r0"></use><use x="39" y="159" xlinkHref="#r0"></use><use x="51" y="159" xlinkHref="#r0"></use><use x="63" y="159" xlinkHref="#r0"></use><use x="69" y="159" xlinkHref="#r0"></use><use x="87" y="159" xlinkHref="#r0"></use><use x="99" y="159" xlinkHref="#r0"></use><use x="105" y="159" xlinkHref="#r0"></use><use x="111" y="159" xlinkHref="#r0"></use><use x="117" y="159" xlinkHref="#r0"></use><use x="141" y="159" xlinkHref="#r0"></use><use x="159" y="159" xlinkHref="#r0"></use><use x="171" y="159" xlinkHref="#r0"></use><use x="3" y="165" xlinkHref="#r0"></use><use x="39" y="165" xlinkHref="#r0"></use><use x="51" y="165" xlinkHref="#r0"></use><use x="57" y="165" xlinkHref="#r0"></use><use x="69" y="165" xlinkHref="#r0"></use><use x="93" y="165" xlinkHref="#r0"></use><use x="99" y="165" xlinkHref="#r0"></use><use x="123" y="165" xlinkHref="#r0"></use><use x="129" y="165" xlinkHref="#r0"></use><use x="135" y="165" xlinkHref="#r0"></use><use x="141" y="165" xlinkHref="#r0"></use><use x="153" y="165" xlinkHref="#r0"></use><use x="165" y="165" xlinkHref="#r0"></use><use x="3" y="171" xlinkHref="#r0"></use><use x="9" y="171" xlinkHref="#r0"></use><use x="15" y="171" xlinkHref="#r0"></use><use x="21" y="171" xlinkHref="#r0"></use><use x="27" y="171" xlinkHref="#r0"></use><use x="33" y="171" xlinkHref="#r0"></use><use x="39" y="171" xlinkHref="#r0"></use><use x="51" y="171" xlinkHref="#r0"></use><use x="87" y="171" xlinkHref="#r0"></use><use x="111" y="171" xlinkHref="#r0"></use><use x="117" y="171" xlinkHref="#r0"></use><use x="123" y="171" xlinkHref="#r0"></use><use x="129" y="171" xlinkHref="#r0"></use><use x="141" y="171" xlinkHref="#r0"></use><use x="165" y="171" xlinkHref="#r0"></use>
                </svg>

          </section>
            <section className="about">
            <h1>About me</h1>
            <p>I'm a fun guy, I really enjoy getting to know all types of people! <br /> Always up for a challange, currently I'm obsessed with 3D </p>
            <h1>What I enjoy doing</h1>
            <p>I'm skilled in UX/UI, Javascript (front - React) (back - Node)<br /> so I often day dreaming about API's and immerservie 3D expereinces<br /> using Three.js, Blender or Areo(AR)</p> 
            <p>I enjoy playing with different creative techniques/technologies<br /> with a test and learn approach. </p>
             <h1>Where to find me</h1> 
             <a href="https://www.linkedin.com/in/ddpmarshall/">linkedin</a> | <a href="https://www.instagram.com/ddpmarshall/">Instagram</a> | Scan the QR code and I'll be with you shortly 
            </section>
         </section>
      </Modal>
    </div>
  );
}


export default function App() {
    return (
      <>
      <Router>
        <Switch>
          <Route exact path="/">
          <section className="intro twinkling">
              <section className="intro-copy">
                  <h1>Dwayne Paisley-Marshall</h1>
                  <h2>Creative Technologist</h2>
              </section>  
              <Pagelinks />
            </section>
          </Route>
          <Route path="/websites">
            <Website/>
          </Route>
          <Route path="/applications">
            <Applications />
          </Route>
          <Route path="/interactiveemails">
           <Interactive />
          </Route>
          <Route path="/playground">
            <Playground />
          </Route>
        </Switch>
        <Modalfunction />   
        </Router>  
      </>
    );
  }

  