import React, { useState } from 'react';
import { arrowDropDown, Checkbox, CheckboxOn } from 'assets';
import { nanoid } from 'nanoid';
import * as S from './style';

export interface ISelectBoxProps {
  title: string;
  selectList: string[];
  filter: number[];
  setFilter: (value: number[]) => void;
}

export function SelectBox({ title, selectList, filter, setFilter }: ISelectBoxProps) {
  const [isShown, setIsShown] = useState(false);

  const toggleList = () => (isShown ? setIsShown(false) : setIsShown(true));
  const addFilter = (id: number) => {
    if (filter.includes(id)) {
      setFilter(filter.filter((e) => e !== id));
    } else setFilter([...filter, id]);
  };

  return (
    <S.Container>
      <S.DropDown onClick={() => toggleList()} isSelected={filter.length > 0}>
        <S.Title>
          {title}
          {filter.length ? `(${filter.length})` : null}
        </S.Title>
        <S.ArrowDropDown src={arrowDropDown} />
      </S.DropDown>
      {isShown && (
        <S.SelectUl>
          {selectList.map((el, idx) => (
            <S.SelectLi key={nanoid()} onClick={() => addFilter(idx)}>
              <S.CheckboxImg src={filter.includes(idx) ? CheckboxOn : Checkbox} />
              {el}
            </S.SelectLi>
          ))}
        </S.SelectUl>
      )}
    </S.Container>
  );
}
