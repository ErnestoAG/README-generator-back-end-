// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "None") {
    if (license == 'MIT') {
      license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      return license;
    } else if (license == 'Apache') {
      license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license == 'Mozilla') {
      license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (license == 'IBM') {
      license = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    } else {
      license = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    }
    return license;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "None") {
    if (license == 'MIT') {
      license = "https://mit-license.org";
      return license;
    } else if (license == 'Apache') {
      license = "https://www.apache.org/licenses/LICENSE-2.0";
    } else if (license == 'Mozilla') {
      license = "https://www.mozilla.org/en-US/MPL/2.0/";
    } else if (license == 'IBM') {
      license = "https://www.ibm.com/docs/en/linux-on-systems?topic=examples-common-public-license-v10";
    } else {
      license = "https://www.eclipse.org/legal/epl-2.0/";
    }
    return license;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None'){
    return `This application is under the legal coverage of the [${license}](${renderLicenseLink(license)}) license.`;
  } else {
    return 'N/A';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}\n\n
## Table of contents\n * [Description](##Description)\n * [Installation](##Installation)\n * [Usage](##Usage)\n * [Testing](##Testing)\n * [License](##License)\n * [Contributions](##Contributions)\n * [Questions](##Questions)\n\n
## Description\n ${data.description}\n\n
## Installation\n ${data.installation}\n\n
## Usage\n ${data.usage}\n\n
## Testing\n ${data.testing}\n\n
## License\n ${renderLicenseSection(data.license)}\n\n
## Contributions\n ${data.contributions}\n\n
## Questions\n My GitHub account username is [${data.username}](https://github.com/${data.username}), and you can ask questions related to this application at ${data.email}.
`;
}

module.exports = {generateMarkdown};
