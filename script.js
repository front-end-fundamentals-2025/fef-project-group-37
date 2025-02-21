window.onload = function () {
  console.log("Script is running...");

  const bgImage = new Image();
  bgImage.onload = function () {
    console.log("Image loaded");
    document.body.style.backgroundImage =
      "url('https://yourusername.github.io/your-repository/images/homeimage.png')";
    document.body.style.backgroundSize = "cover";
  };
  bgImage.src =
    "https://yourusername.github.io/your-repository/images/homeimage.png";
};
