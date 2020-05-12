import React from "react";
import { Content, Header, Head, Footer, ShareForm } from "../components";
import { GlobalStyle, Background } from "../globalStyles";

export default () => (
  <Background>
    <GlobalStyle />
    <Head title={"Home Page"} />
    <Header />
    <Content>
      <h1>Send to a friend!</h1>
      <h3>Share this great deal with friends!</h3>
      <ShareForm />
    </Content>
    <Footer />
  </Background>
);
