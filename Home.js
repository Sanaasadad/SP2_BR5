document.addEventListener("DOMContentLoaded", function() {
    let filmsContainer = document.querySelector("#films-container");
    let dataMovies = localStorage.getItem("Movies")
        ? JSON.parse(localStorage.getItem("Movies"))
        : [];

    function Afficher() {
        filmsContainer.innerHTML = ""; 
        dataMovies.forEach((movie, index) => {
            let movieElement = document.createElement("div");
            movieElement.classList.add("movie");
            movieElement.innerHTML = `
                <a href="detail.html?index=${index}">
                    <img src="${movie.image}" alt="${movie.Titre}" width="200" style=" margin-left: 10px;margin-top:30px;" > </a>
                    
               
            `;
            filmsContainer.appendChild(movieElement);
        });
    }

    Afficher();
});