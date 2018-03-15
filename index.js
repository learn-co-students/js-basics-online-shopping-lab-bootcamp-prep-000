var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101);
  cart.push({itemName: item, itemPrice: price});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  } else {
    let count = 1;
    var string = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
    do {
      string = string + `, ${cart[count].itemName} at $${cart[count].itemPrice}`;
      count++;
    } while (count < cart.length - 1);
    string = string + `, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`;
    return string;
    }
}

function total() {
  let count = 0;
  let total = 0;
  while (count < cart.length) {
    total = total + cart[count].itemPrice;
    count++;
  }
  return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
