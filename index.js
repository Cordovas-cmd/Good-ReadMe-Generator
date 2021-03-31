// TODO: Include packages needed for this application
var inquirer= require('inquirer');
var fs= require("fs");
const util= require("util");


// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeFileAsync=util.promisify(fs.writeFile);
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
// starting our code here with the required instruction 




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