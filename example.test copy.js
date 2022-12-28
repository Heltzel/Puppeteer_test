const puppeteer = require("puppeteer");

describe("My first puppeteer test", () => {
  it("should launch the browser", async function () {
    const browser = await puppeteer.launch({
      headless: false,
      devtools: false,
    });
    const page = await browser.newPage();
    await page.goto("https://devexpress.github.io/testcafe/example/");
    /*
    await page.type("#developer-name", "Marc", { delay: 1000 });
    await page.click("#tried-test-cafe", { clickCount: 1 });
    await page.select("#preferred-interface", "JavaScript API");
    await page.type("#comments", "Tis is a test message bla bla");
    await page.click("#submit-button");
    await page.waitForSelector(".result-content");
    await page.waitForTimeout(2000);
		*/
    const title = await page.title();
    const url = await page.url();
    const text = await page.$eval("p", (el) => el.textContent);
    const count = await page.$$eval("p", (el) => el.length);
    console.log("textContyent: " + text);
    console.log("count P tags: " + count);
    // new Promise((r) => setTimeout(r, 10000));
    await browser.close();
  });
});
