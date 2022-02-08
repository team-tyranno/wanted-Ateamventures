import React, { useState, useEffect } from 'react';
import { ButtonSection, InfoSection, CardSection } from 'components';
import { ItemType } from 'types';
import * as S from './style';

export function DashBoard({ dashBoardData }: { dashBoardData: Array<ItemType> }) {
  const initArr: string[] = [];

  const [filteredItems, setFilteredItems] = useState<Array<ItemType>>(dashBoardData);
  const [methodFilter, setMethodFilter] = useState(initArr);
  const [materialFilter, setMaterialFilter] = useState(initArr);
  const [isToggle, setIsToggle] = useState<boolean>(false);

  useEffect(() => {
    let temp: Array<ItemType> = dashBoardData;
    if (isToggle) {
      temp = temp.filter((item) => item.status === '상담중');
    }
    methodFilter.forEach((method) => {
      temp = temp.filter((item) => item.method.includes(method));
    });
    materialFilter.forEach((material) => {
      temp = temp.filter((item) => item.material.includes(material));
    });

    setFilteredItems(temp);
  }, [dashBoardData, methodFilter, materialFilter, isToggle]);

  return (
    <S.Container>
      <InfoSection />
      <ButtonSection
        setIsToggle={setIsToggle}
        methodFilter={methodFilter}
        setMethodFilter={setMethodFilter}
        materialFilter={materialFilter}
        setMaterialFilter={setMaterialFilter}
      />
      <CardSection filteredItems={filteredItems} />
    </S.Container>
  );
}
