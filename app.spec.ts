import { app } from "./app";
import request from "supertest";

describe("Event Api", () => {
  it("Shoud be able to list events", async () => {
    const response = await request(app).get("/events");

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toEqual(
      expect.objectContaining({
        name: "Rock in Rio",
        date: "2024-01-01",
      })
    );
  });

  it("Should be able to create an event", async () => {
    const response = await request(app).post("/events").send({
      name: "Lola",
      date: "2025-01-01",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body.event).toEqual(
      expect.objectContaining({
        name: "Lola",
        date: "2025-01-01",
      })
    );
  });
});
