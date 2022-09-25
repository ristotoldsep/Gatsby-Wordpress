import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./BreadCrumb.styles"

const BreadCrumb = ({ parent, title }) => (
  <Wrapper>
    <Link to="/">
      <span>Home</span>
    </Link>
    <span className="divider">/</span>
    {parent ? (
      <>
        <Link to={parent.uri}>
          <span dangerouslySetInnerHTML={{ __html: parent.title }} />
        </Link>
        <span className="divider">/</span>
      </>
    ) : null}
      {title ? (
        <>
            <span dangerouslySetInnerHTML={{ __html: title }} />
        </>
      ) : null }  

  </Wrapper>
)

export default BreadCrumb
