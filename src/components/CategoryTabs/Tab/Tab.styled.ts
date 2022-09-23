import styled from 'styled-components';


export const StyledTab = styled.li<{shouldHighlight: boolean}>`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0 16px 0 16px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: ${props => props.shouldHighlight ? '600' : '400'};
  font-size: 16px;
  line-height: 300%;
  align-self: flex-start;
  gap: ${props => props.shouldHighlight ? '0px' : '30px'};
  border-bottom: ${props => props.shouldHighlight ? '2px solid #5ECE7B' : '2px solid transparent'};
`;