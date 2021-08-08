import { css } from '@emotion/css';

export const cameraStyles = css`
  .circle {
    width: 30rem;
    height: 30rem;
  }

  .rectangle {
    width: 35rem;
    height: 20rem;
  }

  .video {
    position: absolute;
    z-index: -50;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: 100vh;
  }
`;
