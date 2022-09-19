import styled from 'styled-components';


export const StyledGallery = styled.section`
  display: flex;
  flex-grow: 2;
`;

export const StyledThumbnails = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledThumbnail = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  width: 100px;
  height: 100px;
  background-size: cover;
  margin-bottom:15px;
`;

export const StyledMainPic = styled.img`
  flex-grow: 4;
  max-width: 700px;

`;