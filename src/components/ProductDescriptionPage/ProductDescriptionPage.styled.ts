import styled from 'styled-components';


export const StyledProductDescriptionPage = styled.article`
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 81px);
  padding: 80px 219px 0 100px;
  display: flex;
  column-gap: 100px;
`;

export const StyledProductDetails = styled.section`
  display: flex;
  min-width: 292px;
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
  color: ${props => props.theme.colors.black};
`;

export const StyledAttributeValue = styled.div<{ color?: string, isSelected?: boolean }>`
  background-color: ${props => props.color ? props.color.toLowerCase() : props.isSelected ? props.theme.colors.black : props.theme.colors.white};
  border: ${props => props.color ? 'none' : `1px solid ${props.theme.colors.black}`};
  outline: ${props => props.color ? props.isSelected ? `1px solid ${props.theme.colors.orange}` : 'none' : 'none'};
  color: ${props => props.isSelected ? props.theme.colors.white : props.theme.colors.black};
  min-height: 32px;
  min-width: 32px;
  max-width: ${props => props.color ? '32px' : '60px'};
  background-clip: ${props => props.color ? 'content-box' : 'padding-box'};
  margin: 10px;
  padding: 1px;
  align-items: center;
  flex: 1 1;
  cursor: pointer;
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

export const StyledAddToCartButton = styled.button<{ disabled: boolean }>`
  padding: 16px 32px;
  margin: 30px 0;
  max-width: 292px;
  background: ${props => props.theme.colors.orange};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 1 / span 2;
  ${props => props.disabled ? 'filter: grayscale(75%); cursor: not-allowed;' : ''};
`;

export const StyledDescription = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;
`;
