export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "버섯";
  //res.locals.isHeroku = isHeroku;
  next();
};
