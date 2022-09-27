import styled from 'styled-components';


export const StyledTab = styled.li<{shouldHighlight: boolean}>`
  list-style-type: none;
  display: flex;
  text-transform: uppercase;
  font-style: normal;
  font-weight: ${props => props.shouldHighlight ? '600' : '400'};
  font-size: 16px;
  line-height: 300%;
  gap: ${props => props.shouldHighlight ? '0px' : '30px'};
  border-bottom: ${props => props.shouldHighlight ? `2px solid ${props.theme.colors.green}` : '2px solid transparent'};
`;