import React from 'react';
import { Toggle } from 'components';
import * as S from './style';

export function ToggleSection({
  setIsToggle,
}: {
  setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <S.Container>
      <Toggle setIsToggle={setIsToggle} />
      <S.Text>상담 중인 요청만 보기</S.Text>
    </S.Container>
  );
}
