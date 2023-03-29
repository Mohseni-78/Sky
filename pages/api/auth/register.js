// Imported DB ===============>
import connectDb from "@/utils/connectDb";
// Imported Models ===============>
import UserFly from "@/models/UserFly";
// Imported Helper functions ===============>
import { hashPassword } from "@/helper/functions";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).json({ status: "failed", message: "Bad Request" });
  }
  try {
    await connectDb();
  } catch (err) {
    return res
      .status(500)
      .json({ status: "failed", message: "Failed to connect db" });
  }
  const { name, lastName, email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ status: "failed", message: "Invalid Data" });
  }
  const existUser = await UserFly.findOne({ email });
  if (existUser) {
    return res
      .status(401)
      .json({ status: "failed", message: "this email is exist please login" });
  }
  const hasshedPassword =await hashPassword(password);
  try {
    const registerUser = await UserFly.create({
      name,
      lastName,
      email,
      password: hasshedPassword,
    });
    res.status(201).json({
      status: "success",
      message: "Registered succefully",
      user: registerUser,
    });
  } catch (err) {
    res.status(500).json({ status: "failed", message: "Server Error" });
  }
}
