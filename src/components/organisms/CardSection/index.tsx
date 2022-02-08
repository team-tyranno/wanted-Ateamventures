import React, { useState } from 'react';
import { CardItem } from 'components/molecules/CardItem';
import * as S from './style';

interface ItemType {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: Array<string>;
  material: Array<string>;
  status: string;
}

export function CardSection({
  filteredItems,
}: {
  filteredItems: Array<ItemType>;
}): React.ReactElement {
  return (
    <S.Container>
      {filteredItems.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </S.Container>
  );
}
