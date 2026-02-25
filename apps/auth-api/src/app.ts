import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());

// routes go here 👇

// MUST be last
app.use(errorMiddleware);

export const createApp = () => app;
