
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Funcionalidad del menú hamburguesa
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Mostrar y ocultar el menú al hacer clic en el botón del menú hamburguesa
if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

// Cierra el menú si se hace clic en cualquier parte del documento
document.addEventListener('click', function(event) {
    if (!event.target.closest('nav')) {
        navList.classList.remove('active');
    }
});

// Mostrar u ocultar el menú desplegable al hacer clic en "Páginas"
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdownToggle) {
    dropdownToggle.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownMenu.classList.toggle('active');
    });
}

// Cierra el menú desplegable si se hace clic fuera de él
document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown-toggle') && !event.target.closest('.dropdown-menu')) {
        dropdownMenu.classList.remove('active');
    }
});
