import styled from 'styled-components';


export const StyledProductListingPage = styled.section`
  height: 100%;
  margin: 80px 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  grid-row-gap: 103px;
  grid-column-gap: 40px;
`;

export const StyledAddToCartShorthand = styled.button`
  position: absolute;
  right: 35px;
  bottom: 135px;
  background-color: ${props => props.theme.colors.green};
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
  min-height: 444px;
  min-width: 386px;
  padding: 16px;
  
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
  min-height: 444px;
  min-width: 386px;
  opacity: 0.5;
  padding: 16px;

`;

export const StyledProductListingPageImg = styled.div<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-color: ${props => props.theme.colors.white};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 70%;
  box-sizing: border-box;
`;

export const StyledProductListingPageItemDetails = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 24px;
`;

export const StyledBrandAndName = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  color: ${props => props.theme.colors.black};
`;

export const StyledPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  color: ${props => props.theme.colors.black};
`;

export const StyledProductListingPageOutOfStockImg = styled.div<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-color: ${props => props.theme.colors.white};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 70%;
  box-sizing: border-box;
`;

export const StyledProductListingPageTitle = styled.header`
  display: inline-block;
  width: 100%;
  grid-column: 1 / span 3;
  grid-row: 1 /span 1;

  
  & h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 160%;
    text-transform: capitalize;
  }
`;

export const StyledOutOfStock = styled.p`
  position:absolute;
  padding:0;
  margin: 0;
  top: calc(50% - 85px);
  left: calc(50% - 82px);
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
`;

export const StyledAddToCartShorthandIcon = styled.img`
  filter: brightness(0) invert(1);
`;