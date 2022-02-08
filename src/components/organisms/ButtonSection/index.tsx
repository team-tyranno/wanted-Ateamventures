import React from 'react';
import { Toggle } from 'components';
import * as S from './style';

export function ButtonSection() {
  return (
    <S.Container>
      <S.Select name="language">
        <option value="none">=== 선택 ===</option>
        <option value="korean">한국어</option>
        <option value="english">영어</option>
        <option value="chinese">중국어</option>
        <option value="spanish">스페인어</option>
      </S.Select>
      <Toggle />
    </S.Container>
  );
}
