import styled from 'styled-components';

interface ContainerProps {
  size: {
    height: number;
    width: number;
  };
}

export const Container = styled.img<ContainerProps>`
  height: ${(props) => props.size.height}px;
  width: ${(props) => props.size.width}px;
`;
