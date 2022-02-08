import React, { useRef } from 'react';
import * as S from './style';

export function Toggle({
  setIsToggle,
}: {
  setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const toggleRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    toggleRef.current?.classList.toggle('active');
    setIsToggle((prev) => !prev);
  };

  return (
    <S.Container ref={toggleRef} onClick={onClick}>
      <i className="indecator" />
    </S.Container>
  );
}
