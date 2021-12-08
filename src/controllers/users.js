function parseCaption(c) {
  if (c == "1") {
    return;
  } else {
    const cEach = c.split("/");
    //console.log(cEach);
    return cEach;
  }
}

export const accessSpreadsheet = async () => {
  const { GoogleSpreadsheet } = require("google-spreadsheet");
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  const doc = new GoogleSpreadsheet(spreadsheetId);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
  });
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();
  const data = [];

  rows.forEach((row) => {
    data.push({
      name: row.name,
      nameEng: row.nameEng,
      insta: row.instagram,
      web: row.website,
      email: row.email,
      welcome: row.welcome,
      text: parseCaption(row.text),
      caption: parseCaption(row.caption),
      imgs: [
        row.img0,
        row.img1,
        row.img2,
        row.img3,
        row.img4,
        row.img5,
        row.img6,
        row.img7,
        row.img8,
        row.img9,
      ].filter((n) => n),
      videos: [
        row.video0,
        row.video1,
        row.video2,
        row.video3,
        row.video4,
        row.video5,
      ].filter((n) => n),
    });
  });

  return data;
};

const findByName = async (owner) => {
  const data = [];
  const datas = await accessSpreadsheet();
  datas.forEach((d) => {
    if (d.name == owner) {
      data.push(d);
    }
  });
  return data[0];
};

export const kja0 = async (req, res) => {
  const owner = "김정아";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const jjk1 = async (req, res) => {
  const owner = "장재경";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const lhr2 = async (req, res) => {
  const owner = "이혜리";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const lhm3 = async (req, res) => {
  const owner = "이현민";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const lsy4 = async (req, res) => {
  const owner = "이시윤";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const lsy5 = async (req, res) => {
  const owner = "이서윤";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const yjy6 = async (req, res) => {
  const owner = "윤정연";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const pyh7 = async (req, res) => {
  const owner = "박유현";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const ojw8 = async (req, res) => {
  const owner = "오지원";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const okw9 = async (req, res) => {
  const owner = "오경원";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const ygj10 = async (req, res) => {
  const owner = "여건주";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const abn11 = async (req, res) => {
  const owner = "안병남";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const shj12 = async (req, res) => {
  const owner = "손효진";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const smj13 = async (req, res) => {
  const owner = "손민지";
  const data = await findByName(owner);
  console.log(data);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const sjy14 = async (req, res) => {
  const owner = "성지윤";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const bjy15 = async (req, res) => {
  const owner = "빈지영";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const pjh16 = async (req, res) => {
  const owner = "박종현";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const kyj17 = async (req, res) => {
  const owner = "김윤지";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
export const kdh18 = async (req, res) => {
  const owner = "강다현";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
