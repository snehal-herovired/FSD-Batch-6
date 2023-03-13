// Code for Login Functionality
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Get the input values
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if the credentials are correct
  if (username === "supplier" && password === "password") {
    // Redirect to the Products page
    window.location.href = "products.html";
  } else {
    // Show error message
    const errorMessage = document.querySelector("#loginErrorMessage");
    errorMessage.textContent = "Invalid username or password.";
  }
});

// Code for Logout Functionality
const logoutButton = document.querySelector("#logoutButton");
logoutButton.addEventListener("click", () => {
  // Redirect to the Login page
  window.location.href = "index.html";
});


// Code for Adding Products to Cart
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    // Code to add product to cart
    console.log(`Product ${productId} added to cart.`);
  });
});
