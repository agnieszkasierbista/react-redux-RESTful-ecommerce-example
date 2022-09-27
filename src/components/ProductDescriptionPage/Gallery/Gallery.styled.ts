import styled from 'styled-components';


export const StyledGallery = styled.section`
  display: flex;
  padding: 0 10px;
  flex: 2 1;
`;

export const StyledThumbnails = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;

export const StyledThumbnail = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  background-color: #C4C4C4;
  width: 100px;
  height: 100px;
  background-size: cover;
  margin-bottom: 15px;
`;

export const StyledMainPic = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  background-color: #C4C4C4;
  background-size: cover;
  background-position: center 0;
  background-repeat: no-repeat;
  max-width: 90%;
  max-height: 90%;
  flex: 6 1;
`;