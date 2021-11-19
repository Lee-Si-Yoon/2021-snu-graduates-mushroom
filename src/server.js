import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src" + "/views");

app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static("assets"));

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/mush", userRouter);

export default app;

// HEROKU
// heroku logs --tail
// heroku git:remote -a snugraduates-2021-mush
// git add .
// git commit -am "make it better"
// git push heroku master
