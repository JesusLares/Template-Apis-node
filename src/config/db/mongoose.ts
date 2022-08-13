import mongoose from "mongoose";
import env from "../env";

export default (): void => {
  const config = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
    useUnifiedTopology: true,
    autoIndex: true,
  };

  mongoose.connect(env.mongoUrl, config);
  mongoose.set("debug", false);
  mongoose.Promise = global.Promise;

  const db = mongoose.connection;

  db.on("connected", () => {
    console.log(env.mongoUrl);
    console.log("Mongoose default connection open");
  });

  db.on("reconnected", () => {
    console.log("Mongoose default connection reconnected");
  });

  db.on("error", (err) => {
    console.log("Mongoose default connection error:", err);
  });

  const SIGS = ["SIGINT", "SIGBREAK", "SIGTERM"];

  SIGS.forEach((sig) => {
    process.on(sig, () => {
      mongoose.connection.close(() => {
        console.log(`Close On ${sig}`);
        process.exit(1);
      });
    });
  });
};
