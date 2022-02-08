import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 32px;

  @media (max-width: 360px) {
    display: flex;
    align-items: start;
    flex-direction: column;
  }
`;

export const Select = styled.select`
  padding: 9px 14px 9px 12px;
`;
