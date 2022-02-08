import React, { useState, useEffect } from 'react';
import { Gnb, DashBoard } from 'components';
import * as S from './style';

export function Main() {
  const [dashBoardData, setDashBoardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/requests'); // /requests
        if (response.status > 400) {
          throw new Error('에러');
        }
        const json = await response.json();
        console.log(json);
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
      <DashBoard />
    </S.Container>
  );
}
