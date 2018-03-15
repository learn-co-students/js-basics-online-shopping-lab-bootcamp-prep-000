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

 var cartItem = {
   itemName: item,
   itemPrice: price
 }

 cart.push(cartItem);
 return `${item} has been added to your cart.`
}



function viewCart() {
  if (cart.length === 0) {
       return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
       return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
       var cartReturn = "In your cart, you have ";
       for (var i = 0; i < cart.length; i ++) {
         if (i === 0) {
            cartReturn += `${cart[i].itemName} at $${cart[i].itemPrice} and`
         } else if (i === 1) {
            cartReturn += ` ${cart[i].itemName} at $${cart[i].itemPrice}.`
         }
       }
       return cartReturn;
  } else if (cart.length > 2) {
      var cartReturn = "In your cart, you have ";
      for (var i = 0; i < cart.length; i++) {
        if (i <= cart.length - 3 ) {
            cartReturn += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
        } else if (i === cart.length - 2) {
            cartReturn += `${cart[i].itemName} at $${cart[i].itemPrice}`;
        } else if (i === cart.length - 1) {
            cartReturn += ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        }
      }
      return cartReturn;
    }
  }

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }

  return total;
}

function removeFromCart(item) {
  var removed = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      var itemsRemoved = cart.splice(i, 1);
      removed = true;
    }
  }

  if (removed === false) {
    return "That item is not in your cart."
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  var numberString = cardNumber.toString();
  var orderTotal = total();
  cart.length = 0;
  return `Your total cost is $${orderTotal}, which will be charged to the card ${numberString}.`
}
