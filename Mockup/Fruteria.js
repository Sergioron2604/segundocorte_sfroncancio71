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

// Funcionalidad del menú hamburguesa
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Mostrar y ocultar el menú al hacer clic en el botón del menú hamburguesa
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active'); // Alterna la clase activa para mostrar/ocultar el menú
});

// Cierra el menú si se hace clic en cualquier parte del documento
document.addEventListener('click', function(event) {
    if (!event.target.closest('nav')) {
        navList.classList.remove('active'); // Cierra el menú si se hace clic fuera de él
    }
});

// Mostrar u ocultar el menú desplegable al hacer clic en "Páginas"
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdownToggle) {
    dropdownToggle.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar el comportamiento por defecto del enlace
        dropdownMenu.classList.toggle('active'); // Alterna la visibilidad del menú desplegable
    });
}

// Cierra el menú desplegable si se hace clic fuera de él
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown-toggle') && !event.target.closest('.dropdown-menu')) {
        dropdownMenu.classList.remove('active'); // Cierra el menú desplegable si se hace clic fuera de él
    }
});


