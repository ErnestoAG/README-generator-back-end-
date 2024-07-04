// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "None") {
    return license;
  } else {
    return 'N/A';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n
## Table of contents\n *Description\n *Installation\n *Usage\n *License\n *Contributors\n *Questions\n\n
## ${data.description}\n\n
## ${data.installation}\n\n
## ${data.usage}\n\n
## ${data.license}\n\n
## ${data.contributors}\n\n
## ${data.questions}
`;
}

module.exports = generateMarkdown;
