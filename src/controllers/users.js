const { GoogleSpreadsheet } = require("google-spreadsheet");

const accessSpreadsheet = async (owner) => {
  const data = {};
  const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
  const doc = new GoogleSpreadsheet(spreadsheetId);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
  });
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows({ query: `name = ${owner}` });
  rows.forEach((row) => {
    (data["name"] = row.name),
      (data["insta"] = row.instagram),
      (data["web"] = row.website),
      (data["email"] = row.email);
  });
  return data;
};

export const leesiyoon = async (req, res) => {
  const data = await accessSpreadsheet("이시윤");
  return res.render("lsy", { pageTitle: "leesiyoon", data });
};
