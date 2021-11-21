import express from "express";
import { home, about } from "../controllers/controller.js";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/about", about);

export default rootRouter;
