import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ThemeContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}


export function ThemeProvider({ chlidren }) {
    
    const [pathname, setPathname] = useState(true);
    const location = useLocation();
    useEffect(() => {  setPathname(location.pathname)  }, [location]);

    return (
        <ThemeContext.Provider value={pathname}>
            { chlidren }
        </ThemeContext.Provider>
    )
}