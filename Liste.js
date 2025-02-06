// Récupérer le film sélectionné depuis le localStorage
let selectedMovie = JSON.parse(localStorage.getItem("selectedMovie"));

if (selectedMovie) {
  document.getElementById("film-titre").innerText = selectedMovie.titre;
  document.getElementById("film-image").src = selectedMovie.image;
  document.getElementById("film-realisateur").innerText = selectedMovie.realisateur;
  document.getElementById("film-genre").innerText = selectedMovie.genre;
  document.getElementById("film-annee").innerText = selectedMovie.annee;
} else {
  document.body.innerHTML = "<h1>Aucun film sélectionné</h1>";
}