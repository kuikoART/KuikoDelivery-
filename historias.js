document.addEventListener('DOMContentLoaded', function() {
    // Actualizar año en el footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    });
    
    // Buscador de historias
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.querySelector('.search-box');
    
    function searchHistorias() {
        const term = searchInput.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.historia-card');
        
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(term) ? 'flex' : 'none';
            
            if (text.includes(term)) {
                card.style.animation = 'fadeInDown 0.5s ease';
            }
        });
    }
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        searchHistorias();
    });
    
    searchInput.addEventListener('input', searchHistorias);
    
    // Efectos hover para tarjetas
    const historiaCards = document.querySelectorAll('.historia-card');
    
    historiaCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-0.5rem)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)';
        });
    });
    
    // Lazy loading para imágenes
    if ('loading' in HTMLImageElement.prototype) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    }
});