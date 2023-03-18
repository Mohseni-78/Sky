import { model, Schema, models } from "mongoose";

const userSchema = new Schema({
  name: String,
  lastName: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  update_at: {
    type: Date,
    default: () => Date.now(),
  },
});

const User = models.User || model("User", userSchema);
export default User;
