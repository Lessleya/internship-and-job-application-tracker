import { Schema, model } from "mongoose";
import { IInterview } from "./interview";
import validator from "validator";

// https://mongoosejs.com/docs/typescript.html

interface IUser {
  email: string;
  events: IInterview[];
  firstName: string;
  lastName: string;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Email address is not valid"],
  },
  events: [{ type: Schema.Types.ObjectId, ref: "Interview" }],
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const User = model<IUser>("User", userSchema);

export default User;