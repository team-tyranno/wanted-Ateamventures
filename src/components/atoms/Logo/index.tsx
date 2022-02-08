import React from 'react';

import * as S from './style';

interface LogoProps {
  src: string;
  size: {
    height: number;
    width: number;
  };
}

export function Logo({ src, size }: LogoProps) {
  return <S.Container src={src} size={size} />;
}
