import styled from 'styled-components';

export const Container = styled.nav`
  position: absolute;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
`;

export const MainBar = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
`;

export const BackGround = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #1565c0;

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

export const Logo = styled.img`
  position: absolute;
  left: 2.78%;
  right: 86.6%;
  top: 35.71%;
  bottom: 35.71%;

  width: 153px;
  height: 20px;
`;

export const Aside = styled.div`
  display: flex;
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
  /* Group 2834 */

  position: static;
  width: 91.67px;
  height: 20px;
  left: 0px;
  top: 0px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Picto = styled.img`
  position: absolute;
  left: 0%;
  right: 92.01%;
  top: 12.5%;
  bottom: 12.5%;

  width: 16.67px;
  height: 15px;
`;

export const Name = styled.span`
  /* 홍길동 */

  position: absolute;
  left: 11.82%;
  right: 56.07%;
  top: 0%;
  bottom: 0%;

  /* 14pt - 500 */

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;

  color: #ffffff;
`;

export const Divider = styled.span`
  /* divider */
  position: static;
  left: 59.27%;
  right: 40.26%;
  top: 10%;
  bottom: 10%;
  width: 2px;
  height: 16px;

  background-color: white;

  /* Inside auto layout */

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

  /* 14pt - 400 (본문용) */

  font-family: Noto Sans KR;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 2;
  flex-grow: 0;
`;
