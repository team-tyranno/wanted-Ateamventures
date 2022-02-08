import React from 'react';
import * as S from './style';

interface ItemProps {
  item: {
    id: number;
    title: string;
    client: string;
    due: string;
    count: number;
    amount: number;
    method: object;
    material: object;
    status: string;
  };
}

export function CardItem({ item }: ItemProps) {
  const { title, client, due, count, amount, method, material, status } = item;

  return (
    <S.Wrapper>
      <h3>{title}</h3>
      <h5>{client}</h5>
      <span>{due}까지 납기</span>
      <hr />
      <dl>
        <dt>도면개수</dt>
        <dd>{count}개</dd>
      </dl>
      <dl>
        <dt>총 수량</dt>
        <dd>{amount}개</dd>
      </dl>
      <dl>
        <dt>가공방식</dt>
        <dd>{method}</dd>
      </dl>
      <dl>
        <dt>재료</dt>
        <dd>{material}</dd>
      </dl>
      <div>
        <button type="button">요청 내역 보기</button>
        <button type="button">채팅하기</button>
      </div>
      <span>{status}</span>
    </S.Wrapper>
  );
}
