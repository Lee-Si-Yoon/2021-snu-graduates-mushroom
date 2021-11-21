export const home = (req, res) => {
  return res.render("home", { pageTitle: "main" });
};

export const about = (req, res) => {
  return res.render("about", { pageTitle: "about" });
};

export const getFeedback = (req, res) => {
  return res.render("feedback", { pageTitle: "feedback" });
};
