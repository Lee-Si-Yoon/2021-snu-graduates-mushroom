import { accessSpreadsheet } from "./users";

const getNames = async () => {
  const names = [];
  const datas = await accessSpreadsheet();

  datas.forEach((d) => {
    names.push({ name: d.name, nameEng: d.nameEng, welcome: d.welcome });
  });
  return names;
};

export const home = async (req, res) => {
  const data = await getNames();
  //console.log(data);
  return res.render("home", { pageTitle: "main", data });
};

export const about = (req, res) => {
  return res.render("about", { pageTitle: "about" });
};

export const getFeedback = (req, res) => {
  return res.render("feedback", { pageTitle: "feedback" });
};
