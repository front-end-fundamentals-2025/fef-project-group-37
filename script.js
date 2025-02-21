document.addEventListener("DOMContentLoaded", function () {
  const bgImage = new Image();
  bgImage.onload = function () {
    document.body.style.backgroundImage = "url('/images/homeimage.png')";
    document.body.style.backgroundSize = "cover";
  };
  bgImage.src = "/images/homeimage.png";
});
