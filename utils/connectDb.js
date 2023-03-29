import {connections,connect} from "mongoose";
export default async function connectDb() {
  try {
    if (!connections[0].readyState) {
     await connect(process.env.NEXT_PUBLIC_MONGO_KEY || '');
      console.log("connect to db");
    }
  } catch (err) {
    console.log("failed to connect db");
  }
}
