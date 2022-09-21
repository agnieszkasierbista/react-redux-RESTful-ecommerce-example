import styled from 'styled-components';


export const StyledProductListingPage = styled.section`
  height: 100%;
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  //grid-template-rows: 10% auto auto;
  justify-content: space-around;
  grid-row-gap: 10px;
`;

export const StyledAddToCartShorthand = styled.button`
  position: absolute;
  right: 15px;
  bottom: 55px;
  background-color :#5ECE7B;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  cursor: pointer;
  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
`;

export const StyledPLPitem = styled.article`
  position: relative;
  display: inline-block;
  //aspect-ratio : 1 / 1
  min-height: 37vh;
  width: 100%;
  
  &:hover {
    box-shadow: 0 4px 35px rgba(168, 172, 176, 0.19);
  }

  ${StyledAddToCartShorthand} {
    display: none;
  }

  &:hover ${StyledAddToCartShorthand} {
    display: flex;
  }
`;

export const StyledPLPoutOfStockItem = styled.article`
  position: relative;
  display: inline-block;
  min-height: 37vh;
  width: 100%;
  opacity: 0.5;
`;

export const StyledProductListingPageImg = styled.div<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  border: 20px solid #FFFFFF;
  width: 100%;
  height: 70%;
  box-sizing: border-box;
`;

export const StyledProductListingPageOutOfStockImg = styled.div<{ imgSrc: string }>`
  display: flex;
  background-image: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  border: 20px solid #FFFFFF;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
`;

export const StyledProductListingPageTitle = styled.header`
  display: inline-block;
  width: 100%;
  padding-left: 0;
  grid-column: 1 / span 3;
  grid-row: 1 /span 1;
  
  & h2 {
    //font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 160%;
    text-transform: capitalize;
    //margin:auto;
  }
`;

export const StyledAddToCartShorthandIcon = styled.img`
  filter: brightness(0) invert(1);
`;