import React from 'react';

import * as S from './style';

interface IconProps {
  src: string;
  size: {
    height: number;
    width: number;
  };
}

export function Icon({ src, size }: IconProps) {
  return <S.Container src={src} size={size} />;
}
