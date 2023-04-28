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
        // if (format) {
            document.location.replace(`./search-results.html?q=${query}&format=${format}`);
        // } else {
        //     document.location.replace(`./search-results.html?q=${query}&format=`);
        // }       
    }
}

searchForm.addEventListener("submit", formSubmitHandler);

// queryUrl = `https://www.loc.gov/search/?q=${query}&fo=${format}`;
// queryUrl = `https://www.loc.gov/search/?q=${query}`;

