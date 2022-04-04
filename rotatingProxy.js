const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    args: ["--proxy-server=http://127.0.0.1:8080"],
  });

  const page = await browser.newPage();

  try {
    await page.goto("https://httpbin.org/ip");
  } catch (err) {
    console.error(err);
  }

  await browser.close();
})();
