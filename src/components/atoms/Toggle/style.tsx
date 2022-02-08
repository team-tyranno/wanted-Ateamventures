import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 34px;
  height: 14px;
  border-radius: 160px;
  transition: 0.5s;
  background: #c2c2c2;

  cursor: pointer;

  .indecator {
    position: absolute;
    top: -3px;
    left: -2px;
    width: 20px;
    height: 20px;

    background: #f5f5f5;
    border-radius: 50%;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    transition: 0.5s;
  }

  &.active {
    background: #bbdefb;
  }

  &.active .indecator {
    left: 15px;
    background: #2196f3;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    transition: 0.5s;
  }
`;
