import express from "express";
import { errorMiddleware } from "./middleware/error.middleware";

const app = express();

app.use(express.json());

// routes go here 👇

// MUST be last
app.use(errorMiddleware);

export default app;
