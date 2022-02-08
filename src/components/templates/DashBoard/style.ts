import styled from 'styled-components';
import { STYLE } from 'commons';

export const Container = styled.div`
  @media (max-width: ${STYLE.MOBILE_WIDTH}px) {
    width: 88.89%;
    margin-top: 68px;
  }

  @media (min-width: ${STYLE.MOBILE_WIDTH}px) {
    width: 78%;
    margin-top: 110px;
  }
`;
