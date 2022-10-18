import styled from 'styled-components';


export const StyledTab = styled.li<{shouldHighlight: boolean}>`
  list-style-type: none;
  margin: 0 3px;
  display: flex;
  text-align: center;
  text-transform: uppercase;
  font-style: normal;
  font-weight: ${props => props.shouldHighlight ? '600' : '400'};
  font-size: 16px;
  line-height: 300%;
  min-width: 75px;
  gap: ${props => props.shouldHighlight ? '0px' : '30px'};
  background-color: ${props => props.shouldHighlight ? props.theme.colors.orange : props.theme.colors.white};
  border-bottom: ${props => props.shouldHighlight ? `2px solid ${props.theme.colors.orange}` : `2px solid ${props.theme.colors.gray}`};
  border-left: ${props => props.shouldHighlight ? `2px solid ${props.theme.colors.orange}` : `2px solid ${props.theme.colors.gray}`};
  border-right: ${props => props.shouldHighlight ? `2px solid ${props.theme.colors.orange}` : `2px solid ${props.theme.colors.gray}`};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  & :hover {
    background-color: ${props => props.theme.colors.gray};
  }
`;
