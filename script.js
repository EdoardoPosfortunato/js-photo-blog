const bacheca = document.querySelector('.bacheca')
const hoverlay = document.querySelector('.hoverlay')


let creaCarta = (array) => {
    let cardString = "";

    array.forEach((element) => {
        // console.dir(element)
        const { url, title, id } = element;
        // console.log(url, title);

        cardString += `<div class="card" data-id="${id}">
                <img class="puntina" src="./img/pin.svg" alt="">
                <img class = "imgPricipale" src=${url} alt="">
                <div id="testo">${title}</div>
            </div>`})

    return cardString
}


//AXIOS

axios
    .get("https://lanciweb.github.io/demo/api/pictures/")
    .then((resp) => {

        let data = resp.data;

        let cardString = creaCarta(data)

        bacheca.innerHTML = cardString

        const cards = document.querySelectorAll(".card")

        /// Rotazione al passaggio del MOUSE

        cards.forEach(card => {

            const puntina = card.querySelector(".puntina")
            card.addEventListener("mouseenter", function () {
                card.classList.add("rotate")
                 puntina.classList.add("d-none")
            })

            card.addEventListener("mouseleave", function () {
                card.classList.remove("rotate")
                 puntina.classList.remove("d-none")
            })

        })



        //al click l'immagine esce in primo piano 

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

        })

    })



