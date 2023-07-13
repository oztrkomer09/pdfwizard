const puppeteer = require('puppeteer');
const fs = require('fs');

const run = async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  });
  const page = await browser.newPage();

  // const url = "https://www.linkedin.com/in/%C3%B6mer-faruk-%C3%B6zt%C3%BCrk-abb97a203/"
  // const url = "https://www.linkedin.com/in/kaan-boyac%C4%B1-6033011b4/"
  await page.goto(url);

  await page.waitForSelector('h1');
  await page.waitForSelector('h1.top-card-layout__title');
  await page.waitForSelector('div.core-section-container__content');

  const data = await page.evaluate(() => {
    const nameElement = document.querySelector('h1.top-card-layout__title');
    const name = nameElement ? nameElement.innerText.trim() : '';

    const titleElement = document.querySelector('h2.top-card-layout__headline');
    const title = titleElement ? titleElement.innerText.trim() : '';

    const locationElement = document.querySelector('h3.top-card-layout__first-subline div.top-card__subline-item');
    const location = locationElement ? locationElement.innerText.trim() : '';

    const aboutElement = document.querySelector('section[data-section="summary"] p');
    const about = aboutElement ? aboutElement.innerText.trim() : '';

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
      const alternativeTitle = item.querySelector('h3.profile-section-card__title').textContent.trim();

      const issuingAuthorityElement = item.querySelector('h4.profile-section-card__subtitle a');
      const issuingAuthority = issuingAuthorityElement ? issuingAuthorityElement.innerText.trim() : '';

      const dateElement = item.querySelector('div.certifications__date-range span.certifications__start-date time');
      const date = dateElement ? dateElement.innerText.trim() : '';

      return {
        title: title || alternativeTitle,
        issuingAuthority,
        date
      };
    });

    return {
      name,
      title,
      location,
      about,
      experiences,
      educations,
      licensesAndCertifications
    };
  });

  console.log('Name:', data.name);
  console.log('Title/Ünvan:', data.title);
  console.log('Konum:', data.location);
  console.log('Hakkımda:', data.about);
  console.log('Deneyimler:', data.experiences);
  console.log('Eğitimler:', data.educations);
  console.log('Sertifikalar:', data.licensesAndCertifications);


  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync('data.json', jsonData);

  await browser.close();
};

run();

