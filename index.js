const puppeteer = require("puppeteer");
const fs = require("fs");

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.traversymedia.com");

  // await page.screenshot({ path: "example.png", fullPage: false });
  // await page.pdf({ path: "example.pdf", format: "A4" });
  // const html = await page.html();
  // const title = await page.evaluate(() => document.title);
  // const text = await page.evaluate(() => document.body.innerText);
  // const links = await page.evaluate(() =>
  //   Array.from(document.querySelectorAll("a"), (el) => el.href)
  // );

  const courses = await page.evaluate(() =>
    Array.from(document.querySelectorAll("#courses .card"), (el) => ({
      title: el.querySelector(".card-body h3").innerHTML,
      level: el.querySelector(".card-body .level").innerHTML,
      url: el.querySelector(".card-footer a").href,
      promo: el.querySelector(".card-footer .promo-code .promo").innerText,
    }))
  );

  fs.writeFile("courses.json", JSON.stringify(courses), (err) => {
    if (err) {
      console.log("File saved");
    }
  });

  console.log(courses);

  await browser.close();
}

run();
