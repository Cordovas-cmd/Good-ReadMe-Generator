// TODO: Include packages needed for this application
var inquirer= require('inquirer');
var fs= require("fs");
const util= require("util");


// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeFileAsync=util.promisify(fs.writeFile);

//Function to prompt user for questions
function promptUser(){
    return inquirer.prompt([
        {
            type:"input",
            message:"What's is the title of your project?",
            name:"title"
        },
        {
             type:"input",
            message:"What is the project description? ",
            name:"description"
         },
        {
             type:"input",
             message:"Please provide installation instructions: ",
            name:"instal"
        },
        {
            type:"input",
             message:"How will this be used? ",
            name:"usage"
        },
        {
            type:"list",
            message:"Please select one of these licenses: ",
            name:"badge",
            choices:[
                "Apache",
                "IBM",
                "MIT",
                "Perl"
            ]
        },
        {
            type:"input",
            message:"Please provide a description of the license to use:",
            name:"license"
        },
        {
            type:"input",
            message:"List any contributions on this project if applicable. ",
            name:"contributions"
        },
        {
            type:"input",
            message:"Please provide test instructions or notes: ",
            name:"test"
        },
        {
            type:"input",
            message:"Provide your e-mail address: ",
            name:"Email"
        },
        {
            type:"input",
            message:"What is your Github User name?",
            name:"github"
        },
      ]);
    } 

    //Plugging the answers into the MD file.

    function generateMD(answers){
        var profile=("https://github.com/"+answers.github)
    return `
    # ${answers.title}
    ${answers.badge ==="Apache" ? "Apache"+""+'<br>'+""+"[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : answers.badge ==="MIT" ? "MIT"+""+'<br>'+""+"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : answers.badge==="IBM" ? "IBM"+""+'<br>'+""+"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : "Perl"+""+'<br>'+""+"[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"}
    ## Description 
         ${answers.description}
    ## Table of contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributors](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    ## Installation
            ${answers.instal}
    ## Usage 
            ${answers.usage}
    ## License
            ${answers.badge}
            ${answers.license}
    ## Contributions
            ${answers.contributions}
    ## Tests
            ${answers.test}
    ## Questions
    For questions regarding this application please contact me at:
        - E-mail ${answers.Email}
        - Github:
        <${profile}>
        `; 
    }
// TODO: Create a function to initialize app
async function init() {
    console.log("Welcome to my Good-README generator!");
    try{
        const answers=await promptUser();
        const md=generateMD(answers);
        await writeFileAsync("README.md",md);
        console.log("Success README.md complete!!");
    } catch(err){
        console.log(err);
    }
}
// function init() {}

// Function call to initialize app
init();
// starting our code here with the required instruction 




