import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const StyledLogo = styled.img`
  position: absolute;
  left: 20px;
  top: calc(50% - 24px);
  width: 41px;
  height: 41px;
  filter: invert(18%) sepia(87%) saturate(4444%) hue-rotate(341deg) brightness(81%) contrast(112%);
`;

export const StyledActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  gap: 22px;
`;

export const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;
