import express from "express";

export const app = express();

app.use(express.json());

app.get("/events", (_request, response) => {
  return response
    .status(200)
    .json([{ name: "Rock in Rio", date: "2024-01-01" }]);
});

app.post("/events", (request, response) => {
  const event = request.body;
  event._id = 10;
  return response.status(201).json({ event });
});
