var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  var itemObj = {itemName: item, itemPrice: price};
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var cartMsg = ["In your cart, you have"];
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (i === cart.length - 1 && cart.length > 1) {
        cartMsg.push(` and ${cart[i].itemName} at \$${cart[i].itemPrice}.`);
      } else if (i === cart.length - 1 && cart.length === 1){
        cartMsg.push(` ${cart[i].itemName} at \$${cart[i].itemPrice}.`);
      } else {
        cartMsg.push(` ${cart[i].itemName} at \$${cart[i].itemPrice},`);
      }
        }
  } else {
    cartMsg = ["Your shopping cart is empty."]
  }

  return cartMsg.join('');
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  var count = 0;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
    } else {
      count++;
    }
  }
  if (count === cart.length) {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var totalCost = total();
    cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
