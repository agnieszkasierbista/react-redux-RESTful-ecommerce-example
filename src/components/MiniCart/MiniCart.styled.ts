import {Link} from 'react-router-dom';
import styled from 'styled-components';


export const StyledMiniCart = styled.div`
  background-color: white;
  background-clip: padding-box;
  position: absolute;
  top: 20px;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  gap: 32px;
  
   @media(min-width:1440px) {
     right: -50px;
   }
`;

export const StyledMiniCartTitle = styled.section`
  width: 100%;
  padding-top: 70px;
  font-size: 16px;
  line-height: 160%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledMyBagHeader = styled.p`
  font-weight: 700;
`;

export const StyledMyBagHeaderAmount = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
`;

export const StyledGoToCart = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  margin-right: 6px;
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
  justify-content: space-around;
`;

export const StyledCheckOutButton = styled.button<{isBigCart?: boolean}>`
  padding: 13px 32px;
  margin: ${props => props.isBigCart ? '16px' : 0} 6px 0 0;
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
