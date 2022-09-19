import styled from 'styled-components';


export const StyledMiniCartIcon = styled.div`
  position: relative;
  margin: 10px;
  min-width: 120px;
  min-height: 20px;
  border: 2px solid magenta;
`;

export const StyledQuantityBadge = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 15px;
  top: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: black;
  color: white;
`;