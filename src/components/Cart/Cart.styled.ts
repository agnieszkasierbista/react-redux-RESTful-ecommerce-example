import styled from 'styled-components';


export const StyledCart = styled.section`
  background-color: white;
  outline: 5px dashed magenta;
`;

export const StyledCartItem = styled.article`
  border: 2px solid red;
  display: flex;
  flex-flow: row;
`;

export const StyledCartItemDetails = styled.section`
  flex-grow: 3;
`;

export const StyledAdder = styled.section`
  flex-basis: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const StyledMiniGallery = styled.section<{pics: string[]}>`
  position: relative;
  flex-grow: 2;
  max-width: 500px;
  background-image: ${props => `url(${props.pics[0]})`};
`;

export const StyledArrows = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 35px;
  right: 35px;
  width: 80px;
  height: 40px;
  

`;

export const StyledArrow = styled.div`
  border: 2px solid white;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  bacground-origin: content-box;
  width: 100%;
  height: 100%;
`;


