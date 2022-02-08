import React from 'react';
import { Filtering, ButtonSection, InfoSection, CardSection } from 'components';
import * as S from './style';

export function DashBoard() {
  return (
    <S.Container>
      <InfoSection />
      <ButtonSection />
      <CardSection />
    </S.Container>
  );
}
