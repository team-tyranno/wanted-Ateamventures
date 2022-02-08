import React, { useState, useEffect } from 'react';
import { Gnb, DashBoard } from 'components';
import { ItemType } from 'types';
import * as S from './style';

export function Main() {
  const [dashBoardData, setDashBoardData] = useState<Array<ItemType>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/requests'); // /requests
        if (response.status > 400) {
          throw new Error('에러');
        }
        const json = await response.json();
        setDashBoardData(json);
      } catch (error) {
        console.log('에러2');
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
