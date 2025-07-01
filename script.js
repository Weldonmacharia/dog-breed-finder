document.addEventListener("DOMContentLoaded", () => {
  const breedSelect = document.getElementById("breed-select");
  const imageContainer = document.getElementById("image-container");
  const randomBtn = document.getElementById("random-btn");

  fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => {
      const breeds = Object.keys(data.message);
      breeds.forEach((breed) => {
        const option = document.createElement("option");
        option.value = breed;
        option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
        breedSelect.appendChild(option);
      });
    });

  breedSelect.addEventListener("change", (e) => {
    const breed = e.target.value;
    if (breed) {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((res) => res.json())
        .then((data) => {
          imageContainer.innerHTML = `<img src="${data.message}" alt="${breed}" />`;
        });
    }
  });

  randomBtn.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        imageContainer.innerHTML = `<img src="${data.message}" alt="Random Dog" />`;
      });
  });
});
