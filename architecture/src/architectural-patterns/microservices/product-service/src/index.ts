import express from "express";
import { setupRoutes } from "./routes";

const app = express();

app.use(express.json());

setupRoutes(app);

app.listen(3030, () =>
    console.log("Service listening on http://localhost:3030")
);

export { app };
