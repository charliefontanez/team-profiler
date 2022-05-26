const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generatePage.js');



const promptUser = teamData => {

  if (!(teamData.employees)) {
    teamData.employees = [];
  }

  return inquirer.prompt([
    {
      type: 'list',
      name: 'position',
      message: "What position does your team member hold?",
      choices: ['Manager', 'Engineer', 'Intern']
    },
    {
      tyoe: 'input',
      name: 'name',
      message: "What's the name of your employee?"
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your employee's email?"
    },
    {
      type: 'input',
      name: 'id',
      message: "What is your employee's id number",
      validate: idInput => {

        for (i = 0; i < idInput.length; i++) {

          if (idInput[i] < '0' || idInput[i] > '9') {
            console.log("please enter a valid number");
            return false;
          }
        }

        return true;
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Do you have another employee you would like to add?',
      default: true
    }
  ])
  .then(data => {
    teamData.employeeList.push(data);
    if (data.confirmAddEmployee) {
      return promptUser(teamData);
    }
    else {
      return teamData;
    }
  });
};


const promptQuestionsForEmployees = teamData => {
  var { employees } = teamData.employeeList;
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].position = 'Manager') {

    }


  }
}



promptUser(teamData = {})
  .then(promptQuestionsForEmployees(teamData))
  .then(teamData => {
      fs.writeFile("./dist/index.html", generatePage(teamData), err => {
      if (err) {
        reject (err);
      }
    });
  })

