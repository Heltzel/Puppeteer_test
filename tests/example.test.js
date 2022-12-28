const puppeteer = require("puppeteer");
const expect = require("chai").expect;

describe("My first puppeteer test", () => {
  it("should launch the browser", async function () {
    const browser = await puppeteer.launch({
      headless: false,
      devtools: false,
    });
    const page = await browser.newPage();
    await page.goto("https://devexpress.github.io/testcafe/example/");

    // const title = await page.title();
    const title = "await page.title()";
    const url = await page.url();
    const text = await page.$eval("p", (el) => el.textContent);
    const count = await page.$$eval("p", (el) => el.length);

    expect(title).to.be.a("string", "");
    await browser.close();
  });
});
