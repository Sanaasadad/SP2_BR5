let Titre = document.querySelector("input[name='titre']");
let Realisateur = document.querySelector("input[name='realisateur']");
let genre = document.querySelector("input[name='genre']");
let Année = document.querySelector("input[name='Année']");
let image = document.querySelector("#img");
let submit = document.querySelector("#submit");
let filmsContainer = document.querySelector("#films-container");

let dataMovies = localStorage.getItem("Movies")
    ? JSON.parse(localStorage.getItem("Movies"))
    : [];

function Ajouter() {
    Afficher();
}

function Afficher() {
    filmsContainer.innerHTML = ""; // Clear the container
    dataMovies.forEach((movie, index) => {
        let movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
            <a href="liste.html?index=${index}">
                <img src="${movie.image}" alt="${movie.Titre}" width="100">
            </a>
        `;
        filmsContainer.appendChild(movieElement);
    });
}

submit.onclick = function (e) {
    e.preventDefault(); 

    if (!Titre.value || !Realisateur.value || !genre.value || !Année.value) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    let newMovie = {
        Titre: Titre.value,
        Realisateur: Realisateur.value,
        genre: genre.value,
        Année: Année.value,
        image: image.files[0] ? URL.createObjectURL(image.files[0]) : "default.png"
    };

    dataMovies.push(newMovie);
    localStorage.setItem("Movies", JSON.stringify(dataMovies));

    // Réinitialiser le formulaire après l'ajout
    Titre.value = "";
    Realisateur.value = "";
    genre.value = "";
    Année.value = "";
    image.value = "";

    alert("Film ajouté avec succès !");
    Afficher();
};

Ajouter();