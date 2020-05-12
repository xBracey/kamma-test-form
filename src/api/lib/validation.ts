import validator from "validator";

export const validateString = (data: string, required: boolean) => {
  if (required) {
    return !!data && typeof data === "string";
  } else {
    return (!!data && typeof data === "string") || !data;
  }
};

export const validateEmail = (data: string, required: boolean) => {
  if (required) {
    return !!data && validator.isEmail(data);
  } else {
    return (!!data && validator.isEmail(data)) || !data;
  }
};
