import React from 'react';
import { logo, companyPicto } from 'assets';
import { Divider, MenuItem, Logo } from 'components';
import * as S from './style';

const nameFontOption = {
  fontFamily: 'Noto Sans KR',
  fontSize: 14,
  fontWeight: 500,
  fontStyle: 'normal',
};

const signOutFontOption = {
  fontFamily: 'Noto Sans KR',
  fontSize: 14,
  fontWeight: 400,
};

const mainLogoSize = {
  height: 20,
  width: 153,
};

const companyPictoSize = {
  height: 15,
  width: 16.67,
};

export function Gnb() {
  return (
    <S.Container>
      <S.MainBar>
        <S.BackGround />
        <S.LogoContainer>
          <Logo src={logo} size={mainLogoSize} />
        </S.LogoContainer>
      </S.MainBar>
      <S.Aside>
        <S.CompanyName>
          <S.PictoContainer>
            <Logo src={companyPicto} size={companyPictoSize} />
          </S.PictoContainer>
          <S.Name>
            <MenuItem
              text="A 가공 업체"
              color="white"
              fontOption={nameFontOption}
              lineHeight={20}
            />
          </S.Name>
        </S.CompanyName>
        <S.Divider>
          <Divider color="white" />
        </S.Divider>
        <S.SignOut>
          <MenuItem text="로그아웃" color="white" fontOption={signOutFontOption} lineHeight={20} />
        </S.SignOut>
      </S.Aside>
    </S.Container>
  );
}
