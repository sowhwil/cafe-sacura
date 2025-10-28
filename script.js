document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation (Hamburger Menu) ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.main-nav');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // --- Dynamische Galerie ---
    const galleryContainer = document.getElementById('gallery-grid');
    
    // Die Bilder aus euren Anforderungen (5.2)
    const galleryImages = [
        "https://i.imgur.com/DKu42El.png", // Innenraum 1
        "https://i.imgur.com/xBFmGYt.png", // Innenraum 2
        "https://i.imgur.com/ANl5wMR.png", // Innenraum 3
        "https://i.imgur.com/CFY2wNs.png", // Speise 1
        "https://i.imgur.com/9YeO5a7.png", // Speise 2
        "https://i.imgur.com/jC6VhjE.png", // Speise 3
        "https://i.imgur.com/qzwgjf3.png", // Speise 4
        "https://i.imgur.com/huPqm1M.png", // Getränk 1
        "https://i.imgur.com/xXFTvLy.png"  // Getränk 2
    ];

    if (galleryContainer) {
        galleryImages.forEach(imageUrl => {
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = "Galeriebild Café Sakura";
            galleryContainer.appendChild(imgElement);
        });
    }

    // --- Aktiven Navigationslink hervorheben ---
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        // Sonderfall für Startseite (index.html oder /)
        if (currentPage === '' && link.getAttribute('href') === 'index.html') {
             link.classList.add('active');
        }
    });

});