import styled from 'styled-components';

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 366px;
  height: 356px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 16px 24px;
  background-color: #ffffff;

  &:hover {
    border: 2px solid #2196f3;
    padding: 15px 23px;
  }

  h3 {
    margin-bottom: 4px;
    color: #323d45;
    font-family: 'Noto Sans KR Bold';
    font-size: 16px;
    line-height: 24px;
  }

  h5 {
    margin-bottom: 24px;
    color: #323d45;
    font-family: 'Noto Sans KR Medium';
    font-size: 14px;
    line-height: 20px;
  }

  span.duedate {
    margin-bottom: 16px;
    color: #939fa5;
    font-family: 'Noto Sans KR Regular';
    font-size: 14px;
    line-height: 20px;
  }

  hr {
    width: 100%;
    margin: 0 0 32px 0;
    border: 0;
    border-top: 1px solid #e5e5e5;
    height: 1px;
  }

  dl {
    display: flex;
    gap: 32px;
    margin-bottom: 8px;

    color: #323d45;
    font-size: 14px;
    line-height: 20px;

    dt {
      width: 70px;
      height: 20px;
      font-family: 'Noto Sans KR Regular';
    }

    dd {
      width: 232px;
      height: 20px;
      font-family: 'Noto Sans KR Bold';
    }
  }

  button {
    margin-top: 24px;
    margin-inline-end: 8px;
    border-radius: 4px;
    padding: 4px 12px;

    font-family: 'Noto Sans KR Medium';
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;

    &.request {
      width: 108px;
      height: 32px;
      border: none;
      background-color: #2196f3;
      color: #ffffff;
    }

    &.contact {
      width: 80px;
      height: 32px;
      border: 1px solid #2196f3;
      background-color: #ffffff;
      color: #2196f3;
    }
  }

  span.inquiry {
    position: absolute;
    top: 24px;
    right: 16px;
    cursor: default;

    width: 56px;
    height: 24px;
    border: 1px solid #ffa000;
    border-radius: 12px;

    background-color: #ffffff;
    color: #ffa000;
    font-family: 'Noto Sans KR Medium';
    font-size: 12px;
    line-height: 20px;
    text-align: center;
  }
`;
