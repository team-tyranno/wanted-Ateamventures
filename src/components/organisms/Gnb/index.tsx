import React from 'react';
import { logo, companyPicto } from 'assets';
import * as S from './style';

export function Gnb() {
  return (
    <S.Container>
      <S.MainBar>
        <S.BackGround />
        <S.Logo src={logo} />
      </S.MainBar>
      <S.Aside>
        <S.CompanyName>
          <S.Picto src={companyPicto} />
          <S.Name>A 가공 업체</S.Name>
        </S.CompanyName>
        <S.Divider />
        <S.SignOut>로그아웃</S.SignOut>
      </S.Aside>
    </S.Container>
  );
}
