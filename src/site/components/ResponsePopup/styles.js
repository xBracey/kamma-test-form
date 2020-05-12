import styled from "styled-components";
import { COLORS } from "../../constants";

export const ResponsePopupOuter = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResponsePopupInner = styled.div`
  background-color: white;
  padding: 40px 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.p`
  font-size: 18px;
  margin: 10px;
  color: ${props => (props.error ? COLORS.RED : COLORS.GREEN)};
`;

export const Image = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 20px;
`;
