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
  await page.waitForSelector('h1.top-card-layout__title');
  // await page.waitForNavigation({waitUntil:"networkidle0"})

  await page.waitForSelector('div.core-section-container__content');

  let title = await page.evaluate(() => document.title);
  console.log(title);

  const data1 = await page.evaluate(() => {
    const element = document.querySelector('h1.top-card-layout__title'); // Hedef öğenin seçicisini burada da belirtin
    return element.innerText.trim();
  });
  console.log(data1);

  const data = await page.evaluate(() => {
    const experienceItems = Array.from(document.querySelectorAll('li.profile-section-card.experience-item'));
    const educationItems = Array.from(document.querySelectorAll('li.profile-section-card.education__list-item'));
    const licenseCertificationContainer = document.querySelector('section[data-section="certifications"]');
    const licenseCertificationItems = Array.from(licenseCertificationContainer.querySelectorAll('li.profile-section-card'));

    const experiences = experienceItems.map(item => {
      const titleElement = item.querySelector('h3.profile-section-card__title');
      const title = titleElement ? titleElement.innerText.trim() : '';

      const subtitleElement = item.querySelector('h4.profile-section-card__subtitle a');
      const subtitle = subtitleElement ? subtitleElement.innerText.trim() : '';

      const durationElement = item.querySelector('p.experience-item__duration span.date-range');
      const duration = durationElement ? durationElement.innerText.trim() : '';

      const locationElement = item.querySelector('p.experience-item__location');
      const location = locationElement ? locationElement.innerText.trim() : '';

      return {
        title,
        subtitle,
        duration,
        location
      };
    });

    const educations = educationItems.map(item => {
      const degreeElement = item.querySelector('span.education__item--degree-info');
      const degree = degreeElement ? degreeElement.innerText.trim() : '';

      const schoolElement = item.querySelector('h3.profile-section-card__title a');
      const school = schoolElement ? schoolElement.innerText.trim() : '';

      const dateElement = item.querySelector('p.education__item--duration span.date-range');
      const date = dateElement ? dateElement.innerText.trim() : '';

      return {
        degree,
        school,
        date
      };
    });

    const licensesAndCertifications = licenseCertificationItems.map(item => {
      const titleElement = item.querySelector('h3.profile-section-card__title a');
      const title = titleElement ? titleElement.innerText.trim() : '';

      const issuingAuthorityElement = item.querySelector('h4.profile-section-card__subtitle a');
      const issuingAuthority = issuingAuthorityElement ? issuingAuthorityElement.innerText.trim() : '';

      const dateElement = item.querySelector('div.certifications__date-range span.certifications__start-date time');
      const date = dateElement ? dateElement.innerText.trim() : '';

      return {
        title,
        issuingAuthority,
        date
      };
    });

    return {
      experiences,
      educations,
      licensesAndCertifications
    };
  });

  console.log('Deneyimler:', data.experiences);
  console.log('Eğitimler:', data.educations);
  console.log('Sertifikalar:', data.licensesAndCertifications.filter(item => !item.title.toLowerCase().includes('lisans')));

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
