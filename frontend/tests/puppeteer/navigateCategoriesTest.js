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

    await page.waitForSelector(".bi-layout-text-sidebar-reverse");
    await page.click(".bi-layout-text-sidebar-reverse");
    await page.evaluate(() => {
      document.querySelector('.navbar-nav .nav-item > a').click();
      });

      
    await page.waitForSelector(".offcanvas-backdrop");
    await page.click(".offcanvas-backdrop");

  } catch (e) {
    await browser.close();
    throw e;
  }
})();