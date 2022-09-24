import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const StyledImg = styled(GatsbyImage)`
  height: 300px;
  width: 100%;
  
`;

export const Wrapper = styled.div`
  position: relative;
  
`

export const HeroWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  p {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }
`
