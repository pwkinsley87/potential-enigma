// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  `(https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle, data.about}
  ## License Badges
  ${renderLicenseBadge.data}

  ## Table Of Contents
  * [License](#license)
  * [Description](#about)
  * [Installation Instructions](#instalInstructions)
  * [Contributions](#contributions)
  * [Testing](#test)
  * [Inquiries](#inquiries)
  

  ## License
  ${renderLicense.data}

  ## Description
  ${renderAbout.data}

`;
}

module.exports = generateMarkdown;
