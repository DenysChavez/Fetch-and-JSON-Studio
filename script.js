// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            const container = document.getElementById("container");
            container.innerHTML = `
                <h3>Astronaut Count: ${json.length}</h3>`;
            json.sort((a, b) => b.hoursInSpace - a.hoursInSpace);
            for (let i = 0; i < json.length; i++) {
                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li ${json[i].active ? "style='color: green'" : "style='color: red'"}>Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${json[i].picture}>
                    </div>
                    `;
            }

            });
        });
    });