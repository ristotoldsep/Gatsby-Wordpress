import React, { useState } from "react";
import Header from "../Header/Header"
import Hamburger from "../Hamburger/Hamburger"
import OverlayMenu from "../OverlayMenu/OverlayMenu"
import Footer from "../Footer/Footer"
import { GlobalStyles, Primary } from "./Layout.styles"

//children comes from react, just renders stuff that 
const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    //toggle menu state
    const handleOverlayMenu = () => setMenuOpen(prev => !prev)

    return (
        //React fragment <> - wont create a DOM element
        <>
            <GlobalStyles />
            <Hamburger handleOverlayMenu={ handleOverlayMenu } />
            <OverlayMenu menuOpen={ menuOpen } callback={ handleOverlayMenu } />
            <Header />
            <Primary>{ children }</Primary>
            <Footer />
        </>
    )
}

export default Layout;
