let Titre = document.querySelector("input[name='titre']");
let Realisateur = document.querySelector("input[name='realisateur']");
let genre = document.querySelector("input[name='genre']");
let Année = document.querySelector("input[name='Année']");
let image = document.querySelector("#img");
let submit = document.querySelector("#submit");

let dataMovies = localStorage.getItem("Movies")
    ? JSON.parse(localStorage.getItem("Movies"))
    : [];

submit.onclick = function (e) {
    e.preventDefault(); 

    if (!Titre.value || !Realisateur.value || !genre.value || !Année.value) {
        alert("Veuillez remplir tous les champs.");
        return;
    }
    let reader = new FileReader();
    reader.onload = function(event) {
    let newMovie = {
        Titre: Titre.value,
        Realisateur: Realisateur.value,
        genre: genre.value,
        Année: Année.value,
        image: event.target.result
    };

    dataMovies.push(newMovie);
    localStorage.setItem("Movies", JSON.stringify(dataMovies));

    Titre.value = "";
    Realisateur.value = "";
    genre.value = "";
    Année.value = "";
    image.value = "";

    alert("Film ajouté avec succès !");
     window.location.href = "Home.html";  
};
reader.readAsDataURL(image.files[0]);
};

