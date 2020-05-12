import React from "react";
import { Content, Header, Head, Footer, ReadMore } from "../components";
import { GlobalStyle, Background } from "../globalStyles";

export default () => (
  <Background>
    <GlobalStyle />
    <Head title={"Home Page"} />
    <Header />
    <Content></Content>
    <Footer />
  </Background>
);
