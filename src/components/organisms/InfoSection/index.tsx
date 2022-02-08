import React from 'react';
import { MenuItem } from 'components';
import * as S from './style';

const titleFontOption = {
  fontFamily: 'Noto Sans KR',
  fontSize: 20,
  fontWeight: 600,
};

const descriptionFontOption = {
  fontFamily: 'Noto Sans KR',
  fontSize: 16,
  fontWeight: 400,
};

export function InfoSection() {
  return (
    <S.Container>
      <MenuItem text="들어온 요청" color="#323d45" fontOption={titleFontOption} lineHeight={32} />
      <MenuItem
        text="파트너님에게 딱 맞는 요청서를 찾아보세요"
        color="#323d45"
        fontOption={descriptionFontOption}
        lineHeight={24}
      />
    </S.Container>
  );
}
