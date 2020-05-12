import styled from "styled-components";
import { COLORS } from "../../constants";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;

  label {
    font-family: Roboto;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  label:after {
    content: "*";
    margin-left: 4px;
    color: ${COLORS.PINK};
    display: ${props => (props.required ? "inline" : "none")};
  }
`;

export const Form = styled.form`
  flex: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextInput = styled.input`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  border-radius: 15px;
  border: 2px solid ${COLORS.DARK_GREY};
  padding: 10px;
  font-size: 16px;
  width: 250px;
`;

export const Submit = styled.input`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: ${COLORS.PINK};
  margin: 20px;
  color: ${COLORS.WHITE};
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
