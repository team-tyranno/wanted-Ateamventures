import React, { useState, useEffect } from 'react';
import { SelectBox } from 'components';

import * as S from './style';

export function Main() {
  const [dashBoardData, setDashBoardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/requests');
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
      Hello, Tyrannos!
      <S.Container>
        <SelectBox title="가공방식" />
        <SelectBox title="재료" />
      </S.Container>
    </S.Container>
  );
}
