import React from 'react';

import * as S from './style';

interface DividerProps {
  color: string;
}

export function Divider({ color }: DividerProps) {
  return <S.Container color={color} />;
}
