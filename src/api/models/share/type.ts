import { validateString } from "../../lib/validation";

export default interface IShare {
  name: string;
  friendName: string;
  friendEmail: string;
}

export const isValidShare = (data: any): data is IShare => {
  if (!data || typeof data !== "object") {
    return false;
  }

  const { name, friendName, friendEmail } = data;

  return (
    validateString(name, true) &&
    validateString(friendName, true) &&
    validateString(friendEmail, true)
  );
};
