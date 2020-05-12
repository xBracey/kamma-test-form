import React from "react";
import { ReadMore, Arrow } from "./styles";
import arrow from "../../assets/arrow.svg";

export default () => (
  <ReadMore href="https://www.kammadata.com/how-we-can-help/">
    Read more about how we work
    <Arrow src={arrow} />
  </ReadMore>
);
