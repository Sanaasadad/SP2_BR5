document.addEventListener("DOMContentLoaded", function() {
    let params = new URLSearchParams(window.location.search);
    let index = params.get('index');
    let dataMovies = localStorage.getItem("Movies")
        ? JSON.parse(localStorage.getItem("Movies"))
        : [];

    if (index !== null && dataMovies[index]) {
        let movie = dataMovies[index];
        document.getElementById('film-detail').innerHTML = `
        <div style="display:flex; gap:40px ; color: white;">
            <div>
                <img src="${movie.image}" style=" width=200; margin-left: 10px;" >
            </div>
            <div>
                <h3>${movie.Titre}</h3>
                <p><strong>Réalisateur:</strong> ${movie.Realisateur}</p>
                <p><strong>Genre:</strong> ${movie.genre}</p>
                <p><strong>Année:</strong> ${movie.Année}</p>
                <button id="delete-btn">Supprimer</button>
                <button id="edit-btn">Modifier</button>
            </div>
        </div>
        `;

        document.getElementById('delete-btn').onclick = function() {
            dataMovies.splice(index, 1);
            localStorage.setItem("Movies", JSON.stringify(dataMovies));
            alert("Film supprimé avec succès !");
            window.location.href = "Home.html";
        };

        document.getElementById('edit-btn').onclick = function() {
            let newTitle = prompt("Modifier le titre:", movie.Titre);
            let newRealisateur = prompt("Modifier le réalisateur:", movie.Realisateur);
            let newGenre = prompt("Modifier le genre:", movie.genre);
            let newAnnee = prompt("Modifier l'année:", movie.Année);

            if (newTitle && newRealisateur && newGenre && newAnnee) {
                movie.Titre = newTitle;
                movie.Realisateur = newRealisateur;
                movie.genre = newGenre;
                movie.Année = newAnnee;
                localStorage.setItem("Movies", JSON.stringify(dataMovies));
                alert("Film modifié avec succès !");
                window.location.reload();
            } else {
                alert("Tous les champs doivent être remplis pour modifier le film.");
            }
        };
    } else {
        document.getElementById('film-detail').innerHTML = '<p style="color:white; display:flex; justify-content:centre;align-items:centre; font-size:50px; width:100%"> Aucun Film.</p>';
    }
});