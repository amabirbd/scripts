const puppeteer = require("puppeteer");

const extractData = async () => {
  let url = "https://entrptaher.github.io/playground-partial-extraction/";

  let browser = await puppeteer.launch({
    headless: false,
  });

  let page = await browser.newPage();

  await page.goto(url, { waitUntil: "domcontentloaded" });

  const data = await page.evaluate(() => {
    let list = [];
    let items = document.querySelectorAll("#boxes > *");

    for (const item of items) {
      console.log(item);

      list.push({
        title: item.querySelector(".title")
          ? item.querySelector(".title").innerHTML
          : "",
        subtitle: item.querySelector(".subtitle")
          ? item.querySelector(".subtitle").innerHTML
          : "",
      });
    }
    return list;
  });

  console.log("Extracted data: ", data);

  await browser.close();
};

extractData();
