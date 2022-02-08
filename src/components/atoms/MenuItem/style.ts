import styled from 'styled-components';

interface ContainerProps {
  color: string;
  fontOption: {
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    fontStyle?: string;
  };
  lineHeight: number;
}

export const Container = styled.span<ContainerProps>`
  display: inline;
  color: ${(props) => props.color};

  font-family: ${(props) => props.fontOption.fontFamily};
  font-style: ${(props) => props.fontOption.fontStyle};
  font-weight: ${(props) => props.fontOption.fontWeight};
  font-size: ${(props) => props.fontOption.fontSize}px;

  line-height: ${(props) => props.lineHeight}px;
`;
