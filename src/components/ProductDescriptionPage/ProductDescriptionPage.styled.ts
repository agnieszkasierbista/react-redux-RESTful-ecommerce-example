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
  flex: 1 3;
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
  flex: 1 1;
`;

export const StyledProductPrice = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;
  color: #1D1F22;
`;

export const StyledAttributeValue = styled.div<{ color?: string, isSelected?: boolean }>`
  background-color: ${props => props.color ? props.color.toLowerCase() : props.isSelected ? '#1D1F22' : '#FFFFFF'};
  border: ${props => props.color ? 'none' : '1px solid #1D1F22'};
  outline: ${props => props.color ? props.isSelected ? '1px solid #5ECE7B' : 'none' : 'none'};
  color: ${props => props.isSelected ? '#FFFFFF' : '#1D1F22'};
  min-height: 32px;
  min-width: 32px;
  max-width: ${props => props.color ? '32px' : '60px'};
  background-clip: ${props => props.color ? 'content-box' : 'padding-box'};
  margin: 10px;
  padding: 1px;
  align-items: center;
  flex: 1 1;
`;

export const StyledAttributeValueText = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  padding: 10px;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.05em;
`;

export const StyledAddToCartButton = styled.button`
  padding: 16px 32px;
  margin: 30px 0;
  background: #5ECE7B;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 1 / span 2;
`;

export const StyledDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;
`;