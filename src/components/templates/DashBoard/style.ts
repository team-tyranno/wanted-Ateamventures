import styled from 'styled-components';

export const Container = styled.div``;

export const InfoSection = styled.section`
  width: 100%;
  overflow: hidden;
`;

export const DashBoardInfo = styled.div`
  position: absolute;
  width: 284px;
  height: 56px;
  left: 155px;
  top: 110px;
`;

export const Title = styled.div`
  width: 97px;
  height: 32px;
`;

export const Description = styled.div`
  width: 284px;
  height: 24px;
`;

export const ButtonSection = styled.section`
  width: 100%;
`;

export const DropDown = styled.div`
  position: absolute;
  width: 182px;
  height: 32px;
  left: 155px;
  top: 198px;

  border: 1px solid black;
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
