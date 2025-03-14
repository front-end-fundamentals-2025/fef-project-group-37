document.addEventListener("DOMContentLoaded", function () {
  const addToCartBtn = document.querySelector("#addcart-btn");
  const cartTab = document.querySelector(".cartTab .listCart");
  const cartCount = document.querySelector(".shoppingcart-ico span");
  const closeCartBtn = document.querySelector(".cartTab .close");
  const cartTabContainer = document.querySelector(".cartTab");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  updateCartUI();

  //Add to cart
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      const itemName = document.querySelector("#item-main-header").innerText;
      const itemPrice = document.querySelector("#info-main h3").innerText;
      const itemImage = document.querySelector(".selected-item-grid img").src;

      const item = {
        name: itemName,
        price: itemPrice,
        image: itemImage,
      };

      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartUI();
    });
  }

  //Update the cart ui
  function updateCartUI() {
    cartTab.innerHTML = "";
    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("item");
      cartItem.innerHTML = `
              <img src="${item.image}" alt="${item.name}">
              <div>${item.name}</div>
              <div>${item.price}</div>
              <button class="remove-btn" data-index="${index}">Remove</button>
          `;
      cartTab.appendChild(cartItem);
    });

    cartCount.innerText = cart.length;
    addRemoveEventListeners();
  }

  //Remove from cart
  function addRemoveEventListeners() {
    document.querySelectorAll(".remove-btn").forEach((button) => {
      button.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartUI();
      });
    });
  }

  //Open close cart tab
  document.querySelector(".shoppingcart-ico").addEventListener("click", () => {
    document.body.classList.add("showCart");
  });

  closeCartBtn.addEventListener("click", () => {
    document.body.classList.remove("showCart");
  });
});
