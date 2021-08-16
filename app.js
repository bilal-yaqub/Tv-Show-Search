let searchBox = document.querySelector("#searchTerm")

async function search(show) {
    try {
        let results = await axios.get(`https://api.tvmaze.com/search/shows?q=${show}`)
        let data = results.data

        console.log(data)
        for (let i = 0; i < 3; i++) {
            console.log(data[i].show.name)
            console.log(data[i].show.image.medium)
            console.log(data[i].show.language)
            console.log(data[i].show.premiered)
            console.log(data[i].show.runtime)
            console.log(data[i].show.summary)
            console.log(data[i].score)
            console.log("")
        }
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