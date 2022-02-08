import React from 'react';
import { companyPictoBlack } from 'assets';
import { Icon } from 'components';
import * as S from './style';

const companyPictoSize = {
  height: 15,
  width: 15,
};

interface SliderMenuProps {
  visible: boolean;
  onClick: (newState: boolean) => void;
}

export function SliderMenu({ visible, onClick }: SliderMenuProps) {
  return (
    <>
      <S.Overlay visible={visible} onClick={() => onClick(false)} />
      <S.SliderMenu visible={visible}>
        <S.SliderMenuLogo />
        <S.SliderMenuLine />
        <S.ItemList>
          <S.Item>
            <Icon src={companyPictoBlack} size={companyPictoSize} />
            파트너정밀가공
          </S.Item>
          <S.Item>로그아웃</S.Item>
        </S.ItemList>
      </S.SliderMenu>
    </>
  );
}
