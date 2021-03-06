import React, { useState } from "react";
import { Form, TextInput, InputContainer, Submit } from "./styles";
import { ResponsePopup } from "../";

export default () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [data, setData] = useState({
    name: "",
    friendName: "",
    friendEmail: "",
  });

  const isEmpty = parameter => {
    return !parameter || parameter.trim() === "";
  };

  const changeData = (name, event) => {
    const newData = { ...data };
    newData[name] = event.target.value;
    setData(newData);
  };

  const postRequest = async () => {
    const response = await fetch("http://localhost:8000/api/share/add", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJSON = await response.json();

    if (response.ok) {
      setSuccess("Form successfully submitted");
    } else {
      if (responseJSON.error) {
        setError(responseJSON.error);
      } else {
        setError("Unknown error has occurred");
      }
    }
  };

  const submitForm = event => {
    event.preventDefault();
    const { name, friendName, friendEmail } = data;

    if (isEmpty(name)) {
      setError("Name cannot be empty");
      return;
    } else if (isEmpty(friendName)) {
      setError("Friend name cannot be empty");
      return;
    } else if (isEmpty(friendEmail)) {
      setError("Friend email cannot be empty");
      return;
    }

    postRequest();
  };

  const onPopupClose = () => {
    if (!!success) {
      setSuccess(null);
      window.location.reload(false);
    } else {
      setError(null);
    }
  };

  return (
    <>
      <ResponsePopup error={error} success={success} onClose={onPopupClose} />
      <Form onSubmit={submitForm}>
        <InputContainer required>
          <label htmlFor="name">Your Name</label>
          <TextInput
            type="text"
            id="name"
            onChange={event => changeData("name", event)}
            value={data.name}
          />
        </InputContainer>
        <InputContainer required>
          <label htmlFor="name">Friend's Name</label>
          <TextInput
            type="text"
            id="friendName"
            onChange={event => changeData("friendName", event)}
            value={data.friendName}
          />
        </InputContainer>
        <InputContainer required>
          <label htmlFor="name">Friend's Email</label>
          <TextInput
            type="text"
            id="friendEmail"
            onChange={event => changeData("friendEmail", event)}
            value={data.friendEmail}
          />
        </InputContainer>
        <Submit type="submit" value="Submit" />
      </Form>
    </>
  );
};
