import React from "react"
import { useQuoteQuery } from "../../hooks/useQuoteQuery"
import QuoteImg from "../../images/quote.svg"
import { Wrapper, Content } from "./Quote.styles"

const Quote = () => {
    const data = useQuoteQuery()
    // console.log(data);

    return (
        <Wrapper>
            <Content>
                <img src={ QuoteImg } alt="Quote" />
                <h6>{ data.wpPage.ACF_HomePage.citat1Text }</h6>
            </Content>
        </Wrapper>
    )
}

export default Quote