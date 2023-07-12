const puppeteer = require('puppeteer');

const run = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  });
  const page = await browser.newPage();

  await page.goto("https://tr.linkedin.com/in/kaan-boyac%C4%B1-6033011b4");

  // Beklenen öğenin seçicisini kullanarak öğenin sayfada görünmesini bekler
  await page.waitForSelector('h1');

  let title = await page.evaluate(() => document.title);
  console.log(title);

  await browser.close();
};

run();


// (async () => {
//   try {
//     const browser = await puppeteer.launch({
//       headless: false,
//       executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
//     });

//     const page = await browser.newPage();

//     await page.goto('https://tr.linkedin.com/in/kaan-boyac%C4%B1-6033011b4');

//     await page.waitForSelector('h1.text-heading-xlarge');
//     const firstName = await page.$eval('h1.text-heading-xlarge', element => element.textContent.trim());

//     console.log('First Name:', firstName);

//     await browser.close();
//   } catch (error) {
//     console.error(error);
//   }
// })();
