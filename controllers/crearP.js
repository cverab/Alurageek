import { servicios } from "../services/services.js";

const formulario = document.querySelector(`[data-form]`)

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const imgUrl = document.querySelector(`[data-url]`).value
    const categoria = document.querySelector(`[data-category]`).value
    const nombre = document.querySelector(`[data-name]`).value
    const precio = document.querySelector(`[data-price]`).value
    const descripcion = document.querySelector(`[data-description]`).value
    const id = Math.floor(Math.random() * 999999)

    servicios.crearP(imgUrl, categoria, nombre, precio, descripcion, id)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
})