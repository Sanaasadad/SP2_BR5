// Charger les films depuis le localStorage
let dataMovies = localStorage.getItem("Movies")
  ? JSON.parse(localStorage.getItem("Movies"))
  : [];

let cardContainer = document.getElementById("card-container");

// Afficher uniquement les images des films
function afficherImages() {
  cardContainer.innerHTML = ""; // Réinitialiser l'affichage

  for (let i = 0; i < dataMovies.length; i++) {
    let movie = dataMovies[i];

    let card = document.createElement("div");
    card.classList.add("col-md-3", "mb-4");

    card.innerHTML = `
      <img 
        src="${movie.image}" 
        class="img-fluid" 
        alt="${movie.titre}" 
        style="cursor: pointer;"
        onclick="voirDetails(${i})"
      >
    `;

    cardContainer.appendChild(card);
  }
}

// Fonction pour rediriger vers la page de détails
function voirDetails(index) {
  localStorage.setItem("selectedMovie", JSON.stringify(dataMovies[index]));
  window.location.href = "Details.html"; // Aller à la page des détails
}

// Charger les images au démarrage
afficherImages();