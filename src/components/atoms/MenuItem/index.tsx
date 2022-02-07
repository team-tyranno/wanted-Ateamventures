import React from 'react';

import * as S from './style';

interface MenuItemProps {
  text: string;
  color: string;
  fontOption: {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    fontStyle?: string;
  };
  lineHeight: number;
}

export function MenuItem({ text, color, fontOption, lineHeight }: MenuItemProps) {
  return (
    <S.Container color={color} fontOption={fontOption} lineHeight={lineHeight}>
      {text}
    </S.Container>
  );
}
