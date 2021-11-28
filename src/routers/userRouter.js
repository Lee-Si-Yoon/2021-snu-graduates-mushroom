import express from "express";
import {
  kja0,
  jjk1,
  lhr2,
  lhm3,
  lsy4,
  lsy5,
  yjy6,
  pyh7,
  ojw8,
  okw9,
  ygj10,
  abn11,
  shj12,
  smj13,
  sjy14,
  bjy15,
  pjh16,
  kyj17,
  kdh18,
} from "../controllers/users.js";

const userRouter = express.Router();

userRouter.get(`/kja0`, kja0);
userRouter.get(`/jjk1`, jjk1);
userRouter.get(`/lhr2`, lhr2);
userRouter.get(`/lhm3`, lhm3);
userRouter.get(`/lsy4`, lsy4);
userRouter.get(`/lsy5`, lsy5);
userRouter.get(`/yjy6`, yjy6);
userRouter.get(`/pyh7`, pyh7);
userRouter.get(`/ojw8`, ojw8);
userRouter.get(`/okw9`, okw9);
userRouter.get(`/ygj10`, ygj10);
userRouter.get(`/abn11`, abn11);
userRouter.get(`/shj12`, shj12);
userRouter.get(`/smj13`, smj13);
userRouter.get(`/sjy14`, sjy14);
userRouter.get(`/bjy15`, bjy15);
userRouter.get(`/pjh16`, pjh16);
userRouter.get(`/kyj17`, kyj17);
userRouter.get(`/kdh18`, kdh18);

export default userRouter;
