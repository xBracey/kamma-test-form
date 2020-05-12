import styled from "styled-components";
import { Container } from "../../globalStyles";
import { COLORS } from "../../constants";

export const Footer = styled(Container)`
  display: flex;
  padding: 25px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  a {
    color: ${COLORS.BLACK};
  }

  p:after,
  a:after {
    content: "|";
    padding: 8px;
  }

  p:last-child:after,
  a:last-child:after {
    content: "";
  }
`;
