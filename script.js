// Sample user data
const userId = 1; // This would be dynamically set based on the logged-in user
const originalPrice = 100; // Example original price

// Function to apply discount
function applyDiscount() {
  const discountCode = document.getElementById("discount-code").value;
  const validCode = "JACOB37#BB";
  let discountedPrice = originalPrice;
  const messageElement = document.getElementById("message");

  if (discountCode === validCode) {
    discountedPrice = originalPrice * 0.1;
    messageElement.textContent = "Discount code successfully applied!";
    messageElement.style.color = "green";
    saveUserSubscription(userId, discountedPrice);
  } else {
    messageElement.textContent = "Invalid discount code.";
    messageElement.style.color = "red";
  }

  // Update the price on the webpage
  document.getElementById("discounted-price").innerText =
    discountedPrice.toFixed(2);
}

// Function to save user subscription data to local storage
function saveUserSubscription(userId, discountedPrice) {
  const userSubscription = {
    userId: userId,
    discountedPrice: discountedPrice,
    originalPrice: originalPrice,
    discountCode: "JACOB37#BB",
  };

  localStorage.setItem(
    `userSubscription_${userId}`,
    JSON.stringify(userSubscription)
  );
  console.log("User subscription saved:", userSubscription);
}

// Function to get user subscription data from local storage
function getUserSubscription(userId) {
  const userSubscription = localStorage.getItem(`userSubscription_${userId}`);
  return userSubscription ? JSON.parse(userSubscription) : null;
}

// Example function to update user subscription
function updateUserSubscription(userId, discountMultiplier) {
  const userSubscription = getUserSubscription(userId);
  if (userSubscription) {
    userSubscription.price =
      userSubscription.originalPrice * discountMultiplier;
    saveUserSubscription(userId, userSubscription.price);
  }
}
