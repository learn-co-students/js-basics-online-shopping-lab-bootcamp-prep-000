var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
  console.log(`${name} has been added to your cart.`);
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var itemName = {[name]: itemPrice};
  cart.push(itemName);
  return cart;
}

function viewCart() {
if (cart.length == 0) {
      return console.log("Your shopping cart is empty.");
    }
    var itemsArray = [];
    for (let i = 0; i < cart.length; i++) {
      var item = cart[i];
      var name = Object.keys(item)[0];
      let price = item[name];
      itemsArray.push(`${name} at \$${price}`);
    }
    switch(itemsArray.length) {
      case 1:
        break;
      case 2:
        itemsArray = itemsArray.join(" and ");
        debugger;
        break;
      default:
        itemsArray[cart.length-1] = "and ".concat(itemsArray[cart.length-1]);
        itemsArray = itemsArray.join(", ");
    }

    console.log(`In your cart, you have ${itemsArray}.`);
   }

function total() {
  var total = 0
  for(var i = 0; i < cart.length; i++) {
    var item  = cart[i];
    var name  = Object.keys(item)[0];
    var price = item[name];
    total = total + price;
  }
  return total;
}

function removeFromCart(name) {
  var itemExists = false;
  for(var i = 0; i < cart.length; i++) {
    var item = cart[i];
    if (!!item[name]) {
      itemExists = true;
      cart.splice(i, 1);
    }
  }

  if (!itemExists) {
    console.log(`That item is not in your cart.`)
  }
}

function placeOrder(cardNumber) {
  var cartTotal = total();
  if (typeof cardNumber !== 'undefined'){
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
    cart.splice(0, cart.length);

  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
