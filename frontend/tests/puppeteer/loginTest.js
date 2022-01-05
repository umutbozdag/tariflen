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

    await page.waitForSelector(".btn-outline-success");
    await page.click(".btn-outline-success");
    await page.waitForSelector("#modalSignin #floatingInput");
    await page.click("#modalSignin #floatingInput");
    await page.keyboard.type("burak@gmail.com", { delay: 100 });
    await page.waitForSelector("#modalSignin #floatingPassword");
    await page.click("#modalSignin #floatingPassword");
    await page.keyboard.type("123qwe", { delay: 100 });
    await page.waitForSelector(".w-100:nth-child(3)");
    await page.click(".w-100:nth-child(3)");

    console.log('Login Test Works!');
    
  } catch (e) {
    console.log('err');
    await browser.close();
    throw e;
  }
})();