var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1;
 var itemAndPrice = {itemName: `${item}`, itemPrice:price};
 
 cart.push(itemAndPrice);
 return itemAndPrice.itemName + " has been added to your cart."

}
function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else { 
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
  }
}
function total() {
  var total = 0;
  for (var i=0; i < cart.length; i++) {
    total = total + cart[i].itemPrice
  }
  return total
  }

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
      return cart;
    }
  } if (item != cart[i]) {
    return "That item is not in your cart."
  }
}

function placeOrder(cardnumber) {
    if (cardnumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var sumToCharge = total()
   cart = [];
    return `Your total cost is $${sumToCharge}, which will be charged to the card ${cardnumber}.`
  }
}