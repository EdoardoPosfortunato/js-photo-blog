const bacheca = document.querySelector('.bacheca')

const hoverlay = document.querySelector('.hoverlay')


let creaCarta = (array) => {
    let cardString = "";

    array.forEach((element) => {
        // console.dir(element)
        const { url, title, id } = element;
        // console.log(url, title);

        cardString += `<div class="card" data-id="${id}">
                <img id="puntina" src="./img/pin.svg" alt="">
                <img class = "imgPricipale" src=${url} alt="">
                <div id="testo">${title}</div>
            </div>`})

    return cardString
}

// // Bottene Hoverlay
// overlayBtn.addEventListener("click", function () {
//     hoverlay.classList.remove("d-flex")
// })


//AXIOS

axios
    .get("https://lanciweb.github.io/demo/api/pictures/")
    .then((resp) => {

        let data = resp.data;

        let cardString = creaCarta(data)

        bacheca.innerHTML = cardString

        const cards = document.querySelectorAll(".card")

        cards.forEach(card => {

            card.addEventListener("click", function () {

                hoverlay.classList.add("d-flex")
                const urlImg = card.querySelector(".imgPricipale").src

                // console.log(urlImg)

                hoverlay.innerHTML = `<button id="overlayBtn">Ritorna</button>
                                        <img src=${urlImg} alt="" id="overlayImg">`

                // Bottene Hoverlay
                const overlayBtn = document.getElementById('overlayBtn')

                overlayBtn.addEventListener("click", function () {
                    hoverlay.classList.remove("d-flex")
                    hoverlay.innerHTML = ``
                })


            })

        });
    })


