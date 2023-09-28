import { servicios } from "../services/services.js";

const newCat = (categoria) => {
    const card = document.createElement("section")
    card.className = "aluraGeek__productos-categoria"
    const contenido = `
    <section class="aluraGeek__productos">
    <div class="aluraGeek__productos-encabezado">
    <h2 class="aluraGeek__productos-encabezado-titulo">${categoria}</h2>
    <a class="aluraGeek__productos-encabezado-subtitulo" href="/productos.html?categoria=${categoria}">
    <h3 class="aluraGeek__productos-encabezado-subtitulo-texto">Ver todo</h3>
    <img src="img/flechaDerecha.png" alt="Flecha Derecha" class="aluraGeek__productos-encabezado-subtitulo-icono">
    </a>
    </div>
    </section>
    `
    card.innerHTML = contenido
    return card
}
const newProd = (imgUrl, nombre, precio, id) => {
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
const cargarProductos = async () => {
    try {
        const productos1 = await servicios.listP();
        const productosPorCategoria = productos1.reduce((acc, producto) => {
            const categoria = producto.categoria;
            acc[categoria] = acc[categoria] || [];
            acc[categoria].push(producto);
            return acc;
        }, {});
        const productosPorCategoriaDiv = document.querySelector("[data-category]");
        for (const categoria in productosPorCategoria) {
            const productos = productosPorCategoria[categoria];
            productosPorCategoriaDiv.appendChild(newCat(categoria));
            const listaProductos = document.createElement("div");
            listaProductos.className = "aluraGeek__productos-listaDeProductos"
            productos.forEach(producto => {
                listaProductos.appendChild(newProd(
                    producto.imgUrl,
                    producto.nombre,
                    producto.precio,
                    producto.id
                ));
            });
            productosPorCategoriaDiv.appendChild(listaProductos);
        }
    } catch (error) {
        console.error('Error al cargar los productos: ', error);
    }
}
cargarProductos()