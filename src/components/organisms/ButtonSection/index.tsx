import React from 'react';
import { SelectBox, ToggleSection } from 'components';
import { PROCESS_METHODS, MATERIALS } from 'commons/dropDown';
import { refresh } from 'assets';
import * as S from './style';

export interface IButtonSectionProps {
  setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
  methodFilter: string[];
  setMethodFilter: (value: string[]) => void;
  materialFilter: string[];
  setMaterialFilter: (value: string[]) => void;
}

export function ButtonSection({
  setIsToggle,
  methodFilter,
  setMethodFilter,
  materialFilter,
  setMaterialFilter,
}: IButtonSectionProps) {
  const initArr: string[] = [];
  const resetFilters = () => {
    setMethodFilter(initArr);
    setMaterialFilter(initArr);
  };

  return (
    <S.Container>
      <S.DropDownWrap>
        <S.DropDown>
          <SelectBox
            title={PROCESS_METHODS.title}
            selectList={PROCESS_METHODS.selectList}
            filter={methodFilter}
            setFilter={setMethodFilter}
          />
          <SelectBox
            title={MATERIALS.title}
            selectList={MATERIALS.selectList}
            filter={materialFilter}
            setFilter={setMaterialFilter}
          />
        </S.DropDown>
        {methodFilter.length || materialFilter.length ? (
          <S.Div onClick={() => resetFilters()}>
            <S.ResetIcon src={refresh} />
            필터링 리셋
          </S.Div>
        ) : null}
      </S.DropDownWrap>
      <ToggleSection setIsToggle={setIsToggle} />
    </S.Container>
  );
}
