// script.js

function filterProducts(category) {
    // Obtener todos los elementos de las tarjetas de productos
    const products = document.querySelectorAll('.product-card');

    // Recorrer cada tarjeta de producto
    products.forEach(product => {
        // Obtener la categoría de la tarjeta de producto
        const productCategory = product.getAttribute('data-category');

        // Mostrar u ocultar la tarjeta de producto según la categoría seleccionada
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block'; // Mostrar producto
        } else {
            product.style.display = 'none'; // Ocultar producto
        }
    });
}
