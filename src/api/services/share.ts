import { models } from "../models";
import IShare from "../models/share/type";
import share from "../models/share";

interface IShareResponse {
  share: share | null;
  error?: any;
}

export const addShare = async (shareData: IShare): Promise<IShareResponse> => {
  try {
    const share = await models.share.create(shareData);
    return { share };
  } catch (error) {
    return { error, share: null };
  }
};
