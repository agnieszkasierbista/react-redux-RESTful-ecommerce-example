import styled from 'styled-components';
import {StyledMiniCart} from '../MiniCart/MiniCart.styled';


export const StyledMiniCartIcon = styled.div`
min-width: 120px;
  min-height: 20px;
  position: relative;
  border: 2px solid magenta;

  ${StyledMiniCart} {
    display: none;
  }

  &:hover ${StyledMiniCart} {
    display: block;
    outline: 12px solid red;
  }
`;