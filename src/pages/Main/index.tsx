import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { SelectBox } from 'components';

=======
import { Gnb, DashBoard } from 'components';
>>>>>>> cf0a5b17af4f99fd5528cb2036eba6169109234b
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
<<<<<<< HEAD
    <S.Container>
      Hello, Tyrannos!
      <S.Container>
        <SelectBox title="가공방식" />
        <SelectBox title="재료" />
      </S.Container>
    </S.Container>
=======
    <>
      <Gnb />
      <DashBoard />
    </>
>>>>>>> cf0a5b17af4f99fd5528cb2036eba6169109234b
  );
}
