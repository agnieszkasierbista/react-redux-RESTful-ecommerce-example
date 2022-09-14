import styled from 'styled-components';


export const StyledMiniCart = styled.div`
  background-color: white;
  position: absolute;
  top: 40px;
  right: 50px;
  z-index: 10;
`;

export const StyledMiniCartOverlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  display: ${props => props.isVisible ? 'block' : 'none'};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(200, 0, 0, 0.5);
  z-index: -1;
`;
