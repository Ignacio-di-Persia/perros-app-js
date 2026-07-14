const estado = {raza: '', fotos:["https://images.dog.ceo/breeds/collie/n02106030_15771.jpg", "https://images.dog.ceo/breeds/groenendael/n02105056_2556.jpg", "https://images.dog.ceo/breeds/vizsla/n02100583_12240.jpg"]}

const render = () => {
        estado.fotos.forEach(foto => { // Recorremos el array de fotos
            const imagen = document.createElement("img"); // Creamos un elemento imagen
            imagen.src = foto; // Le asignamos a la fuente de la imagen la url contenida en el vector
            document.getElementById("contenedor-resultados").appendChild(imagen); // Tomamos el elemento con ID contenedor-resultados (nuestro div) y le agregamos la imagen dentro
        });
};
