const bacheca = document.querySelector('.bacheca')
console.log(bacheca)


    axios
    .get("https://lanciweb.github.io/demo/api/pictures/")
    .then((resp) => {

        let data = resp.data;
        
        let cardString = "";

        data.forEach((element) => {
            const { url, title } = element;
            console.log(url, title);

            cardString += `<div class="card">
                <img src=${url} alt="">
                <div id="testo">${title}</div>
            </div>`
        }

        )
        console.log(cardString)
        bacheca.innerHTML = cardString


    })
// const { url, title} = resp.data[0];

