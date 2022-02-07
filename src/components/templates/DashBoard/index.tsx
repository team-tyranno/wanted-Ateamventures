import React from 'react';
import * as S from './style';

export function DashBoard() {
  return (
    <S.Container>
      <S.InfoSection>
        <S.DashBoardInfo>
          <S.Title>들어온 요청</S.Title>
          <S.Description>파트너님에게 딱 맞는 요청서를 찾아보세요</S.Description>
        </S.DashBoardInfo>
      </S.InfoSection>
      <S.ButtonSection>
        <S.DropDown />
        <S.ButtonSwitch />
      </S.ButtonSection>
      <S.CardSection />
    </S.Container>
  );
}
