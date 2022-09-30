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
  background-color: ${props => props.theme.colors.white};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
`;

export const StyledMainPic = styled.div<{ src: string }>`
  background-image: url(${props => props.src});
  background-color: ${props => props.theme.colors.white};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  max-width: 90%;
  max-height: 90%;
  flex: 6 1;
`;