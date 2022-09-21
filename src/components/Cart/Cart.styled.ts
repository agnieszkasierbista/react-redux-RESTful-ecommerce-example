import styled from 'styled-components';


export const StyledCart = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  outline: 5px dashed magenta;
`;

export const StyledCartItemWrapper = styled.section`
display: flex;
  flex-direction: row;

`;

export const StyledCartItem = styled.article`
  border: 2px solid red;
  display: flex;
  outline: 2px solid green;
  flex-direction: column;
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

export const StyledAdderButton = styled.div`
  border: 1px solid black;
  background-color: yellow;
  width: 20px;
  height: 20px;
`;

export const StyledMiniGallery = styled.section`
  position: relative;
  flex-grow: 2;
  max-width: 500px;
`;

export const StyledPic = styled.div<{ picIdx: number, pics: string[]}>`
  background-image: ${props => `url(${props.pics[props.picIdx]})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
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

export const StyledArrow = styled.button`
  border: 2px solid white;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  bacground-origin: content-box;
  width: 100%;
  height: 100%;
`;

export const StyledPurchaseDetails = styled.section`
  border: 1px solid blue;

`;

export const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid #E5E5E5;
  width: 100%;
`;

