const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generatePage.js');
const askEmployeeQuestions = require('./utils/questions.js');

const promptUser = teamData => {
  
  if (!(teamData.employees)) {
    teamData.employees = [];
  }

  return (inquirer.prompt([
    {
      type: 'list',
      name: 'position',
      message: "What position does your team member hold?",
      choices: ['Manager', 'Engineer', 'Intern']
    }
  ])
  .then(data => {
    return askEmployeeQuestions(data);
  })
  .then(addEmployee => {
    if (addEmployee) {
      return promptUser(teamData);
    }
    else {
      return teamData.employees;
    }
  }))
};

promptUser(teamData = {})
  .then(employees => {
      fs.writeFile("./dist/index.html", generatePage(employees), err => {
      if (err) {
        reject (err);
      }
    });
  })
