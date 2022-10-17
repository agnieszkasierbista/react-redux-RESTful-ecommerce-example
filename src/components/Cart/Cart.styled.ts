import styled from 'styled-components';


export const StyledCart = styled.section<{isBigCart: boolean}>`
  display: flex;
  flex-direction: column;
  margin: ${props => props.isBigCart ? '0 100px' : '12px 0'};
`;

export const StyledCartHeader = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 160%;
  padding: 80px 0 20px;
  text-transform: uppercase;
`;

export const StyledCartItemWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledCartItem = styled.article<{isBigCart: boolean}>`
  display: flex;
  flex-direction: column;
  margin: ${props => props.isBigCart ? 0 : '20px 0'};
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
  border: 1px solid ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.white};
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
  background-position: center;
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
  color: ${props => props.theme.colors.white};
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

export const StyledPurchaseDetails = styled.section<{isBigCart: boolean}>`
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 11% 10% auto auto;
  flex-basis: 50%;
  padding: ${props => props.isBigCart ? '8px 0 10px 0' : '12px 0 20px'};
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
  border-top: ${props => props.isBigCart ? '1px solid #E5E5E5' : 'none'};
  width:  ${props => props.isBigCart ? '100%' : 0};
  padding: ${props => props.isBigCart ? '0 0 24px 0' : 0};
  margin: ${props => props.isBigCart ? '24px 0 0 0' : 0};
`;

export const StyledProductInCartDetailsBrand = styled.p<{isBigCart?: boolean}>`
  font-style: normal;
  font-weight: ${props => props.isBigCart ? '600' : '300'};
  font-size: ${props => props.isBigCart ? '30px' : '16px'};
  padding-bottom: ${props => props.isBigCart ? '16px' : '8px'};
`;

export const StyledProductInCartDetailsName = styled.p<{isBigCart?: boolean}>`
  font-style: normal;
  font-weight: ${props => props.isBigCart ? '400' : '300'};
  font-size: ${props => props.isBigCart ? '30px' : '16px'};
  padding-bottom: ${props => props.isBigCart ? '20px' : '4px'};
`;

export const StyledProductInCartAttribute = styled.section`
  display: flex;
  flex-flow: column;
`;

export const StyledProductInCartAttributeName = styled.p<{isBigCart?: boolean}>`
  font-family: ${props => props.isBigCart ? '"Barlow Condensed", sans-serif' : '"Dosis", sans-serif'};
  font-style: normal;
  font-weight: ${props => props.isBigCart ? '700' : '400'};
  font-size: ${props => props.isBigCart ? '18px' : '14px'};
  padding-bottom: ${props => props.isBigCart ? '7px' : '14px'};
`;

export const StyledProductInCartAttributeValues = styled.div<{isBigCart?: boolean}>`
  display: flex;
  margin-bottom: 16px;
`;

export const StyledProductInCartPrice = styled.p<{isBigCart?: boolean}>`
  font-style: normal;
  font-weight: ${props => props.isBigCart ? '700' : '500'};
  font-size:${props => props.isBigCart ? '24px' : '16px'};
  padding-bottom:${props => props.isBigCart ? '20px' : '6px'};
  line-height: 160%;
  color: ${props => props.theme.colors.black};
`;

export const StyledProductInCartAttributeValue = styled.div<{ color?: string, isSelected?: boolean, isBigCart?: boolean }>`
  background-color: ${props => props.color ? props.color.toLowerCase() : props.isSelected ? props.theme.colors.black : props.theme.colors.white};
  border: ${props => props.color ? 'none' : `1px solid ${props.theme.colors.black}`};
  outline: ${props => props.color ? props.isSelected ? `1px solid ${props.theme.colors.orange}` : 'none' : 'none'};
  color: ${props => props.isSelected ? props.theme.colors.white : props.theme.colors.black};
  min-height: ${props => props.isBigCart ? '32px' : '16px'};
  min-width: ${props => props.isBigCart ? '32px' : '16px'};
  max-width: ${props => props.isBigCart ? props.color ? '32px' : '60px' :  props.color ? '16px' : '45px'};
  background-clip: ${props => props.color ? 'content-box' : 'padding-box'};
  margin-right: 8px;
  padding: 1px;
  align-items: center;
  flex: 1 1;
`;

export const StyledProductInCartAttributeValueText = styled.p<{isBigCart?: boolean}>`
  font-family: 'Inter', sans-serif;
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

