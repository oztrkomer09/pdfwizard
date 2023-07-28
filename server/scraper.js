import puppeteer from 'puppeteer';
import fs from 'fs';

const runLinkedInScraper = async (url) => {
  // const linkedInUrlPattern = /^https:\/\/(?:\w+\.)?linkedin\.com\/in\/[-\w%.]+\/?$/;
  // if (!linkedInUrlPattern.test(url)) {
  //   throw new Error('Please enter a valid LinkedIn profile URL');
  // }

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    await page.goto(url);

    const requiredSelectors = [
      'h1',
      'h1.top-card-layout__title',
      'div.core-section-container__content',
    ];

    await Promise.all(
      requiredSelectors.map((selector) => page.waitForSelector(selector, { timeout: 10000 }))
    );

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

      const languagesContainer = document.querySelector('section[data-section="languages"]');
      const languagesItems = languagesContainer ? Array.from(languagesContainer.querySelectorAll('li.profile-section-card')) : [];

      const licenseCertificationContainer = document.querySelector('section[data-section="certifications"]');
      const licenseCertificationItems = licenseCertificationContainer ? Array.from(licenseCertificationContainer.querySelectorAll('li.profile-section-card')) : [];


      const experiences = experienceItems.map(item => {
        const titleElement = item.querySelector('h3.profile-section-card__title');
        const title = titleElement ? titleElement.innerText.trim() : '';

        const subtitleElement = item.querySelector('h4.profile-section-card__subtitle a');
        const subtitle = subtitleElement ? subtitleElement.innerText.trim() : '';

        const durationElement = item.querySelector('p.experience-item__duration');
        const startDateElement = durationElement.querySelector('time:first-child');
        const startDate = startDateElement ? startDateElement.innerText.trim() : '';

        const endDateElement = durationElement.querySelector('time:nth-child(2)');
        const endDate = endDateElement ? endDateElement.innerText.trim() : 'Present';

        const locationElement = item.querySelector('p.experience-item__location');
        const location = locationElement ? locationElement.innerText.trim() : '';

        return {
          title,
          subtitle,
          startDate,
          endDate,
          location
        };
      });
      const last10Experiences = experiences.slice(-10);

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
      const last10Educations = educations.slice(-10);

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
      const last10LicensesAndCertifications = licensesAndCertifications.slice(-10);

      const languages = languagesItems.map(item => {
        const titleElement = item.querySelector('h3.profile-section-card__title');
        const title = titleElement ? titleElement.innerText.trim() : '';

        const issuingAuthorityElement = item.querySelector('h4.profile-section-card__subtitle');
        const issuingAuthority = issuingAuthorityElement ? issuingAuthorityElement.innerText.trim() : ''; '';

        return {
          title,
          issuingAuthority
        };
      });
      const last10Languages = languages.slice(-10);

      return {
        name,
        title,
        location,
        about,
        experiences: last10Experiences,
        educations: last10Educations,
        licensesAndCertifications: last10LicensesAndCertifications,
        languages: last10Languages
      };
    });

    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync('data.json', jsonData);

    await browser.close();

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default runLinkedInScraper;
