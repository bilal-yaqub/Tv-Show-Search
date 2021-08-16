let searchBox = document.querySelector("#searchTerm")
let searchForm = document.querySelector('#showSearch')
let heading = document.querySelector("#heading")

async function search(show) {
    try {
        let results = await axios.get(`https://api.tvmaze.com/search/shows?q=${show}`)
        let data = results.data

        for (let i = 0; i < 3; i++) {
            try {
                let container = document.createElement('div')
                container.classList.add("shows")

                let facts = document.createElement('ul')
                facts.classList.add("facts")

                let name = document.createElement('p')
                name.classList.add("showTitle")
                name.append(data[i].show.name)
                container.append(name)

                let image = document.createElement('img')
                image.classList.add("showPicture")
                image.src = data[i].show.image.medium
                container.append(image)

                let language = document.createElement('li')
                language.append(data[i].show.language)
                facts.append(language)

                let premiered = document.createElement('li')
                premiered.append(data[i].show.premiered)
                facts.append(premiered)

                let runtime = document.createElement('li')
                runtime.append(data[i].show.runtime)
                facts.append(runtime)

                let summaryContainer = document.createElement('li')
                let summary = (data[i].show.summary).replace(/<[^>]*>?/gm, '')
                summaryContainer.append(summary)
                facts.append(summaryContainer)

                let score = document.createElement('li')
                score.append(data[i].score)
                facts.append(score)

                container.append(facts)
                document.body.append(container)

            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        alert("Please Try Again")
    }

    searchForm.style.top = "10px"
    heading.remove()
}
searchBox.addEventListener('keydown', async function (evt) {
    if (evt.key == 'Enter') {
        evt.preventDefault()
        console.log(document.querySelectorAll(".shows"))
        if (document.querySelectorAll(".shows").length != 0) document.querySelectorAll('.shows').forEach(e => e.remove());
        if (searchBox.value != "") {
            await search(searchBox.value)
            searchBox.value = ""
        }

    }
})