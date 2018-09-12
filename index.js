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
 var paket = {};

 paket.itemName = item;
 paket.itemPrice = Math.floor(Math.random()*100+1);

 cart.push(paket);

 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var text = "In your cart, you have ";

  for(var i=0; i<cart.length; i++) {
    text = text + `${cart[i].itemName} at $${cart[i].itemPrice}`;
    if(i<cart.length-1) {
      text = text + ", ";
      if(cart.length-2===i) text = text + "and "}
    else text = text + ".";
  }

  if (cart.length === 0) return "Your shopping cart is empty.";
  else return text;
}

function total() {
  // write your code here
  var totaal=0;
  for(var i = 0; i<cart.length; i++) {
    totaal += cart[i].itemPrice;
  }
  return totaal;
}

function removeFromCart(item) {
  // write your code here
    var number = "nope";

    for (var i = 0; i < cart.length; i++) {
      if(item == cart[i].itemName) number=i;
    }

    if (number == "nope") return "That item is not in your cart.";

    cart.splice(number,1);

    return cart;
}



function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == undefined) return "Sorry, we don't have a credit card on file for you.";

  else {
    var text;

    text = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`

    cart = [];

    return text;
  }
}
