import { addShare } from "./../services/share";
import IControllerResponse from "./controller";
import IShare, { isValidShare } from "../models/share/type";
import { validateEmail } from "../lib/validation";
import { sendEmail } from "../nodemailer";

export const handleError = (error: any): IControllerResponse => {
  return { status: 400, error: "Unknown error has occurred" };
};

export const addController = async (
  body: IShare
): Promise<IControllerResponse> => {
  if (!isValidShare(body)) {
    return { status: 400, error: "Invalid parameters" };
  }

  if (!validateEmail(body.friendEmail, true)) {
    return { status: 400, error: "Invalid email" };
  }

  const { error, share } = await addShare(body);

  if (!error) {
    await sendEmail(body).catch(console.error);
    return { status: 200, response: share };
  }

  return handleError(error);
};
