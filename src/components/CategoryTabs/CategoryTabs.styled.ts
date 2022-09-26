import styled from 'styled-components';
import {Link} from 'react-router-dom';



export const StyledCategoryTabs = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledCategoryTabLink = styled(Link)`
  padding-bottom: 15px;
  width: 100%;
  height: 100%;
`;