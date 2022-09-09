import styled from "styled-components";


export const StyledProductListingPage = styled.section`
  display: flex;
  flex-flow: row wrap;
`;

export const StyledPLPitem = styled.article`
  display: inline-block;
  background-color: aqua;
  border: 1px solid deepskyblue;
  height: 250px;
  width: 25%;
  margin: 20px;
  padding: 10px;
`;

export const StyledProductListingPageImg = styled.div<{imgSrc: string}>`
  background-image: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 70%;
`;