var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({"itemName": item, "itemPrice": Math.floor(Math.random() * 100)});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var sentence = "In your cart, you have ";
  var x = 1;
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return sentence + `${cart[x-1].itemName} at $${cart[x-1].itemPrice}.`;
  } else {
      for (; x < cart.length; x++) {
        sentence = sentence + `${cart[x-1].itemName} at $${cart[x-1].itemPrice}, `;
      }
      return sentence +`and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}.`;
    }
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  if (cart.length === 0) {
    return "That item is not in your cart.";
  } else {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].itemName === item) {
        cart.splice(i, 1);
        return cart;
      } else {
        if (i === cart.length -1) {
          return "That item is not in your cart.";
        } else {
            continue;
        }
      }
    }
  }
}

function placeOrder(cardNumber) {
  var cost = total();
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
      cart.length = 0;
      return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`;
  }
}
