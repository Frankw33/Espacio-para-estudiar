
// Variables globales
let currentUser = null;
let searchResults = [];

// Datos de ejemplo para espacios
const spacesData = [
    {
        id: 1,
        name: "Café Central Study",
        location: "Centro, Madrid",
        price: "5€/hora",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["WiFi", "Café", "Silencioso"],
        type: "Café"
    },
    {
        id: 2,
        name: "Hub Universitario",
        location: "Moncloa, Madrid",
        price: "3€/hora",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["WiFi", "Enchufes", "Grupos"],
        type: "Coworking"
    },
    {
        id: 3,
        name: "Biblioteca Moderna",
        location: "Salamanca, Madrid",
        price: "2€/hora",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["Silencio", "Libros", "Escritorio"],
        type: "Biblioteca"
    },
    {
        id: 4,
        name: "Espacio Creativo Loft",
        location: "Malasaña, Madrid",
        price: "8€/hora",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        amenities: ["Natural", "Inspirador", "Flexible"],
        type: "Loft"
    }
];

// Función para manejar la búsqueda
function handleSearch() {
    const locationInput = document.getElementById('location-input');
    const dateInput = document.getElementById('date-input');
    
    const location = locationInput.value.trim();
    const date = dateInput.value.trim();
    
    if (!location) {
        alert('Por favor, ingresa una ubicación');
        return;
    }
    
    console.log('Buscando espacios en:', location, 'para:', date);
    
    // Simulamos una búsqueda
    searchResults = spacesData.filter(space => 
        space.location.toLowerCase().includes(location.toLowerCase())
    );
    
    if (searchResults.length > 0) {
        showSearchResults();
    } else {
        alert('No se encontraron espacios en esa ubicación. Intenta con "Madrid"');
    }
}

// Función para mostrar resultados de búsqueda
function showSearchResults() {
    console.log('Resultados encontrados:', searchResults.length);
    alert(`¡Genial! Encontramos ${searchResults.length} espacios disponibles. (Esta funcionalidad se desarrollará más adelante)`);
}

// Función para manejar reservas
function handleReservation(spaceId) {
    const space = spacesData.find(s => s.id === spaceId);
    if (space) {
        console.log('Reservando espacio:', space.name);
        alert(`¡Perfecto! Te redirigiremos para reservar "${space.name}". (Funcionalidad en desarrollo)`);
    }
}

// Event listeners cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', function() {
    console.log('StudySpace cargado correctamente');
    
    // Agregar event listeners a los botones de reserva
    const reserveButtons = document.querySelectorAll('.reserve-btn');
    reserveButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            handleReservation(index + 1);
        });
    });
    
    // Event listener para Enter en los campos de búsqueda
    const searchInputs = document.querySelectorAll('#location-input, #date-input');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    });
    
    // Smooth scroll para navegación interna (si se agrega más adelante)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animaciones cuando los elementos entran en vista
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animaciones
    const animatedElements = document.querySelectorAll('.step-card, .space-card, .testimonial-card, .stat-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Función para manejar clicks en botones principales
function handleCTAClick(action) {
    console.log('CTA clicked:', action);
    switch(action) {
        case 'start':
            alert('¡Bienvenido a StudySpace! Te redirigiremos al registro. (Funcionalidad en desarrollo)');
            break;
        case 'demo':
            alert('¡Te mostraremos una demo de la plataforma! (Funcionalidad en desarrollo)');
            break;
        case 'all-spaces':
            alert('Mostrando todos los espacios disponibles... (Funcionalidad en desarrollo)');
            break;
        default:
            console.log('Acción no reconocida:', action);
    }
}

// Agregar event listeners a los botones CTA después de que cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    // Botones CTA principales
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            if (buttonText.includes('Empezar')) {
                handleCTAClick('start');
            } else if (buttonText.includes('demo')) {
                handleCTAClick('demo');
            } else if (buttonText.includes('todos los espacios')) {
                handleCTAClick('all-spaces');
            }
        });
    });
});

// Funciones de utilidad
function formatPrice(price) {
    return price.replace('€', '€ ');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type = 'info') {
    // Crear notificación simple
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#4299e1'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: opacity 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Exportar funciones para uso global
window.handleSearch = handleSearch;
window.handleReservation = handleReservation;
window.handleCTAClick = handleCTAClick;
