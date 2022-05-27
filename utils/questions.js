const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');
const Manager = require('../lib/Manager.js');

const inquirer = require('inquirer');

module.exports = function (data) {  
  if (data.position == 'Manager') {
    return inquirer.prompt([
      {
        tyoe: 'input',
        name: 'name',
        message: "What is the name of your employee?"
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
          console.log(idInput);
          for (i = 0; i < idInput.length; i++) {
            if (idInput[i] < '0' || idInput[i] > '9' || idInput == '\n') {
              console.log("please enter a valid number");
              return false;
            }
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is your employee's office number?"
      },
      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Do you have another employee you would like to add?',
        default: true
      }
    ])
    .then(answers => {
      teamData.employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
      return answers.confirmAddEmployee;
    })
  }
  else if (data.position = 'Engineer') {
    return inquirer.prompt([
      {
        tyoe: 'input',
        name: 'name',
        message: "What is the name of your employee?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your employee's email?"
      },
      {
        type: 'input',
        name: 'github',
        message: "What is your employee's Github username?"
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
    ]).then(answers => {
      teamData.employees.push(new Engineer(answers.name, answers.id, answers.email, "https://github.com/" + answers.github));
      return answers.confirmAddEmployee;
    })
  }
  else if (data.position = 'Intern') {
    return inquirer.prompt([
      {
        tyoe: 'input',
        name: 'name',
        message: "What is the name of your employee?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your employee's email?"
      },
      {
        type: 'input',
        name: 'school',
        message: "What is your employee's school?"
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
    ]).then(answers => {
      teamData.employees.push(new Intern(answers.name, answers.id, answers.email, answers.school));
      return answers.confirmAddEmployee;
    })
  }
}