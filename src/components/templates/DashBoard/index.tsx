import React from 'react';
import { ButtonSection, InfoSection, CardSection } from 'components';
import * as S from './style';

interface ItemType {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: object;
  material: object;
  status: string;
}

export function DashBoard({ dashBoardData }: { dashBoardData: Array<ItemType> }) {
  return (
    <S.Container>
      <InfoSection />
      <ButtonSection />
      <CardSection />
    </S.Container>
  );
}
