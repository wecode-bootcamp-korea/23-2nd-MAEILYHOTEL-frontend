import { css } from 'styled-components';

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

export const divSize = (
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

export const border = (border, borderRadius = 'inherit') => css`
  border: ${border};
  border-radius: ${borderRadius};
`;
