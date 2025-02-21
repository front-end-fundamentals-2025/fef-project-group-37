document.addEventListener("DOMContentLoaded", function () {
  const bgImage = new Image();
  bgImage.onload = function () {
    document.body.style.backgroundImage =
      "url('https://front-end-fundamentals-2025.github.io/fef-project-group-37/images/homeimage.png')";
    document.body.style.backgroundSize = "cover";
  };
  bgImage.src =
    "https://front-end-fundamentals-2025.github.io/fef-project-group-37/images/homeimage.png";
});
