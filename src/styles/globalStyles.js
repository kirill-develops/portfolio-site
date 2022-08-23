import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 64px;
  max-width: 320px;
  font-size: 2.7rem;
`;

export const TitleAccent = styled.span`
  color: #663399;
`;

export const TitleLink = styled.a`
`;

export const Body = styled.p`

`;

export const BodyAccent = styled.span`
  font-weight: bold;
`;

export default GlobalStyle;