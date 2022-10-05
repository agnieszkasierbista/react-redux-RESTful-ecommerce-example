import styled from 'styled-components';


export const StyledGallery = styled.section`
  display: flex;
  column-gap: 40px;
`;

export const StyledThumbnails = styled.div`
  //flex: 1 1;
  display: flex;
  flex-direction: column;
`;

export const StyledThumbnail = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  background-color: ${props => props.theme.colors.white};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-width: 79px;
  min-height: 80px;
  margin-bottom: 32px;
`;

export const StyledMainPic = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  background-color: ${props => props.theme.colors.white};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-width: 610px;
  min-height: 511px;
`;