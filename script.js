const img = document.querySelector("img");
const randomButton = document.querySelector(".random-button");
randomButton.addEventListener("click", getRandomImage);

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const errorMessage = document.querySelector(".error-message");

searchButton.addEventListener("click", searchNewGif);
let searchURL =
  "https://api.giphy.com/v1/gifs/translate?api_key=O3ixZvBHJHh4mBOOBggvTBAlOHXENemG&s=cats";
function getRandomImage() {
  fetch(searchURL)
    .then(function (response) {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
      console.log("fetched all");
    })
    .catch((error) => {
      console.error("Error fetching the Gif:", error);
    });
}

function searchNewGif() {
  console.log(searchInput.value);
  if (searchInput.value === "") {
    errorMessage.textContent = "Can't search without an input value";
    console.log("error no input value");
  } else {
    searchURL = `https://api.giphy.com/v1/gifs/translate?api_key=O3ixZvBHJHh4mBOOBggvTBAlOHXENemG&s=${searchInput.value}`;
    getRandomImage();
    searchInput.value = "";
    errorMessage.textContent = "";
    return;
  }
  console.log("error didn't work");
}
getRandomImage();

// API Key: O3ixZvBHJHh4mBOOBggvTBAlOHXENemG
