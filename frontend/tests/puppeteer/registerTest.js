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

    await page.waitForSelector(".btn-sm");
    await page.click(".btn-sm");
    await page.waitForSelector(
      "#modalSignup .form-floating:nth-child(1) > #floatingInput"
    );
    await page.click(
      "#modalSignup .form-floating:nth-child(1) > #floatingInput"
    );
    await page.keyboard.type("registertest@gmail.com", { delay: 100 });
    await page.waitForSelector("#modalSignup #floatingPassword");
    await page.click("#modalSignup #floatingPassword");
    await page.keyboard.type("registertest", { delay: 100 });
    await page.waitForSelector(".form-floating:nth-child(3) > #floatingInput");
    await page.click(".form-floating:nth-child(3) > #floatingInput");
    await page.keyboard.type("registerTest", { delay: 100 });
    await page.waitForSelector(".form-floating:nth-child(4) > #floatingInput");
    await page.click(".form-floating:nth-child(4) > #floatingInput");
    await page.keyboard.type("register", { delay: 100 });
    await page.waitForSelector(".form-floating:nth-child(5) > #floatingInput");
    await page.click(".form-floating:nth-child(5) > #floatingInput");
    await page.keyboard.type("Test", { delay: 100 });
    await page.waitForSelector(".bi-plus-circle");
    await page.click(".bi-plus-circle");

  } catch (e) {
    await browser.close();
    throw e;
  }
})();