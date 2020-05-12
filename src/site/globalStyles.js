import styled, { createGlobalStyle, css } from "styled-components";
import { COLORS } from "./constants";

export const GlobalStyle = createGlobalStyle`
    @import url(https://fonts.googleapis.com/css2?family=Roboto);

    html, body {
        margin: 0px;
        padding: 0px;
    }

    h1,h2,h3,p,a {
        font-family: Roboto;
    }

    h1 {
        font-size: 36px;
        margin: 10px 0px;
    }

    h2 {
        font-size: 24px;
    }

    h3 {
        font-size: 18px;
        margin: 10px 0px;
    }

    p {
        font-size: 16px;
        margin: 15px 0px;
    }

    a {
        color: ${COLORS.PINK}
    }
`;

export const Background = styled.div`
  background-color: ${COLORS.LIGHT_GREY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Container = styled.div`
  width: calc(100% - 50px);
  max-width: 1200px;
  padding: 0px 25px;
`;

export const mobileMixin = rules => css`
  @media (max-width: 900px) {
    ${rules}
  }
`;
