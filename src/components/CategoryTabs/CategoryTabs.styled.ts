import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const StyledCategoryTabs = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: flex-end;
`;

export const StyledCategoryTabLink = styled(Link)`
  display: inline-block;
  padding: 16px;
  width: 100%;
  height: 100%;
`;