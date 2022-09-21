import React, { useState } from "react";
import Header from "../Header/Header"
import Hamburger from "../Hamburger/Hamburger"
import { GlobalStyles, Primary } from "./Layout.styles"


const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    //toggle menu state
    const handleOverlayMenu = () => setMenuOpen(prev => !prev)

    return (
        //React fragment <> - wont create a DOM element
        <>
            <GlobalStyles />
            <Hamburger handleOverlayMenu={ handleOverlayMenu } />
            <Header />
            <Primary>{children}</Primary>
        </>
    )
}

export default Layout;
