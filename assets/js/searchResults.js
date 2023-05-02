const searchForm = document.getElementById("searchForm");
const userSearchInput = document.getElementById("searchInput");
const userFormatInput = document.getElementById("formatInput");
const backButton = document.getElementById("backButton");

function getParams() {
    const queryParameters = document.location.search.split("&");
    const query = queryParameters[0].split("=")[1];
    const format = queryParameters[1].split("=")[1];

    if (query) {
        callApi(query, format) ;
    }
}

function callApi(query, format) {
    let queryUrl = `https://www.loc.gov/search/?q=${query}`;
    if (!format.startsWith("Select")) {
        queryUrl = `https://www.loc.gov/search/?q=${query}&fo=${format}`;
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

getParams();

// Attach the event handlers
searchForm.addEventListener("submit", formSubmitHandler);
backButton.addEventListener("click", goBack);

