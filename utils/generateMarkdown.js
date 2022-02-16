// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
      return license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } if (license === 'none') {
      return license = ''
  }
}
renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'GNU GPL v3') {
      return license = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'
  } if (license === 'none') {
      return license = ''
  }
}
renderLicenseBadge();

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
      return license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } if (license === 'none') {
      return license = ''
  }
}
renderLicenseBadge();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents   
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
* [Questions](#questions)
* [License](#license)

## Description  
${data.description}  

## Installation 
${data.install}

## Usage 
${data.usage}

## Contribution
${data.contribution}

## Testing
${data.testing}

## Questions
Any questions then please reach out to me via Github: ${data.github} or email me at ${data.email}.

## License
This project was done with the ${data.license} license.

`;
}

module.exports = generateMarkdown;