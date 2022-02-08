import React, { useRef } from 'react';
import * as S from './style';

export function Toggle() {
  const toggleRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    toggleRef.current?.classList.toggle('active');
  };

  return (
    <S.Container ref={toggleRef} onClick={onClick}>
      <i className="indecator" />
    </S.Container>
  );
}
