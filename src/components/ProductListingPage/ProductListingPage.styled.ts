import styled from 'styled-components';


export const StyledProductListingPage = styled.section`
  display: flex;
  flex-flow: row wrap;
`;

export const StyledPLPitem = styled.article`
  position: relative;
  display: inline-block;
  background-color: aqua;
  border: 1px solid deepskyblue;
  height: 250px;
  width: 25%;
  margin: 20px;
  padding: 10px;
`;

export const StyledPLPoutOfStockItem = styled.article`
  display: inline-block;
  background-color: aqua;
  border: 1px solid deepskyblue;
  height: 250px;
  width: 25%;
  margin: 20px;
  padding: 10px;
  opacity: 0.5;
`;

export const StyledProductListingPageImg = styled.div<{ imgSrc: string }>`
  background-image: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 70%;
`;

export const StyledProductListingPageOutOfStockImg = styled.div<{ imgSrc: string }>`
  display: flex;
  background-image: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 70%;
  align-items: center;
  justify-content: center;
`;

export const StyledAddToCartShorthand = styled.button`
  position: absolute;
  right: 15px;
  bottom: 55px;
  display: flex;
  background-color: forestgreen;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  cursor: pointer;
`;
