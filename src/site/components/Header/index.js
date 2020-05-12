import React from "react";
import { Header, Logo } from "./styles";
import logo from "../../assets/logo.svg";

export default () => (
  <Header>
    <Logo src={logo} width={160} />
  </Header>
);
