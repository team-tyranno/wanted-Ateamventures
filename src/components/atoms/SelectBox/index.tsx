import React, { useState } from 'react';
import { arrowDropDown, Checkbox, CheckboxOn } from 'assets';
import { nanoid } from 'nanoid';
import * as S from './style';

export interface ISelectBoxProps {
  title: string;
  selectList: string[];
}

export function SelectBox({ title, selectList }: ISelectBoxProps) {
  const initArr: number[] = [];
  const [isShown, setIsShown] = useState(false);
  const [checkedId, setCheckedId] = React.useState(initArr);

  const toggleList = () => (isShown ? setIsShown(false) : setIsShown(true));
  const checkId = (id: number) => setCheckedId([...checkedId, id]);

  return (
    <S.Container>
      <S.DropDown onClick={() => toggleList()}>
        <S.Title>{title}</S.Title>
        <S.ArrowDropDown src={arrowDropDown} />
      </S.DropDown>
      {isShown && (
        <S.SelectUl>
          {selectList.map((el, idx) => (
            <S.SelectLi key={nanoid()} onClick={() => checkId(idx)}>
              <S.CheckboxImg />
              {el}
            </S.SelectLi>
          ))}
        </S.SelectUl>
      )}
    </S.Container>
  );
}
