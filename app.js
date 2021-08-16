let searchBox = document.querySelector("#searchTerm")
console.log("This works")

async function search(show) {
    try {
        let results = await axios.get(`https://api.tvmaze.com/search/shows?q=${show}`)
        console.log(results)
    } catch (error) {
        alert("Please Try Again")
        location.reload()
    }
}
searchBox.addEventListener('keydown', async function (evt) {
    if (evt.key == 'Enter') {
        evt.preventDefault()
        if (searchBox.value != "") {
            await search(searchBox.value)
            searchBox.value = ""
        }

    }
})