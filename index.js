const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
let team = [];
const generateHtml = require("./src/generate-html");



const promptManager = () => {
    return inquirer.prompt([
       {
           type: "input",
           name: "name",
           message: "What is your name?"
       } ,
       {
        type: "input",
        name: "id",
        message: "What is your Id?"
    } ,
    {
        type: "input",
        name: "email",
        message: "What is your Email?"
    },
    {
        type: "input",
        name: "officeNum",
        message: "What is your office number?"
    },


    ]).then(answers =>{
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum) 
        team.push(manager);
        promptMenu();

    })

};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "Please choose one of the following options",
            choices: ["Add an Employee", "Add an Engineer", "Add an Intern", "I'm done building my team"]

        }
    ]).then(userChoice => {
        switch(userChoice.menu){
            case "Add an Employee":
                promptEmployee();
                break;
            case "Add an Engineer":
                 promptEngineer();
                break;
            case "Add an Intern":
                promptIntern();
                break;
            default:
                buildTeam(team);
        }
    });

};

const promptEmployee = () => {
    return inquirer.prompt([
       {
           type: "input",
           name: "name",
           message: "What is your name?"
       } ,
       {
        type: "input",
        name: "id",
        message: "What is your Id?"
    } ,
    {
        type: "input",
        name: "email",
        message: "What is your Email?"
    },


    ]).then(answers =>{
        //console.log(answers);
        const employee = new Employee(answers.name, answers.id, answers.email)
        team.push(employee);
        promptMenu();

    })

};

const promptEngineer = () => {
    return inquirer.prompt([
       {
           type: "input",
           name: "name",
           message: "What is your name?"
       } ,
       {
        type: "input",
        name: "id",
        message: "What is your Id?"
    } ,
    {
        type: "input",
        name: "email",
        message: "What is your Email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },


    ]).then(answers =>{
        //console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        console.log(engineer)
        console.log(team)
        team.push(engineer);
        promptMenu();

    })

};

const promptIntern = () => {
    return inquirer.prompt([
       {
           type: "input",
           name: "name",
           message: "What is your name?"
       } ,
       {
        type: "input",
        name: "id",
        message: "What is your Id?"
    } ,
    {
        type: "input",
        name: "email",
        message: "What is your Email?"
    },
    {
        type: "input",
        name: "school",
        message: "What school do you attend?"
    },


    ]).then(answers =>{
        //console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        team.push(intern);
        promptMenu();

    })

};


    const buildTeam = (team) => {
        
        // if (!fs.existsSync(OUTPUT_DIR)) {
        //     fs.mkdirSync(OUTPUT_DIR)
        // }
        // fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
        fs.writeFile("team-profile.html", generateHtml(team), function() {console.log(team)});
    }
    
    promptManager();
    






// 4. Create an array to store all of your employees

// 5. Create function to initialize the app, divide it up based on employee roles

//     - All teams need at least one manager -- create a nested function to generate a manager with inquirer prompts
//     - Create a new Manager object using the Manager class and the data from the inquirer prompts
//     -Push that object to the array of employees

//     - Do the same for Intern and Engineers

//     - Use a prompt to ask if you'd like to create another employee or finish generating your team -- use conditionals for logic

//     - Create a function that stops the inquirer prompts and generates the html page
//         -Use fs to write file to dist folder

// 6. Create a helper function in your src folder to generate HTML file (similar to generateMarkdown in your README generator)
//     - Generate employee cards for each type of employee, pass in the data from inquirer prompts
//     - Create an array to store the html, and then push html for each employee into the array and return as a string at the end
//     -Make sure you're exporting this function and importing it to your index file

// Tests
//     -A suite of tests for each class in your app

