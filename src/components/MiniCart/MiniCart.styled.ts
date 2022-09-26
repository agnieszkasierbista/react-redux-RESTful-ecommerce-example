import {Link} from 'react-router-dom';
import styled from 'styled-components';


export const StyledMiniCart = styled.div`
  background-color: white;
  position: absolute;
  top: 40px;
  right: -50px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  gap: 32px;
`;

export const StyledMiniCartTitle = styled.section`

`;

export const StyledGoToCart = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;

  background: #FFFFFF;
  border: 1px solid #1D1F22;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
`;

export const StyledButtonsInMiniCart = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledCheckOutButton = styled.button`
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

export const StyledButtonText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  text-transform: uppercase;
`;
