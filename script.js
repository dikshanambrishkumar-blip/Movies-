const movieList = document.getElementById("movieList");

function addMovie() {
    const input = document.getElementById("movieInput");

    if(input.value.trim() === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleWatch(this)">
            ${input.value}
        </span>
        <button onclick="deleteMovie(this)">❌</button>
    `;

    movieList.appendChild(li);
    input.value = "";
}

function toggleWatch(element){
    element.classList.toggle("watched");
}

function deleteMovie(button){
    button.parentElement.remove();
}
