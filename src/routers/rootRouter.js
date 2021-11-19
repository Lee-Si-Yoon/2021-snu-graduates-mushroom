import express from "express";
import { home, about, contact } from "../controllers/controller.js";

const rootRouter = express.Router();

rootRouter.get("/", home);
//rootRouter.get("/about", about);
//rootRouter.get("/contact", contact);

export default rootRouter;
