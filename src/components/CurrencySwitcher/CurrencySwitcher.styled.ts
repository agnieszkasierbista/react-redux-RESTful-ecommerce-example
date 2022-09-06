import styled from "styled-components";


export const StyledCurrencySwitcher = styled.div`
  position: relative;
  display: inline-block;
  background: lightcoral;
`;

export const StyledCurrencyDropdownContainer = styled.div`
  position: absolute;
  background-color: pink;
  color: black;
  width: 100%;
  left: 0;
  right: 0;
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