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
  
    await page.evaluate(() => {
        document.querySelector('#nav-followers > .container > .row > .col:nth-child(1) > .card > .card-body > .container > a').click();
        });
    
  } catch (e) {
    await browser.close();
    throw e;
  }
})();