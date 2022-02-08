import styled from 'styled-components';
import { STYLE } from 'commons';
import { logo } from 'assets';

export const Container = styled.nav`
  @media (max-width: ${STYLE.MOBILE_WIDTH}px) {
    height: 44px;
  }

  @media (min-width: ${STYLE.MOBILE_WIDTH}px) {
    height: 70px;
  }
  position: absolute;
  width: 100%;
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

export const MenuContainer = styled.div`
  @media (max-width: ${STYLE.MOBILE_WIDTH}px) {
    position: absolute;
    display: flex;
    width: 128.8px;
    height: 24px;
    left: 20px;
    top: 10px;
  }
`;

export const MenuIcon = styled.div`
  @media (max-width: ${STYLE.MOBILE_WIDTH}px) {
    display: block;
  }

  @media (min-width: ${STYLE.MOBILE_WIDTH}px) {
    display: none;
  }

  padding-top: 3px;
  padding-bottom: 6px;
  left: 12.5%;
  right: 12.5%;
  top: 25%;
  bottom: 25%;
`;

export const Logo = styled.div`
  @media (max-width: ${STYLE.MOBILE_WIDTH}px) {
    margin-top: 6px;
    margin-left: 19px;
    width: 91.8px;
    height: 12px;
    left: 16.67%;
    right: 57.83%;
    top: 1.63%;
    bottom: 97.15%;
  }

  @media (min-width: ${STYLE.MOBILE_WIDTH}px) {
    position: absolute;
    width: 153px;
    height: 20px;
    left: 2.78%;
    right: 86.6%;
    top: 35.71%;
    bottom: 35.71%;
  }
  background-size: cover;
  background-image: url('${logo}');
`;
