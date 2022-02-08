import React, { useState } from 'react';
import { SelectBox, ToggleSection } from 'components';
import { processMethods, materials } from 'commons/dropDown';
import { refresh } from 'assets';
import * as S from './style';

export function ButtonSection() {
  const initArr: number[] = [];
  const [methodFilter, setMethodFilter] = useState(initArr);
  const [materialFilter, setMaterialFilter] = useState(initArr);
  const resetFilters = () => {
    setMethodFilter(initArr);
    setMaterialFilter(initArr);
  };

  return (
    <S.Container>
      <S.DropDownWrap>
        <S.DropDown>
          <SelectBox
            title={processMethods.title}
            selectList={processMethods.selectList}
            filter={methodFilter}
            setFilter={setMethodFilter}
          />
          <SelectBox
            title={materials.title}
            selectList={materials.selectList}
            filter={materialFilter}
            setFilter={setMaterialFilter}
          />
        </S.DropDown>
        <S.Div onClick={() => resetFilters()}>
          <S.ResetIcon src={refresh} />
          필터링 리셋
        </S.Div>
      </S.DropDownWrap>
      <ToggleSection />
    </S.Container>
  );
}
