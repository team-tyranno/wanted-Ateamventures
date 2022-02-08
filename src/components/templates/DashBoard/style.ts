import styled from 'styled-components';

export const Container = styled.div`
  width: 78%;
  height: 1100px;

  @media (max-width: 360px) {
    margin-top: 68px;
  }

  @media (min-width: 360px) {
    margin-top: 110px;
  }
`;

export const ButtonSection = styled.section`
  width: 100%;
  position: relative;
`;

export const ButtonSwitch = styled.div`
  @media (min-width: 1440px) {
    left: 1106px;
  }

  @media (max-width: 1440px) and (min-width: 903.01px) {
    left: 569.01px;
  }

  @media (max-width: 903.01px) and (min-width: 521px) {
    left: 32px;
  }

  position: absolute;
  width: 179px;
  height: 20px;
  top: 204px;
  border: 1px solid black;
`;

export const CardSection = styled.section`
  @media (min-width: 1440px) {
    width: 1130.01px;
  }

  @media (max-width: 1440px) and (min-width: 903.01px) {
    width: 748.01px;
  }

  @media (max-width: 903.01px) and (min-width: 521px) {
    width: 366px;
  }

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  left: 155px;
  top: 262px;

  border: 1px solid black;
`;
