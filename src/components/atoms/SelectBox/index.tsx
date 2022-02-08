import React, { useState } from 'react';
import { arrowDropDown, Checkbox, CheckboxOn } from 'assets';
import { nanoid } from 'nanoid';
import * as S from './style';

export interface ISelectBoxProps {
  title: string;
  selectList: string[];
  filter: string[];
  setFilter: (value: string[]) => void;
}

export function SelectBox({ title, selectList, filter, setFilter }: ISelectBoxProps) {
  const [isShown, setIsShown] = useState(false);

  const toggleList = () => (isShown ? setIsShown(false) : setIsShown(true));
  const addFilter = (label: string) => {
    if (filter.includes(label)) {
      setFilter(filter.filter((e) => e !== label));
    } else setFilter([...filter, label]);
  };
  const onBlur = () => {
    if (isShown) setIsShown(false);
  };

  return (
    <S.Container tabIndex={0} onBlur={onBlur}>
      <S.DropDown onClick={() => toggleList()} isSelected={filter.length > 0}>
        <S.Title>
          {title}
          {filter.length ? `(${filter.length})` : null}
        </S.Title>
        <S.ArrowDropDown src={arrowDropDown} />
      </S.DropDown>
      {isShown && (
        <S.SelectUl>
          {selectList.map((el) => (
            <S.SelectLi key={nanoid()} onClick={() => addFilter(el)}>
              <S.CheckboxImg src={filter.includes(el) ? CheckboxOn : Checkbox} />
              {el}
            </S.SelectLi>
          ))}
        </S.SelectUl>
      )}
    </S.Container>
  );
}
