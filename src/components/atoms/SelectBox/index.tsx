import React from 'react';
import * as S from './style';

export interface ISelectBoxProps {
  title: string;
}

export function SelectBox({ title }: ISelectBoxProps) {
  return (
    <S.Container>
      {title}
      <ul>
        {/* <li>하이</li>
        <li>헬로우</li> */}
      </ul>
    </S.Container>
  );
}
