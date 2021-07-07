var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100 + 1);
 var newItem = { itemName: item, itemPrice: price };
 cart.push(newItem);
 return  `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  var cartContents = "In your cart, you have ";
  for (var i = 0; i < cart.length; i++) {
    if (i < cart.length - 1) {
      cartContents += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
    } else if (cart.length === 1) {
      cartContents += `${cart[i].itemName} at $${cart[i].itemPrice}.`; 
      return cartContents;
    } else {
      cartContents += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
    }
  }
  return cartContents;
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      //delete the item from cart
      var newCart = [...cart.slice(0, i), ...cart.slice(i + 1)];
      cart = newCart;
      return cart;
    }
  }
    return "That item is not in your cart.";
}


function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  }
  var orderTotal = total();
  cart = [];
  return `Your total cost is $${orderTotal}, which will be charged to the card ${cardNumber}.`;
}
