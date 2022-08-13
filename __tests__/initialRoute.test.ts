import request from "supertest";
import env from "../src/config/env";
import app from "../src/app";
import httpServer from "../src/index";
import {
  clearDataBase,
  closeDataBase,
  connectMemoryDB,
} from "../src/config/db/mongo-memory";

beforeAll(() => connectMemoryDB());
afterEach(() => clearDataBase());
afterAll(() => {
  closeDataBase();
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
