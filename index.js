// Packages
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

// prompts
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe what your project does"
    },
    {
        type: "checkbox",
        name: "lisense",
        message: "Select a license applicable to this project",
        choices: ["MIT","APACHE2.0","BSD2","BSD3","none"]
    },
    {
        type: "input",
        name: "installation",
        message: "What are ther steps required to install your project"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use"
    },

    {
        type: "input",
        name: "credits",
        message: "List your contributors"
    },
    {
        type: "input",
        name: "features",
        message: "List any features you would like"
    },
    {
        type: "input",
        name: "how to contribute",
        message: "How can a developer contribute to this project"
    },
    {
        type: "input",
        name: "test",
        message: "Provide walkthrough of test"
    }, 
]