const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    // Uncomment this line to open the browser 👇
    headless: false,
    defaultViewport: null,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--window-size=1300,1024",
    ],
  });
  try {
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto("http://localhost:8080/tarif/izwCNfxQaCXKssn-j4EuoVem");

    await page.waitForSelector(".list-group-item:nth-child(1) a");
    await page.click(".list-group-item:nth-child(1) a");

  } catch (e) {
    await browser.close();
    throw e;
  }
})();