const images = ["1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const insertBackground = document.body.style;

insertBackground.backgroundImage = `url(img/${chosenImage})`;
insertBackground.backgroundSize = "cover";
// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);