import styled from 'styled-components';


export const StyledNavBar = styled.div`
  position: sticky;
  top:0;
  background-color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 15;
  box-shadow: ${props => `50px 0 0 0 ${props.theme.colors.white}`};
  pointer-events: none;
`;