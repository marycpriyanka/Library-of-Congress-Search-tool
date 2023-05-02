const searchForm = document.getElementById("searchForm");
const userSearchInput = document.getElementById("searchInput");
const userFormatInput = document.getElementById("formatInput");

function formSubmitHandler(event) {
    event.preventDefault();

    const query = userSearchInput.value.trim();
    const format = userFormatInput.value.trim();

    if (!query) {
        console.error("Search value is needed");
        return;
    } else {
        document.location.replace(`./search-results.html?q=${query}&format=${format}`);
    }
}

searchForm.addEventListener("submit", formSubmitHandler);



