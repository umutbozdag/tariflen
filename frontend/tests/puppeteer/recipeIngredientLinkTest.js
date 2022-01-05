const puppeteer = require("puppeteer");
const ProgressBar = require("progress");
const prettier = require("prettier");
const fs = require("fs");
const prompts = require("prompts");

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
  let data;
  try {
    const outputFilename = "localhost:8080.json";
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto("http://localhost:8080/");

    let urls = await page.evaluate(() => {
      return [
        ...document.querySelectorAll(
          "div.row.row-cols-1.row-cols-md-4.g-3 a.d-flex.link-dark.text-decoration-none.stretched-link"
        ),
      ].map((node) => node.href);
    });
    const bar = new ProgressBar(" scrapping [:bar] :rate/bps :percent :etas", {
      complete: "=",
      incomplete: " ",
      width: 20,
      total: urls.length,
    });
    let promptContinue = false;
    console.log("Found " + urls.length + " urls.");
    data = [];
    for (let url of urls) {
      await page.goto(url);

      console.log({});
      if (!promptContinue) {
        const response = await prompts({
          type: "confirm",
          name: "value",
          message: "Continue?",
          initial: true,
        });
        if (!response.value) {
          process.exit();
        }
        promptContinue = true;
      }
      data.push({});
      bar.tick();
    }
    fs.writeFile(
      outputFilename || `./${new Date()}.json`,
      prettier.format(JSON.stringify(data), {
        parser: "json",
      }),
      (err) => {
        if (err) return console.log(err);
      }
    );
    await browser.close();
  } catch (e) {
    await browser.close();
    throw e;
  }
})();