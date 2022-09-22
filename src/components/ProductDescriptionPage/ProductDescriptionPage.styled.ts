import styled from 'styled-components';


export const StyledProductDescriptionPage = styled.article`
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 81px);
  padding: 80px;
  display: flex;
  justify-content: space-around;
`;

export const StyledProductDetails = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const StyledProductDetailsBrand = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  padding-bottom: 12px;
`;

export const StyledProductDetailsName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  padding-bottom: 40px;
`;

export const StyledAttribute = styled.section`
  display: flex;
  flex-flow: column;
`;

export const StyledAttributeName = styled.p`
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  padding: 10px 0;
`;

export const StyledAttributeValues = styled.div`
  display: flex;
`;

export const StyledProductPrice = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;
  color: #1D1F22;
`;

export const StyledAttributeValue = styled.div<{ color?: string, isSelected?: boolean }>`
  background-color: ${props => props.color ? props.color.toLowerCase() : 'none'};
  border: ${props => props.isSelected ? '5px dotted green' : '1px solid black'};
  height: 20px;
  min-width: 20px;
  margin: 10px;
  padding: 5px;
`;

export  const StyledAddToCartButton = styled.button`
  padding: 16px 32px;
  background: #5ECE7B;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
`;