const searchForm = document.getElementById("searchForm");
const userSearchInput = document.getElementById("searchInput");
const userFormatInput = document.getElementById("formatInput");
const backButton = document.getElementById("backButton");
const resultSection = document.getElementById("result");

function getParams() {
    const queryParameters = document.location.search.split("&");
    const query = queryParameters[0].split("=")[1];
    const format = queryParameters[1].split("=")[1];

    if (query) {
        callApi(query, format) ;
    }
}

// Event handler for Search button
function formSubmitHandler(event) {
    event.preventDefault();

    const query = userSearchInput.value.trim();
    const format = userFormatInput.value.trim();

    if (!query) {
        console.error("Search value is needed");
        return;
    } else {
        callApi(query, format) ;
    }
} 

// Event handler for Go Back button
function goBack() {
    document.location.replace("./index.html");
}

function callApi(query, format) {
    let queryUrl = `https://www.loc.gov/search/?q=${query}&fo=json`;
    if (!format.startsWith("Select")) {
        queryUrl = `https://www.loc.gov/${format}/?q=${query}&fo=json`;
    }

    fetch(queryUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                console.error(response.statusText);
            }
        })
        .then(function (data) {
            console.log(data);
            displayResults(data.results);
        })
        .catch(function (error) {
            console.error(error);
        });
}

function displayResults(results) {
    for (let i = 0; i < results.length; i++) {
        // Gets the required data
        let title = results[i].title;
        let url = results[i].url;
        let date = results[i].date;
        let description = results[i].description;
        let subjects = results[i].subject;
        // console.log(subjects);

        let card = document.createElement("div");
        card.setAttribute("class", "card mt-2 custom-card");

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");
        card.appendChild(cardBody);

        let cardTitle = document.createElement("h4");
        cardTitle.setAttribute("class", "card-title");
        cardTitle.textContent = title;
        cardBody.appendChild(cardTitle);

        let cardText = document.createElement("p");
        cardText.setAttribute("class", "card-text");
        cardText.innerHTML   = `<b>Date:</b> ${date}<br><b>Description:</b> ${description}`;
        cardBody.appendChild(cardText);

        let cardLink = document.createElement("a");
        cardLink.setAttribute("class", "card-link");
        cardLink.setAttribute("target", "_blank");
        cardLink.textContent = "Read more";
        cardLink.href = url;
        cardBody.appendChild(cardLink);

        resultSection.appendChild(card);
    }
}

// Attach the event handlers
searchForm.addEventListener("submit", formSubmitHandler);
backButton.addEventListener("click", goBack);

getParams();

// \nSubjects: ${subjects.foreach(subject => subject)}

