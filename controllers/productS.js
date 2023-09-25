import { servicios } from "../services/services.js";

const detProd = (imgUrl, nombre, precio, descripcion) => {
    const card = document.createElement("div")
    card.className = "aluraGeek__producto-detallado-box"
    const contenido = `
    <div class="aluraGeek__producto-detallado-img">
    <img class="aluraGeek__producto-detallado-img-img" src="${imgUrl}">
    </div>
    <div class="aluraGeek__producto-detallado-texto">
    <h3 class="aluraGeek__producto-detallado-textoEncabezado">${nombre}</h3>
    <h4 class="aluraGeek__producto-detallado-textoPrecio">${precio}</h4>
    <p class="aluraGeek__producto-detallado-textoDescripcion">${descripcion}</p>
    </div>
    `
    card.innerHTML = contenido
    return card
}

const simProd = (imgUrl, nombre, precio, id) => {
    const card = document.createElement("item")
    card.className = "aluraGeek__productos-listaDeProductos-producto"
    const contenido = `
    <div class="aluraGeek__productos-listaDeProductos-producto-img">
    <img class="aluraGeek__productos-listaDeProductos-producto-img-img" src="${imgUrl}">
    </div>
    <h3 class="aluraGeek__productos-listaDeProductos-producto-item">${nombre}</h3>
    <p class="aluraGeek__productos-listaDeProductos-producto-precio">${precio}</p>
    <a class="aluraGeek__productos-listaDeProductos-producto-enlace" href="/producto.html?id=${id}">Ver producto</a>
    `
    card.innerHTML = contenido
    return card
}

const urlId = window.location.search;
const productoId = urlId.replace("?id=", "")
const productoDetalle = document.querySelector("[data-detalle]")
const detalleProducto = async () => {
    try {
        const listaProduct = await servicios.listP()
        listaProduct.filter(productos => {
            if (productoId == productos.id) {
                productoDetalle.appendChild(
                    detProd(
                        productos.imgUrl,
                        productos.nombre,
                        productos.precio,
                        productos.descripcion,
                    )
                )
            }
        })
    }
    catch (err) {
        console.log("Hay un error visualizando el producto", err)
    }
}
detalleProducto()

const productosSimilares = document.querySelector("[data-similares]")
const similarProducto = async () => {
    try {
        const listaProduct = await servicios.listP()
        listaProduct.forEach(productos => {
            productosSimilares.appendChild(
                simProd(
                    productos.imgUrl,
                    productos.nombre,
                    productos.precio,
                    productos.id
                )
            )
        })
    }
    catch (err) {
        console.log("Hay un error visualizando productos similares", err)
    }
}
similarProducto()