const bacheca = document.querySelector('.bacheca')


let creaCarta = (array) => {
    let cardString = "";

        array.forEach((element) => {
            const { url, title } = element;
            console.log(url, title);

            cardString += `<div class="card">
                <img src=${url} alt="">
                <div id="testo">${title}</div>
            </div>`})
        }


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
        bacheca.innerHTML = cardString


    })


