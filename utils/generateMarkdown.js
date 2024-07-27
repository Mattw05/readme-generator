// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license !== "none") {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
  }
  
  //Creating a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Features
  ${data.features}
  ## Installation
  ${data.installation}
  ## How to Use This Application:
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test} 
  `;
  }
  
  module.exports = generateMarkdown;