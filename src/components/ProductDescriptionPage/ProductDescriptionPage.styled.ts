import styled from 'styled-components';


export const StyledProductDescriptionPage = styled.article`
  display: flex;
`;

export const StyledProductDetails = styled.section`
  flex-grow: 1;
`;

export const StyledAttribute = styled.section`
  display: flex;
  flex-flow: column;
`;

export const StyledAttributeName = styled.div`

`;

export const StyledAttributeValues = styled.div`
  display: flex;
`;

export const StyledAttributeValue = styled.div<{ color?: string, isSelected?: boolean }>`
  background-color: ${props => props.color ? props.color.toLowerCase() : 'none'};
  border: ${props => props.isSelected ? '5px dotted green' : '1px solid black'};
  height: 20px;
  min-width: 20px;
  margin: 10px;
  padding: 5px;
`;
