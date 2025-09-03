// ====================
// Part 1: Variables & Conditionals
// ====================
let perfumeSize = "large";
let price;

if (perfumeSize === "small") {
  price = 50;
} else if (perfumeSize === "medium") {
  price = 90;
} else {
  price = 150;
}
console.log("Selected size: " + perfumeSize + " | Price: $" + price);


// ====================
// Part 2: Functions
// ====================

// Function 1: Calculate Discount
function applyDiscount(price, discountPercent) {
  let discountAmount = (price * discountPercent) / 100;
  return price - discountAmount;
}

// Function 2: Show Welcome Message
function showWelcomeMessage() {
  let welcome = document.getElementById("welcome-message");
  welcome.textContent = "✨ Welcome to Gracey’s Oil Perfume – Luxury in Every Drop ✨";
}
showWelcomeMessage();


// ====================
// Part 3: Loops
// ====================
let bestSellers = ["Royal Oud", "Velvet Rose", "Golden Musk"];
let bestSellersList = document.getElementById("best-sellers");

for (let i = 0; i < bestSellers.length; i++) {
  let li = document.createElement("li");
  li.textContent = bestSellers[i];
  bestSellersList.appendChild(li);
}


// ====================
// Part 4: DOM Interactions
// ====================

// Change header background color when hovered
let header = document.querySelector("header");
header.addEventListener("mouseover", function () {
  header.style.backgroundColor = "#1e4025";
});
header.addEventListener("mouseout", function () {
  header.style.backgroundColor = "#244c2b";
});

// Show discounted price when button is clicked
document.getElementById("discount-btn").addEventListener("click", function () {
  let discountedPrice = applyDiscount(price, 10);
  document.getElementById("discount-result").textContent =
    "🎉 Special Discount Price: $" + discountedPrice;
});


// ====================
// Part 5: Custom Form Validation
// ====================
document.getElementById("orderForm").addEventListener("submit", function (event) {
  event.preventDefault(); // stop form from auto-submitting

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let size = document.getElementById("size").value;
  let message = document.getElementById("form-message");

  // Custom validation checks
  if (name === "") {
    message.textContent = "❌ Please enter your full name.";
    message.style.color = "red";
    return;
  }

  // Basic email format check
  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "❌ Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  if (size === "") {
    message.textContent = "❌ Please select a perfume size.";
    message.style.color = "red";
    return;
  }

  // If all is valid
  message.textContent = "✅ Thank you " + name + "! Your order has been placed.";
  message.style.color = "lightgreen";

  // Reset form
  document.getElementById("orderForm").reset();
});
