import React from "react";
import errorSVG from "../../assets/error.svg";
import successSVG from "../../assets/confirm.svg";
import {
  ResponsePopupOuter,
  ResponsePopupInner,
  Message,
  Image,
} from "./styles";

export default ({ error, success, onClose }) => {
  if (!error && !success) {
    return null;
  }

  const message = error ? error : success;
  const imageSource = error ? errorSVG : successSVG;

  return (
    <ResponsePopupOuter onClick={onClose} className="response-popup-outer">
      <ResponsePopupInner className="response-popup-inner">
        <Image src={imageSource} />
        <Message error={!!error}>{message}</Message>
      </ResponsePopupInner>
    </ResponsePopupOuter>
  );
};
