import { model, Schema } from "mongoose";
import { user } from "./user.interface";

const userNameSchema = {
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
};

const guardianInfoSchema = {
  fatherName: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
};

const userSchema = new Schema<user>({
  name: userNameSchema,
  gender: ["female", "male"],
  email: { type: String, required: true },
  guardian: guardianInfoSchema,
});

export const UserModel = model<user>("user", userSchema);
