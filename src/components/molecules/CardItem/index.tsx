import React from 'react';
import { ItemType } from 'types';
import * as S from './style';

interface ItemProps {
  item: ItemType;
}

export function CardItem({ item }: ItemProps): React.ReactElement {
  const { title, client, due, count, amount, method, material, status } = item;

  return (
    <S.Wrapper>
      <h3>{title}</h3>
      <h5>{client}</h5>
      <span className="duedate">{due}까지 납기</span>
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
        <button type="button" className="request">
          요청 내역 보기
        </button>
        <button type="button" className="contact">
          채팅하기
        </button>
      </div>
      <span className="inquiry">{status}</span>
    </S.Wrapper>
  );
}
