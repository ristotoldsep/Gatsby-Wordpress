import React from "react"
import { Link } from "gatsby"
import Navigation from "../Navigation/Navigation"
import Logo from "../../images/logo.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Wrapper, Content } from "./Header.styles"

const Header = () => {

    // const data = useMenuQuery()
    // console.log(data) 
    const { site, menu } = useMenuQuery()
    // console.log(site);

    return (
        <Wrapper>
            <Content>
                {/* Only use Link component for  internal links to optimize links */}
                <Link to="/">
                    <img src={Logo} alt={ site.siteMetadata.title } />
                </Link>
                <Navigation menu={ menu.menuItems.nodes } />
            </Content>
        </Wrapper>
    )
}

export default Header