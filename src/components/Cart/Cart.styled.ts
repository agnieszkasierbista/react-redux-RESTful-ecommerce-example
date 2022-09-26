import styled from 'styled-components';


export const StyledCart = styled.section<{isBigCart: boolean}>`
  // margin: ${props => props.isBigCart ? '0 100px': '1px 1px'};
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const StyledCartHeader = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 160%;
  padding: 25px 0;
  text-transform: uppercase;
`;

export const StyledCartItemWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;

export const StyledCartItem = styled.article`
  display: flex;
  flex-direction: column;
`;

export const StyledCartItemDetails = styled.section`
  display: flex;
  flex-direction: column;
  flex: 3 1;
`;

export const StyledCartItemRightSide = styled.section`
  display: flex;
  flex-direction: row;
  flex: 1 1;
`;

export const StyledAdder = styled.section`
  flex-basis: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const StyledAdderButton = styled.button`
  border: 1px solid #1D1F22;
  background-color: #ffffff;
  width: 43px;
  height: 43px;
  font-size: 35px;
  font-weight: 300;
  text-align: center;
  justify-content: center;
`;

export const StyledProductInCartCounter = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
`;

export const StyledAdderButtonText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 18px;
  display: flex;
  padding: 10px;
  text-align: center;
  justify-content: center;
`;

export const StyledMiniGallery = styled.section`
  position: relative;
  flex: 2 1;
  max-width: 300px;
  min-width: 200px;
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
  bottom: 16px;
  right: 16px;
  width: 50px;
  height: 24px;
  justify-content: space-between;
`;

export const StyledArrow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.73);
  color: white;
  width: 24px;
  height: 100%;
`;

export const ChevronLeft = styled.img`
  transform: rotate(0.25turn) scale(1.7);
  filter: brightness(0) invert(1);
`;

export const ChevronRight = styled.img`
  transform: rotate(-0.25turn) scale(1.7);
  filter: brightness(0) invert(1);
`;

export const StyledPurchaseDetails = styled.section`
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 20% 20% auto auto;
  flex-basis: 50%;
`;

export const StyledValue = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;
`;

export const StyledTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height:160%;
  grid-column: 1;
`;

export const StyledTotal = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height:160%;
  grid-column: 1;
`;

export const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid #E5E5E5;
  width: 100%;
`;

