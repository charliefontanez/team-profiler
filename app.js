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
      name: 'id',
      message: "What is your employee's id number",
      validate: idInput => {
        console.log(idInput.length);
        for (i = 0; i < idInput.length; i++) {
          console.log(idInput);
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

