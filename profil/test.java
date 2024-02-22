// Récupère les éléments de la page
let welcomePage = document.querySelector(".welcome-page");
let mainPage = document.querySelector(".pageprincipale");

// Fonction pour cacher la page de bienvenue et activer la deuxième page
function hideWelcomePage() {
    setTimeout(() => {
        welcomePage.style.opacity = "0"; // La page de bienvenue devient transparente
        welcomePage.style.pointerEvents = "none"; // Désactiver les événements de la page de bienvenue
        mainPage.style.pointerEvents = "auto"; // Activer les événements de la deuxième page
    }, 1000); // Disparaît après 1 seconde
}

// Attacher un événement au survol de la page de bienvenue
welcomePage.addEventListener("mouseover", hideWelcomePage);

