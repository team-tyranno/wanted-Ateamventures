import React, { useState } from 'react';
import { menuIcon } from 'assets';
import { Icon } from 'components';
import { SliderMenu } from './SliderMenu';
import { Aside } from './Aside';
import * as S from './style';

const menuIconSize = {
  height: 12,
  width: 18,
};

export function Gnb() {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <>
      <SliderMenu visible={menuVisible} onClick={setMenuVisible} />
      <S.Container>
        <S.MainBar>
          <S.BackGround />
          <S.MenuContainer>
            <S.MenuIcon onClick={() => setMenuVisible(true)}>
              <Icon src={menuIcon} size={menuIconSize} />
            </S.MenuIcon>
            <S.Logo />
          </S.MenuContainer>
        </S.MainBar>
        <Aside />
      </S.Container>
    </>
  );
}
