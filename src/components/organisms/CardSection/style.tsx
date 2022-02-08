import styled from 'styled-components';

export const Container = styled.section`
  /* @media (min-width: 1440px) {
    width: 1130.01px;
  }

  @media (max-width: 1440px) and (min-width: 903.01px) {
    width: 748.01px;
  }

  @media (max-width: 903.01px) and (min-width: 521px) {
    width: 366px;
  } */

  /* position: absolute;
  left: 155px;
  top: 262px; */

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  row-gap: 16px;

  width: 100%;
  margin-top: 32px;
  border: 1px solid black;
`;
