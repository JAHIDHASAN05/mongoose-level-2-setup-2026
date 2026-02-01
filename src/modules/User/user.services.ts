import { user } from "./user.interface";
import { UserModel } from "./user.schema";

const createUserIntoDB = async (user: user) => {
  try {
    const result = await UserModel.create(user);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const userServices = {
  createUserIntoDB,
};
