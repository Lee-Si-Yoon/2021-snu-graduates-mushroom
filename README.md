<div align="center">
  <a href="https://snugraduates-2021-mush.herokuapp.com/">
    <img src="https://user-images.githubusercontent.com/76679207/208579940-5400ca58-f9f6-45e5-9c7a-e3430da2154c.jpg" width="400" alt="mainflow">
  </a>
  </br>
  <b>click image to enter</b>
</div>

## Preview

<div align="center">
  <img src="https://user-images.githubusercontent.com/76679207/208579590-f54e268b-43f1-4f66-9a8e-77705072612a.gif" width="800" alt="mainflow">
</div>

## Summary

글에서 묘사하는 사람은 ‘버섯이 자라는 소리’를 들을 수 있거나, ‘뿔을 기르는 방법’과 같은 무용하거나 혹은 유용한 것들을 알고있습니다. 이와 같은 보이지 않는 것들을 감각하는 능력이 사실의 차원에서는 터무니 없거나 불가능해보일지라도, 태도/믿음의 수준에서는 그것들이 누군가에게는 분명 의미있는 재주일 수 있다고 생각합니다. 우리 또한 관심을 가지고 관찰하는 것들이 보잘것없어보이거나 터무니없어보일지라도 각자의 관심사를 바라보는 방식/태도는 누군가에게 의미있는일이 될 수 있음을 믿습니다.

> by Park JongHyun

## Using

nodejs, pug, googleapis, google-spreadsheet

## About Project

기존에는 각 작가들의 글과 이미지, 영상을 받아 `wix`에 웹담당이 레이아웃을 꾸며서 손수 하나씩 업로드하는 방식으로 졸전 사이트를 만들어왔습니다.

그러나 예년과 다르게 졸업준비위원회가 늦게 결성이 되었고 **1주만에** 글 및 이미지들을 수합해서 업로드까지 끝마쳐야 하는 상황이 되어서, `google forms`를 통해 데이터를 받고, google forms를 바탕으로 생성된 `google spreadsheet`를 DB로 삼는 웹을 만들게 되었습니다.

## Focused On

> 웹디자인, 포스터 & 팜플렛 디자인, 글 & 이미지 수합, 개발까지 맡았기에 전시참여자 모두의 작품이 잘 올라갈 수 있도록 책임을 지고 끌고가는 것에 중점을 두었습니다.

<div align="center">
  <img src="https://user-images.githubusercontent.com/76679207/208582968-60d1763f-57dc-4e7d-866b-4ba96ea932d7.PNG" width="800" alt="mushTable">
  <p>google forms를 통해 받은 데이터</p>
</div>

```js
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
      ...
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
```

위 스프레드 시트를 파싱해서

```js
export const lsy = async (req, res) => {
  const owner = "이시윤";
  const data = await findByName(owner);
  return res.render("leesiyoon", { pageTitle: owner, data });
};
```

res로 넘겨주고

```pug
block content
    +content(data.imgs, data.videos)
    div.owner__container
        +owner(data.name, data.nameEng, data.insta, data.web, data.email, data.welcome)
    if data.text
        div.text__container
            each text in data.text
                p=text
    if data.caption
        div.caption__container
            each caption in data.caption
                p=caption
```

다음과 같이 렌더링했습니다

---

## Notes
