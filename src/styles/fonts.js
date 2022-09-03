import { css } from 'styled-components';
import AbrilFatface from '../fonts/AbrilFatface-Regular.ttf';
import Lato from '../fonts/Lato-Regular.ttf';

const fonts = {
  lato: () => css`@font-face {
    font-family: 'Lato';
    src: local('Lato'), local('Lato'),
      url(${Lato}) format('ttf');
    font-weight: 400;
    font-style: normal;
  }`,
  abrilFatface: () => css`@font-face {
    font-family: 'AbrilFatface';
    src: local('Abril Fatface'), local('AbrilFatface'),
      url(${AbrilFatface}) format('ttf');
    font-weight: 400;
    font-style: normal;
  }`,
};

export default fonts;
