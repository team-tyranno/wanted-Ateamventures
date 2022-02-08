import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));

  width: 100%;
  margin-top: 32px;
  margin-bottom: 100px;
`;

export const NoResult = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100px;
  border: 1px solid #c2c2c2;

  span {
    color: #939fa5;
    font-family: 'Noto Sans KR Regular';
    font-size: 14px;
    line-height: 20px;
  }
`;
