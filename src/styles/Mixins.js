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
