import React, { useState, useEffect } from 'react';
import { Gnb, DashBoard } from 'components';
import { ItemType } from 'types';
import * as S from './style';

export function Main() {
  const [dashBoardData, setDashBoardData] = useState<Array<ItemType>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/requests');
        if (response.status > 400) {
          throw new Error('서버 요청에 실패했습니다');
        }
        const json = await response.json();
        setDashBoardData(json);
      } catch (error) {
        console.log('서버가 응답하지 않습니다');
      }
    };
    fetchData();
  }, []);

  return (
    <S.Container>
      <Gnb />
      <DashBoard dashBoardData={dashBoardData} />
    </S.Container>
  );
}
