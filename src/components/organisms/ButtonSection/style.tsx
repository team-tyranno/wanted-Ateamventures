import styled from 'styled-components';
import { STYLE } from 'commons';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 32px;

  @media (max-width: ${STYLE.MOBILE_WIDTH}px) {
    display: flex;
    align-items: start;
    flex-direction: column;
  }
`;

// export const Select = styled.select`
//   padding: 9px 14px 9px 12px;
// `;

export const DropDown = styled.div`
  display: flex;
  gap: 8px;
`;

export const DropDownWrap = styled.div`
  /* position: absolute; */
  /* width: 182px; */
  height: 32px;
  left: 155px;
  top: 198px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid black; */
  @media (max-width: ${STYLE.MOBILE_WIDTH}px) {
    margin-bottom: 20px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  /* line-height: 1.6; */
  color: #2196f3;
  font-family: 'Noto Sans KR Regular';
  margin-left: 15px;
  /* min-width: max-content; */
`;

export const ResetIcon = styled.img`
  margin: 0 8px;
`;
