import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const DropDown = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 12px;
  /* position: absolute; */
  /* width: 98px; */
  /* min-width: max-content; */
  height: 32px;
  /* left: 155px;
  top: 198px; */
  background: #ffffff;
  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
  color: #323d45;
  /* justify-content: space-between; */
  cursor: pointer;
  &:hover {
    border: 1px solid #2196f3;
  }
  ${(props) =>
    props.isSelected &&
    `background: #1565C0; 
    color: #ffffff;`}
`;

export const Title = styled.div`
  position: static;
  height: 14px;
  left: 12.24%;
  right: 41.84%;
  top: calc(50% - 14px / 2);
  font-family: 'Noto Sans KR Regular';
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 5px;
`;

export const ArrowDropDown = styled.img`
  position: static;
  width: 24px;
  height: 24px;
  left: 62px;
  top: 4px;
  flex: none;
  order: 1;
  flex-grow: 0;
  /* margin: 0px 5px; */
`;

export const SelectUl = styled.ul`
  position: absolute;
  font-family: 'Noto Sans KR Medium';
  font-size: 14px;
  top: 36px;
  left: 0;
  min-width: 130px;
  color: #323d45;
  background: #ffffff;
  z-index: 10;
  border: 1px solid #939fa5;
  border-radius: 4px;
  cursor: pointer;
  padding: 12px;
`;

export const SelectLi = styled.li`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

export const CheckboxImg = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  border-radius: 2px;
  /* border: 2px solid #939fa5; */
`;
