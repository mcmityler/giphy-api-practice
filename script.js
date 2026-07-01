const img = document.querySelector("img");
const randomButton = document.querySelector(".random-button");
randomButton.addEventListener("click", getRandomImage);

function getRandomImage() {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=O3ixZvBHJHh4mBOOBggvTBAlOHXENemG&s=cats",
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
      console.log("fetched all");
    });
}
getRandomImage();

// API Key: O3ixZvBHJHh4mBOOBggvTBAlOHXENemG
