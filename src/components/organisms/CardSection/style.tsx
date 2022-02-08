import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(356px, 1fr));
  column-gap: 16px;
  row-gap: 16px;

  width: 100%;
  margin-top: 32px;
`;
