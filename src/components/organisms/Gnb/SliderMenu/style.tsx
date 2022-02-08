import styled from 'styled-components';
import { colorLogo } from 'assets';

interface OverlayProps {
  visible: boolean;
}

export const Overlay = styled.div<OverlayProps>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;

  z-index: 9000;

  background: #323d45;
  opacity: 0.5;
`;

interface SliderMenuProps {
  visible: boolean;
}

export const SliderMenu = styled.div<SliderMenuProps>`
  position: absolute;
  width: 280px;
  height: 100%;
  left: 0px;
  top: 0px;

  z-index: 10000;

  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

  transition: transform 0.5s ease 0s;
  transform: translate3d(${(props) => (props.visible ? '0vw' : '-100vw')}, 0, 0);
`;

export const SliderMenuLogo = styled.div`
  position: absolute;
  width: 91.52px;
  height: 12px;
  left: 20px;
  top: 16px;

  background-size: cover;
  background-image: url('${colorLogo}');
`;

export const SliderMenuLine = styled.div`
  position: absolute;
  width: 280px;
  height: 1px;
  left: 0px;
  top: 44px;

  background-color: #e5e5e5;
`;

export const IconWrap = styled.div`
  margin-right: 8px;
`;

export const ItemList = styled.div`
  position: absolute;
  top: 80px;
  left: 32px;
`;

export const Item = styled.div`
  height: 20px;
  margin-bottom: 20px;

  font-family: Noto Sans KR Regular;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;

  color: #323d45;
`;
