import { servicios } from "../services/services.js";

const newCat = (categoria) => {
    const card = document.createElement("section")
    card.className = "aluraGeek__productos-categoria"
    const contenido = `
    <section class="aluraGeek__productos">
    <div class="aluraGeek__productos-encabezado">
    <h2 class="aluraGeek__productos-encabezado-titulo">${categoria}</h2>
    <a class="aluraGeek__productos-encabezado-subtitulo">
    <h3 class="aluraGeek__productos-encabezado-subtitulo-texto">Ver todo</h3>
    <img src="img/flechaDerecha.png" alt="Flecha Derecha" class="aluraGeek__productos-encabezado-subtitulo-icono">
    </a>
    </div>
    <div class="aluraGeek__productos-listaDeProductos" data-producto>
    </div>
    </section>
    `;
    card.innerHTML = contenido
    return card
}
const categorialista = document.querySelector("[data-category]")
const crearCategoria = async () => {
    try {
        const listaCategoria = await servicios.listP()
        let ordenaCategoria = listaCategoria.map(productos => productos.categoria)
        // ordena y quita las categorias duplicadas
        ordenaCategoria = ordenaCategoria.sort().filter((v, i) => ordenaCategoria.indexOf(v) === i);
        ordenaCategoria.forEach(categoria => {
            categorialista.appendChild(
                newCat(
                    categoria
                )
            )
        })
    }
    catch (err) {
        console.log("Hay un error visualizando categorias", err)
    }
}
crearCategoria()

const newProd = (imgUrl, nombre, precio, id) => {
    const card = document.createElement("item")
    card.className = "aluraGeek__productos-listaDeProductos-producto"
    const contenido = `
    <div class="aluraGeek__productos-listaDeProductos-producto-img">Consolas
    <img class="aluraGeek__productos-listaDeProductos-producto-img-img" src="${imgUrl}">
    </div>
    <h3 class="aluraGeek__productos-listaDeProductos-producto-item">${nombre}</h3>
    <p class="aluraGeek__productos-listaDeProductos-producto-precio">${precio}</p>
    <a class="aluraGeek__productos-listaDeProductos-producto-enlace" href="/producto.html?id=${id}">Ver producto</a>
    `
    card.innerHTML = contenido
    return card
}
const productoslista = document.querySelector("[data-producto]")
const categoriaNombre = document.querySelectorAll("aluraGeek__productos-encabezado-titulo")
console.log(categoriaNombre)
const crearProducto = async () => {
    try {
        const listaProduct = await servicios.listP()
        listaProduct.forEach(productos => {

            if (productos.categoria == "Juegos de mesa") {
                console.log(productos.categoria, productos.id)
            }
            // productoslista.appendChild(
            //     newProd(
            //         productos.imgUrl,
            //         productos.nombre,
            //         productos.precio,
            //         productos.id
            //     )
            // )

        })
    }
    catch (err) {
        console.log("Hay un error visualizando productos", err)
    }
}
crearProducto()