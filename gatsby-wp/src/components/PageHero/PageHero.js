import React from "react"
import {
  StyledImg,
  Wrapper,
  HeroWrapper
} from "./PageHero.styles"

const PageHero = ({ img }) => (
  <>
    <StyledImg image={img} alt="Page Hero" />
    <Wrapper>
      <HeroWrapper>
            {/* <p>Uauuua</p> */}
        </HeroWrapper>
    </Wrapper>
  </>
)

export default PageHero