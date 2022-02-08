import React from 'react';
import { companyPicto } from 'assets';
import { Divider, Icon } from 'components';
import * as S from './style';

const companyPictoSize = {
  height: 15,
  width: 16.67,
};

export function Aside() {
  return (
    <S.Aside>
      <S.CompanyName>
        <S.PictoContainer>
          <Icon src={companyPicto} size={companyPictoSize} />
        </S.PictoContainer>
        <S.Name>A 가공 업체</S.Name>
      </S.CompanyName>
      <S.Divider>
        <Divider color="white" />
      </S.Divider>
      <S.SignOut>로그아웃</S.SignOut>
    </S.Aside>
  );
}
