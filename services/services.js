const url = "http://localhost:3000/productos"

const listP = () => {
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err))
}

const crearP = (imgUrl, categoria, nombre, precio, descripcion, id) => {
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            imgUrl,
            categoria,
            nombre,
            precio,
            descripcion,
            id
        })
    }).then(res => {
        if (res.ok) {
            return res.json()
        }
    })
    throw new Error("No se pudo crear el producto")
}
export const servicios = {
    listP, crearP,
}