import styled from "styled-components";
import { COLORS } from "../../constants";

export const ReadMore = styled.a`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  text-decoration: none;
  color: ${COLORS.DARK_GREY};
  text-transform: uppercase;
  align-items: center;
  margin-top: 25px;
`;

export const Arrow = styled.img`
  width: 25px;
  margin-left: 10px;
`;
