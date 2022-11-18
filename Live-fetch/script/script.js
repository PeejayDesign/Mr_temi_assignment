// main.js...

// 1. GET request using fetch()
fetch("https://mocki.io/v1/70f835fa-38cd-4d85-80b5-018c9c6efa02")
  // Converting received data to JSON
  .then((response) => response.json())
  .then((json) => {
    
  // 2. Create a variable to store HTML table headers
    let li = `<tr><th>id</th><th>Staff_name</th><th>Staff_lastname</th><th>Staff_age</th><th>Staff_role</th><th>Staff_skills</th></tr>`;

    // 3. Loop through each data and add a table row
    json.forEach((user) => {
      li += `<tr>
        <td>${user.id} </td>
        <td>${user.Staff_name}</td>
        <td>${user.Staff_lastname}</td>
        <td>${user.Staff_age}</td>
        <td>${user.Staff_role}</td>
        <td>${user.Staff_skills}</td>
      </tr>`;
    });

    // 4. DOM Display result
    document.getElementById("users").innerHTML = li;
  });
