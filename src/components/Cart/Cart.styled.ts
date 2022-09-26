import styled from 'styled-components';


export const StyledCart = styled.section<{isBigCart: boolean}>`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
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
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  flex: 1 1;
`;

export const StyledAdder = styled.section`
  flex-basis: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StyledAdderButton = styled.button<{isBigCart?: boolean}>`
  border: 1px solid #1D1F22;
  background-color: #ffffff;
  width: ${props => props.isBigCart ? '43px': '24px'};
  height: ${props => props.isBigCart ? '43px': '24px'};
  font-weight: 300;
  text-align: center;
  justify-content: center;
`;

export const StyledProductInCartCounter = styled.p<{isBigCart: boolean}>`
  font-style: normal;
  font-weight: 500;
  font-size: ${props => props.isBigCart ? '24px' : '16px'};
  line-height: 160%;
`;

export const StyledAdderButtonText = styled.p<{isBigCart: boolean}>`
  font-style: normal;
  font-weight: 300;
  font-size: ${props => props.isBigCart ? '40px': '22px'};
  line-height: 18px;
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const StyledMiniGallery = styled.section<{isBigCart: boolean}>`
  position: relative;
  flex: 2 1;
  padding-left: ${props => props.isBigCart ? '24px' : '8px'};
  max-width: ${props => props.isBigCart ? '300px' : '121px'};
  min-width: ${props => props.isBigCart ? '200px' : '100px'};
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
  padding: 16px 0 10px 0;
`;

export const StyledValue = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;
`;

export const StyledTotalValue = styled.p<{isBigCart?: boolean}>`
  font-style: normal;
  font-weight: 700;
  font-size: ${props => props.isBigCart ? '24px' : '16px'};
  line-height: 160%;
  grid-column: ${props => props.isBigCart ? 2 : 4};
  text-align: ${props => props.isBigCart ? 'left' : 'right'};
`;

export const StyledTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height:160%;
  grid-column: 1;
`;

export const StyledTotal = styled.p<{isBigCart?: boolean}>`
  font-style: normal;
  font-weight: 500;
  font-size: ${props => props.isBigCart ? '24px' : '16px'};
  line-height:160%;
  grid-column: 1;
`;

export const StyledHr = styled.hr<{isBigCart: boolean}>`
  border: none;
  border-top: ${props => props.isBigCart ? '1px solid #E5E5E5' : '1px solid transparent'};
  width: 100%;
`;

export const StyledProductInCartDetailsBrand = styled.p<{isBigCart?: boolean}>`
  font-style: normal;
  font-weight: ${props => props.isBigCart ? '600' : '300'};
  font-size: ${props => props.isBigCart ? '30px' : '16px'};
  padding-bottom: ${props => props.isBigCart ? '12px' : '8px'};
`;

export const StyledProductInCartDetailsName = styled.p<{isBigCart?: boolean}>`
  font-style: normal;
  font-weight: ${props => props.isBigCart ? '400' : '300'};
  font-size: ${props => props.isBigCart ? '30px' : '16px'};
  padding-bottom: ${props => props.isBigCart ? '40px' : '4px'};
`;

export const StyledProductInCartAttribute = styled.section`
  display: flex;
  flex-flow: column;
`;

export const StyledProductInCartAttributeName = styled.p<{isBigCart?: boolean}>`
  font-family: ${props => props.isBigCart ? '"Roboto Condensed", sans-serif' : '"Raleway", sans-serif'};
  font-style: normal;
  font-weight: ${props => props.isBigCart ? '700' : '400'};
  font-size: ${props => props.isBigCart ? '18px' : '14px'};
  padding: 10px 0;
`;

export const StyledProductInCartAttributeValues = styled.div<{isBigCart?: boolean}>`
  display: flex;
  flex: 1 1;
`;

export const StyledProductInCartPrice = styled.p<{isBigCart?: boolean}>`
  font-style: normal;
  font-weight: ${props => props.isBigCart ? '700' : '500'};
  font-size:${props => props.isBigCart ? '24px' : '16px'};
  padding-top:${props => props.isBigCart ? '0' : '6px'};
  line-height: 160%;
  color: #1D1F22;
`;

export const StyledProductInCartAttributeValue = styled.div<{ color?: string, isSelected?: boolean, isBigCart?: boolean }>`
  background-color: ${props => props.color ? props.color.toLowerCase() : props.isSelected ? '#1D1F22' : '#FFFFFF'};
  border: ${props => props.color ? 'none' : '1px solid #1D1F22'};
  outline: ${props => props.color ? props.isSelected ? '1px solid #5ECE7B' : 'none' : 'none'};
  color: ${props => props.isSelected ? '#FFFFFF' : '#1D1F22'};
  min-height: ${props => props.isBigCart ? '32px' : '16px'};
  min-width: ${props => props.isBigCart ? '32px' : '16px'};
  max-width: ${props => props.isBigCart ? props.color ? '32px' : '60px' :  props.color ? '16px' : '45px'};
  background-clip: ${props => props.color ? 'content-box' : 'padding-box'};
  margin: 4px;
  padding: 1px;
  align-items: center;
  flex: 1 1;
`;

export const StyledProductInCartAttributeValueText = styled.p<{isBigCart?: boolean}>`
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.isBigCart ? '16px' : '14px'};
  line-height: ${props => props.isBigCart ? '18px' : '120%'};
  display: flex;
  padding: ${props => props.isBigCart ? '10px' : '2px'};
  text-align: center;
  justify-content: center;
  letter-spacing: 0.05em;
`;

