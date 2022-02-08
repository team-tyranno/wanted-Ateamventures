import React from 'react';
import { DashBoardInfo } from 'components';
import * as S from './style';

export function DashBoard() {
  return (
    <S.Container>
      <S.InfoSection>
        <DashBoardInfo />
      </S.InfoSection>
      <S.ButtonSection>
        <S.DropDown />
        <S.ButtonSwitch />
      </S.ButtonSection>
      <S.CardSection />
    </S.Container>
  );
}
