/* eslint-disable no-console */
import http from "http";

import app from "@src/app";
import env from "@config/env";

process.on("uncaughtException", (e) => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", (e) => {
  console.log(e);
  process.exit(1);
});
const port = Number(env.port);
const { ipServer } = env;
app.set("port", port);

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  console.log(`server running in http://${ipServer}:${port}${env.initialRoute}`);
});

export default httpServer;
