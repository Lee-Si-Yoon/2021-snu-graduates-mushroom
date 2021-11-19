import MobileDetect from "mobile-detect";

export const localsMiddleware = (req, res, next) => {
  const md = new MobileDetect(
    "Mozilla/5.0 (Linux; U; Android 4.0.3; en-in; SonyEricssonMT11i" +
      " Build/4.1.A.0.562) AppleWebKit/534.30 (KHTML, like Gecko)" +
      " Version/4.0 Mobile Safari/534.30"
  );
  console.log(md.userAgent());
  res.locals.siteName = "버섯";
  //res.locals.isHeroku = isHeroku;
  next();
};
