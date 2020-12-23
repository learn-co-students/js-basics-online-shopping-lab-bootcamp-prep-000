var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.random() * (100 - 1) + 1;
  cart.push({itemName: item, itemPrice: Math.floor(price)});
  return item + " has been added to your cart.";
}

function viewCart() {
  var itemsInCart = "In your cart, you have ";
  
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  
  for (let i = 0; i < cart.length; i++) {
    if (cart.length === 1) {
      itemsInCart += cart[i].itemName + " at $" + cart[i].itemPrice + ".";
    } else if ((i + 1) === cart.length) {
      itemsInCart += "and " + cart[i].itemName + " at $" + cart[i].itemPrice + ".";
    } else {
      itemsInCart += cart[i].itemName + " at $" + cart[i].itemPrice + ", ";
    }
  }
  return itemsInCart;
}

function total() {
  var cartTotal = 0;
  for(let i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  var containsItem = false;
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      containsItem = true;
      delete cart[item];
    }
  }
  if(containsItem) {
    return cart;
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  var totalCharge = total();
  if(!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cart = [];
    return "Your total cost is $" + totalCharge + ", which will be charged to the card " + cardNumber + ".";
  }
}
