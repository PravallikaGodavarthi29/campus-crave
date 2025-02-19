let cart = [];
let totalPrice = 0;

// Function to add items to the cart
function addToCart(item, price) {
  cart.push({ item, price });
  totalPrice += price;
  updateCart();
}

// Function to update the cart display
function updateCart() {
  let cartList = document.querySelector(".cart-items");
  cartList.innerHTML = "";

  cart.forEach((cartItem, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${cartItem.item} - ₹${cartItem.price} 
                        <button onclick="removeFromCart(${index})">Remove</button>`;
    cartList.appendChild(li);
  });

  document.getElementById("total-price").textContent = totalPrice;
}

// Function to remove items from the cart
function removeFromCart(index) {
  totalPrice -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

// Function for checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Proceeding to checkout. Total Amount: ₹" + totalPrice);
  cart = [];
  totalPrice = 0;
  updateCart();
}
