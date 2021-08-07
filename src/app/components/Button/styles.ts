import { css } from '@emotion/css';

export const primaryStyles = css`
  &.MuiButton-containedPrimary {
    background-color: rgb(40, 167, 69);
    :focus {
      background-color: #218838;
    }
  }
`;

export const rootStyles = css`
  &.MuiButton-root {
    font-size: 1.5rem;
    white-space: nowrap;
  }
`;
