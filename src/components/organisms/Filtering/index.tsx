import React, { useState } from 'react';
import { SelectBox } from 'components';
import { processMethods, materials } from 'constants/dropDown';
import { refresh } from 'assets';
import * as S from './style';

export function Filtering() {
  const [criteria, setCriteria] = useState([]);

  return (
    <S.Container>
      <S.DropDown>
        <SelectBox title={processMethods.title} selectList={processMethods.selectList} />
        <SelectBox title={materials.title} selectList={materials.selectList} />
      </S.DropDown>
      <S.Div>
        <S.ResetIcon src={refresh} />
        필터링 리셋
      </S.Div>
    </S.Container>
  );
}
