import React, { useState } from 'react';
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
  const [filteredItems, setFilteredItems] = useState<Array<ItemType>>(dashBoardData);

  return (
    <S.Container>
      <InfoSection />
      <ButtonSection />
      <CardSection filteredItems={filteredItems} />
    </S.Container>
  );
}
