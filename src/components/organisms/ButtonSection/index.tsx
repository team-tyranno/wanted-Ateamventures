import React from 'react';
import { SelectBox, ToggleSection } from 'components';
import { processMethods, materials } from 'commons/dropDown';
import { refresh } from 'assets';
import * as S from './style';

export function ButtonSection() {
  return (
    <S.Container>
      <S.DropDownWrap>
        <S.DropDown>
          <SelectBox title={processMethods.title} selectList={processMethods.selectList} />
          <SelectBox title={materials.title} selectList={materials.selectList} />
        </S.DropDown>
        <S.Div>
          <S.ResetIcon src={refresh} />
          필터링 리셋
        </S.Div>
      </S.DropDownWrap>
      <ToggleSection />
    </S.Container>
  );
}
