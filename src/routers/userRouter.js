import express from "express";
import { leesiyoon } from "../controllers/users.js";

const userRouter = express.Router();

userRouter.get("/leesiyoon", leesiyoon);

export default userRouter;
