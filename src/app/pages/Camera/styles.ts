import { css } from '@emotion/css';

export const cameraStyles = css`
  height: 90vh;
  .circle {
    width: 30rem;
    height: 30rem;
  }

  .rectangle {
    width: 35rem;
    height: 20rem;
  }

  .video {
    position: fixed;
    object-fit: cover !important;
    z-index: -10;
    top: 0;
    left: 0;
    transform: translateX(-5%);
    width: 105% !important;
    height: 100%;
    max-width: 105% !important;
  }

  .MuiButton-outlined {
    background-color: white !important;
  }
`;
