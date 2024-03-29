import request from "supertest";
import { createApp } from "../createApp";

import { type Express } from "express-serve-static-core";

describe("/api/users", () => {
  let app: Express = createApp();

  beforeAll(() => {
    app = createApp();
  });

  it("should return  epmty array when getting /api/users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.body).toStrictEqual([]);
  });
});
