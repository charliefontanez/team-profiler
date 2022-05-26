const generateProfiles = (teamData) => {
  var profiles = [];
  var employees = teamData.employees;
  var profileEl;
  console.log("line 6");
  console.log(teamData);


    for (let i = 0; i < (employees).length; i++) {

      if (employees[i].position == 'Manager') {
        profileEl = `
        <div class="profile-card">
          <div class="label">
            <p>${Manager.name}</p>
            <p><i class="fas fa-mug-hot"></i> ${Manager.getRole()}</p>
          </div>
          <div class="employee-info-container">
            <div class="employee-info">
              <p style="border-bottom: solid 1px rgba(55,55,55, 0.4);">ID: ${Manager.id}</P>
              <p style="border-bottom: solid 1px rgba(55,55,55, 0.4);">Email: <a href="mailto:${Manager.email}"></a></p>
              <p>Office number: ${Manager.officeNumber}</p>
            </div>
          </div>
        </div>`;
      }
      else if (employees[i].position == 'Engineer') {
        profileEl = `
        <div class="profile-card">
          <div class="label">
            <p>${Engineer.name}</p>
            <p><i class="fas fa-glasses"></i> ${Engineer.getRole()}</p>
          </div>
          <div class="employee-info-container">
            <div class="employee-info">
              <p style="border-bottom: solid 1px rgba(55,55,55, 0.4);">ID: ${Engineer.id}</P>
              <p style="border-bottom: solid 1px rgba(55,55,55, 0.4);">Email: <a href="mailto:${Engineer.email}"></a></p>
              <p>GitHub: <a href="https://github.com/${Engineer.getGithub()}"</p>
            </div>
          </div>
        </div>`;
      }
      else if (employees[i].position == 'Intern') {
        profileEl = `
        <div class="profile-card">
          <div class="label">
            <p>${Intern.name}</p>
            <p><i class="fas fa-user-graduate"></i> ${Intern.getRole()}</p>
          </div>
          <div class="employee-info-container">
            <div class="employee-info">
              <p style="border-bottom: solid 1px rgba(55,55,55, 0.4);">ID: ${Intern.id}</P>
              <p style="border-bottom: solid 1px rgba(55,55,55, 0.4);">Email: <a href="mailto:${Intern.email}"></a></p>
              <p>School: ${Intern.school}</p>
            </div>
          </div>
        </div>`;
      }
      profiles.push(profileEl);
      console.log("Profile card created");
    }

    return profiles.join('');
};

module.exports = teamData => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300&family=Roboto:wght@300&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./style.css">
    </head>
  
    <body>
      <header>
        <h1>My Team</h1>
      </header>
  
      <div class="container">${generateProfiles(teamData)}
      </div>
    </body>
  </html>`
};