var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1 );
    cart.push(Object.assign({}, { itemName : `${item}`, itemPrice : price } ));
    return `${item}` + " has been added to your cart."
  }


function viewCart(itemName, itemPrice) {
  var cartItems = [];
  if (cart.length === 0) {
    return("Your shopping cart is empty.")
  }
  for (var i = 0; i < cart.length; i++) {
    cartItems.push(`${cart[i].itemName}` + ` at $` + `${cart[i].itemPrice}`);
  }
  if (cart.length === 1) {
  return(`In your cart, you have ` + cartItems.join(" ") + `.`)
} else if (cart.length > 1) {
  var lastItem = cartItems.pop()
  return(`In your cart, you have ` + cartItems.join(", ") + `, and ` + `${lastItem}` + `.`)
}
}

function total() {
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice
    }
    return totalPrice;
  }

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
    if (cart[item] != item) {
    return("That item is not in your cart.")
  }
}

function placeOrder(cardNumber) {
  var cartTotal = total();
  if (!cardNumber) {
    return("Sorry, we don't have a credit card on file for you.");
  } else if (cardNumber > 0) {
    cart = [];
    return("Your total cost is $" + `${cartTotal}` + ", which will be charged to the card " + `${cardNumber}.`);
    return cart
  }
}
