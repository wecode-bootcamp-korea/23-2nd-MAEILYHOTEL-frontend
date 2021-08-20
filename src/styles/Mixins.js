import { css, keyframes } from 'styled-components';

export const flexSet = (justifyContent, alignItems, flexDirection) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-direction: ${flexDirection};
`;

export const fullScreen = css`
  width: calc(100vw - (100vw - 100%));
`;

export const fontSet = (
  fontSize,
  color,
  fontWeight = 'inherit',
  lineHeight = 'inherit'
) => css`
  font-size: ${fontSize};
  color: ${color};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
`;

export const boxSizeSet = (
  width,
  height,
  margin = 'inherit',
  padding = 'inherit'
) => css`
  width: ${width};
  height: ${height};
  margin: ${margin};
  padding: ${padding};
`;

export const border = (border, borderRadius) => css`
  border: ${border};
  border-radius: ${borderRadius};
`;

export const listHover = keyframes`
0%{
  opacity : 0;
}

100%{
  opacity : 1;
}
`;
