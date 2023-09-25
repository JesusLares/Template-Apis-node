import request from "supertest";

import httpServer from "@src/index";
import app from "@src/app";
import env from "@config/env";

afterAll(() => {
  httpServer.close();
});

describe("GET /", () => {
  test("Return correct data with fetch GET /", async () => {
    const response = await request(app).get(`${env.initialRoute}/`);

    expect(response.status).toBe(200);
    expect(response.type).toBe("text/html");
    expect(response.text).toBe("Template");
  });
});
