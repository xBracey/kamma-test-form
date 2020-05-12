import styled from "styled-components";
import { Container } from "../../globalStyles";
import { COLORS } from "../../constants";

export const Content = styled(Container)`
  display: flex;
  padding: 50px 50px 25px 50px;
  margin: 25px;
  max-width: 1100px;
  width: calc(100% - 154px);
  border: 2px solid ${COLORS.DARK_GREY};
  background-color: ${COLORS.WHITE};
  flex-direction: column;
  border-radius: 10px;
`;
