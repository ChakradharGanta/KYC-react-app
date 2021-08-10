import { css } from '@emotion/css';

export const minHeight40 = css`
  max-height: 4.2rem;
`;

export const errorStyle = css`
  fieldset {
    border-color: #fca5a5 !important;
  }
`;

export const inputStyles = css`
  &.MuiInputBase-root {
    font-size: 1.6rem;
    border-radius: 0.8rem;
  }
  .MuiOutlinedInput-input {
    padding: 1.85rem 0rem;
    border: none;
  }
  &.MuiOutlinedInput-root.Mui-focused fieldset {
    border-color: #80bdff !important;
  }
`;
