import styled from 'styled-components';


export const StyledCurrencySwitcher = styled.div`
  position: relative;
  display: inline-block;
  background: lightcoral;
  width: 100px;

`;

export const StyledCurrencySwitcherOverlay = styled.div<{isExtended: boolean}>`
  position: fixed; 
  display: ${props => props.isExtended ? 'block' : 'none'};
  width: 100%;
  height: 100%; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 255, 0, 0.5);
`;


export const StyledCurrencyDropdownContainer = styled.div`
  position: absolute;
  background-color: pink;
  color: black;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 3;
`;

export const StyledCurrencyDropdownList = styled.ul`
  margin: 0;
  padding: 0; 
`;

export const StyledCurrencyDropdownItem = styled.li`
  border: 1px solid black;
  height: 30px;
  list-style-type: none;
`;