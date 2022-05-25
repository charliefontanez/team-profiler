const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./lib/generatePage.js');



const promptUser = teamData => {

  if (!(teamData.employees)) {
    teamData.employees = [];
  }

  return inquirer.prompt([
    {
      tyoe: 'input',
      name: 'name',
      message: "What's the name of your employee?"
    },
    {
      type: 'list',
      name: 'position',
      message: "What is your team member's position?",
      choices: ['Manager', 'Engineer', 'Intern']
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Do you have another employee you would like to add?',
      default: true
    }
  ])
  .then(data => {
    teamData.employees.push(data);
    if (data.confirmAddEmployee) {
      return promptUser(teamData);
    }
    else {
      return teamData;
    }
  });
};



promptUser(teamData = {})
  .then(teamData => {
    return teamData;
  })
  .then(teamData => {
      fs.writeFile("./dist/index.html", generatePage(teamData), err => {
      if (err) {
        reject (err);
      }
    });
  })

