import styled from 'styled-components';

interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  width: 2px;
  height: 16px;

  background-color: ${(props) => props.color};
`;
