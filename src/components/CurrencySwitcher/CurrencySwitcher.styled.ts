import styled from 'styled-components';


export const StyledCurrencySwitcher = styled.div`
  position: relative;
  display: inline-block;
  //background: lightcoral;
  //width: 100px;

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
`;


export const StyledCurrencyDropdownContainer = styled.div`
  position: absolute;
  color: black;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 3;
`;

export const StyledCurrencyDropdownList = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 114px;
  background-color: #FFFFFF;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.2));

`;

export const StyledCurrencyDropdownItem = styled.li`
  list-style-type: none;

`;

export const StyledCurrencyDropdownItemButton = styled.button`
  font-size: 18px;
  line-height: 250%;
  width: 100%;
  text-align: left;
  text-indent: 10px;


  &:hover{
    background-color: #EEEEEE;
  }
`;

export const StyledCurrencySwitcherHeader = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
  width: 32px;
  height: 29px;
  
`;

export const StyledCurrencySymbol = styled.div`
  font-weight: 500;
  text-align: right;
  font-size: 18px;
`;

export const StyledChevron = styled.img<{isExtended: boolean}>`
  //border: 1px solid #000000;
  width: 6px;
  height: 3px;
  ${props => props.isExtended && 'transform: matrix(1, 0, 0, -1, 0, 0)'};
`;
