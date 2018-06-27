var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randomNumber = Math.floor((Math.random() * 100) +1);
  var cartItem = {
   itemName: item,
   itemPrice: randomNumber
  };
  cart.push(cartItem);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var itemsInCart = [];
  for(let i = 0; i < cart.length; i++) {
    itemsInCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
    return `In your cart, you have${itemsInCart}.`;
  } else if (cart.length === 2) {
    return `In your cart, you have${itemsInCart[0]}, and${itemsInCart[1]}.`;
  } else {
    var lastItem = itemsInCart.pop();
    return `In your cart, you have${itemsInCart}, and${lastItem}.`;
  }
}

function total() {
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  var totalCost = total();
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart = [];
    return 'Your total cost is $' + totalCost + ', which will be charged to the card ' + cardNumber +'.';
  }
}
