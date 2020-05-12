export const validateString = (data: string, required: boolean) => {
  if (required) {
    return !!data && typeof data === "string";
  } else {
    return (!!data && typeof data === "string") || !data;
  }
};
