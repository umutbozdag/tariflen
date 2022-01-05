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
    await page.goto("http://localhost:8080/");

    await page.waitForSelector(".vs__search");
    await page.click(".vs__search");
    await page.keyboard.type("mercimek", { delay: 100 });
    await delay(2000);
    page.keyboard.press('Enter');

  } catch (e) {
    await browser.close();
    throw e;
  }
})();

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}