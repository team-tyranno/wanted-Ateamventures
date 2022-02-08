import styled from 'styled-components';
import { STYLE } from 'commons';

export const Aside = styled.div`
  @media (max-width: ${STYLE.MOBILE_WIDTH}px) {
    display: none;
  }

  @media (min-width: ${STYLE.MOBILE_WIDTH}px) {
    display: flex;
  }

  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 208.67px;
  height: 20px;
  right: 40px;
  top: 25px;
`;

export const CompanyName = styled.div`
  position: static;
  width: 91.67px;
  height: 20px;
  left: 0px;
  top: 0px;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const PictoContainer = styled.span`
  position: absolute;
  left: 0%;
  right: 92.01%;
  top: 5.5%;
  bottom: 12.5%;
`;

export const Name = styled.span`
  position: absolute;
  left: 11.82%;
  right: 56.07%;
  top: 0%;
  bottom: 0%;

  display: flex;
  align-items: center;

  font-family: Noto Sans KR Medium;
  font-size: 14px;
  font-style: normal;

  color: white;

  line-height: 20px;
`;

export const Divider = styled.span`
  position: static;
  left: 59.27%;
  right: 40.26%;
  top: 10%;
  bottom: 10%;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 32px;
`;

export const SignOut = styled.span`
  position: static;
  left: 75.08%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  display: flex;
  align-items: center;

  flex: none;
  order: 2;
  flex-grow: 0;

  font-family: Noto Sans KR Regular;
  font-size: 14px;

  color: white;

  line-height: 20px;
`;
