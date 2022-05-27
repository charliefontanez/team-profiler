const generateProfiles = (employees) => {
  var profiles = [];
  var profileEl;


    for (let i = 0; i < employees.length; i++) {
      let employee = employees[i];
      if (employee.getRole() == 'Manager') {
        profileEl = `
        <div class="profile-card">
          <div class="label">
            <p>${employee.name}</p>
            <p><i class="fas fa-mug-hot"></i> ${employee.getRole()}</p>
          </div>
          <div class="employee-info-container">
            <div class="employee-info">
              <p style="border-bottom: solid 1px rgba(55,55,55, 0.4);">ID: ${employee.id}</P>
              <p style="border-bottom: solid 1px rgba(55,55,55, 0.4);">Email: <a href="mailto:${employee.email}"></a></p>
              <p>Office number: ${employee.officeNumber}</p>
            </div>
          </div>
        </div>`;
      }
      else if (employee.getRole() == 'Engineer') {
        profileEl = `
        <div class="profile-card">
          <div class="label">
            <p>${employee.name}</p>
            <p><i class="fas fa-glasses"></i> ${employee.getRole()}</p>
          </div>
          <div class="employee-info-container">
            <div class="employee-info">
              <p style="border-bottom: solid 1px rgba(55,55,55, 0.4);">ID: ${employee.id}</P>
              <p style="border-bottom: solid 1px rgba(55,55,55, 0.4);">Email: <a href="mailto:${employee.email}"></a></p>
              <p>GitHub: <a href="https://github.com/${employee.getGithub()}"</p>
            </div>
          </div>
        </div>`;
      }
      else if (employee.getRole() == 'Intern') {
        profileEl = `
        <div class="profile-card">
          <div class="label">
            <p>${employee.name}</p>
            <p><i class="fas fa-user-graduate"></i> ${employee.getRole()}</p>
          </div>
          <div class="employee-info-container">
            <div class="employee-info">
              <p style="border-bottom: solid 1px rgba(55,55,55, 0.4);">ID: ${employee.id}</P>
              <p style="border-bottom: solid 1px rgba(55,55,55, 0.4);">Email: <a href="mailto:${employee.email}"></a></p>
              <p>School: ${employee.school}</p>
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