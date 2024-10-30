import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";

import userRouter from "./routes/User.router";

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/user", userRouter);

const PORT: Number = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
