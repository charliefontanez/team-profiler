const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./lib/generatePage.js');



// var propmtUser = () => {

//   return inquirer.prompt([
//     {
//       tyoe: 'input'
//     }
//   ]);
// }

var teamData = ' '

fs.writeFile("./dist/index.html", generatePage(teamData), err => {
  if (err) {
    reject (err);
  }
});