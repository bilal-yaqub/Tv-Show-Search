let searchBox = document.querySelector("#searchTerm")

async function search(show) {
    try {
        let results = await axios.get(`https://api.tvmaze.com/search/shows?q=${show}`)
        let data = results.data

        for (let i = 0; i < 3; i++) {
            try {
                let container = document.createElement('div')
                let name = document.createElement('p')
                name.append(data[i].show.name)
                container.append(name)

                let image = document.createElement('img')
                image.src = data[i].show.image.medium
                container.append(image)

                let language = document.createElement('p')
                language.append(data[i].show.language)
                container.append(language)

                let premiered = document.createElement('p')
                premiered.append(data[i].show.premiered)
                container.append(premiered)

                let runtime = document.createElement('p')
                runtime.append(data[i].show.runtime)
                container.append(runtime)

                let summaryContainer = document.createElement('p')
                let summary = (data[i].show.summary).replace(/<[^>]*>?/gm, '')
                summaryContainer.append(summary)
                container.append(summaryContainer)

                let score = document.createElement('p')
                score.append(data[i].score)
                container.append(score)

                document.body.append(container)

            } catch (error) {
                console.log(error)
            }
        }


    } catch (error) {
        console.log(error)
        alert("Please Try Again")
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