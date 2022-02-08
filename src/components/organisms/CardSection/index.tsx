import React from 'react';
import { CardItem } from 'components/molecules/CardItem';
import { ItemType } from 'types';
import * as S from './style';

export function CardSection({
  filteredItems,
}: {
  filteredItems: Array<ItemType>;
}): React.ReactElement {
  return (
    <>
      <S.Container>
        {filteredItems.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </S.Container>

      {filteredItems.length === 0 && (
        <S.NoResult>
          <span>조건에 맞는 견적 요청이 없습니다.</span>
        </S.NoResult>
      )}
    </>
  );
}
