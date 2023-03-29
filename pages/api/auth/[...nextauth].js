import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// Imported DB ===============>
import connectDb from "@/utils/connectDb";
// Imported Models ===============>
import UserFly from "@/models/UserFly";
// Imported Helper functions ===============>
import { verifyPassword } from "@/helper/functions";

export default nextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        try {
          await connectDb();
        } catch (err) {
          throw new Error("Server Error");
        }
        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error("Invalid Data");
        }
        const user = await UserFly.findOne({ email });
        if (!user) {
          throw new Error("Email Dosnt Exist");
        }
        if (!(await verifyPassword(password, user.password))) {
          throw new Error("Username or password in not correct");
        }
        return { email };
      },
    }),
  ],
});
