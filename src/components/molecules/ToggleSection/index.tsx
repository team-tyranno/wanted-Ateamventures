import React from 'react';
import { Toggle } from 'components';
import * as S from './style';

export function ToggleSection() {
  return (
    <S.Container>
      <Toggle />
      <S.Text>상담 중인 요청만 보기</S.Text>
    </S.Container>
  );
}
