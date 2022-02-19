//Baseline
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//CSS
import './App.css';
import './fonts.css';



// import { ThemeProvider } from "./Components/Hooks/ThemeContext";

//Components

import Pagelinks from './Components/Pagelinks';
import Projects from './Components/Projects';

export const ThemeContext = React.createContext()

export default function App() {
  
  const [pathname, setPathname] = useState(true);
  const location = useLocation();
 
  useEffect(() => {  setPathname(location.pathname)  }, [location]);
    
  return (
      <>
    <ThemeContext.Provider value={pathname}>
          <Pagelinks id="homepage" />
          <Projects />
      </ThemeContext.Provider>
      </>
    );
  }