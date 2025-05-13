const bacheca = document.querySelector('.bacheca')


let creaCarta = (array) => {
    let cardString = "";

    array.forEach((element) => {
        const { url, title } = element;
        // console.log(url, title);

        cardString += `<div class="card">
                <img id="puntina" src="./img/pin.svg" alt="">
                <img src=${url} alt="">
                <div id="testo">${title}</div>
            </div>`})

    return cardString
}


axios
    .get("https://lanciweb.github.io/demo/api/pictures/")
    .then((resp) => {

        let data = resp.data;

        let cardString = creaCarta(data)

        bacheca.innerHTML = cardString
    })


