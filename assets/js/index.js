const URL_BACKEND = "https://60b83e68b54b0a0017c03380.mockapi.io/banners"

const promiseOK = (response) => {
    response.json().then((data) => {
        const img = document.querySelector("#banner")
        img.setAttribute("src", data[0].url)
    }).catch((error) => {
        console.error(error)
    })
}


const main = () => {
    
    // Abrir un canal de comunicacion con el servidor
    fetch(URL_BACKEND)
        .then(promiseOK)
        .catch((error) => {
            console.error(error)
        })
    console.log('Linea 11')
}

window.addEventListener("load", main)