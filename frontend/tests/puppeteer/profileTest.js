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
    await page.goto("http://localhost:8080/profil/burak");

    await page.waitForSelector("#nav-followers-tab");
    await page.click("#nav-followers-tab");
    await page.waitForSelector(
      ".col:nth-child(2) > .card > .card-body > .container > .link-dark"
    );
    await page.click(
      ".col:nth-child(2) > .card > .card-body > .container > .link-dark"
    );

    await browser.close();
  } catch (e) {
    await browser.close();
    throw e;
  }
})();