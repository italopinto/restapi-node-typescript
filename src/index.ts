import cors from "cors";
import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json";

import userRouter from "./routes/User.router";

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/user", userRouter);

app.get("/", async (req: Request, res: Response) => {
  res.status(200).json({ ok: "server up and running!" });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT: Number = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
