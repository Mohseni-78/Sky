import mongoose from "mongoose";
const mongoUrl =
  "mongodb+srv://Alireza:7lrhTFAqgOx6L7U0@cluster0.wfxxiu7.mongodb.net/?retryWrites=true&w=majority";

export default async function connectDb() {
  try {
    if (!mongoose.connections[0].readyState) {
     await mongoose.connect(mongoUrl);
      console.log("connect to db");
    }
  } catch (err) {
    console.log("failed to connect db");
  }
}
