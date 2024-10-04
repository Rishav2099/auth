import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("monog connected");
    });

    connection.on("error", (error) => {
      console.log("monog conn error", error);
      process.exit();
    });
  } catch (error) {
    console.log("something wrong in db connect");
    console.log(error);
  }
}
