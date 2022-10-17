import styled from 'styled-components';


export const StyledMiniCartIconContainer = styled.div`
  position: relative;
  right: 5px;
  cursor: pointer;
`;

export const StyledMiniCartIcon = styled.img`
  margin-top: 2px;
  height: 20px;
  width: 20px;
`;

export const StyledQuantityBadge = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -12px;
  top: -5px;
  width: 20px;
  height: 20px;
  font-family: 'Roboto Slab', 'sans-serif';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  border-radius: 60px;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
`;
