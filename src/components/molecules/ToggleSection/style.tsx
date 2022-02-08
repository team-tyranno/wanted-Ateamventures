import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 360px) {
    margin-top: 20px;
  }
`;

export const Text = styled.span`
  font-family: Noto Sans KR Medium;
  font-size: 14px;
  color: #323d45;

  margin-left: 16px;
`;
