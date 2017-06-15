var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var newCart = { [itemName]: itemPrice };
  cart.push(newCart)
  console.log(`${itemName} has been added to your cart.`);
  return cart
}

function viewCart() {
  var i = cart.length
  var cart2 = []
  if (i < 1) {
    console.log("Your shopping cart is empty.");
  }
  for (let e = 0; e < i; e++) {
    var itemName = Object.keys(cart[e]).shift()
    var namePrice = `${itemName} at $${cart[e][itemName]}`;
    cart2.push(namePrice)
  }
  if (i == 1) {
    console.log(`In your cart, you have ${cart2}.`);
  } else if (i == 2){
    console.log(`In your cart, you have ${cart2.join(" and ")}.`);
  } else if (i > 2){
    var lastObj = cart2.pop()
    console.log(`In your cart, you have ${cart2.join(", ")}, and ${lastObj}.`);
  }
}

function total() {
  var sum = 0
  var cart2 = []
  for (var i = 0; i < cart.length; i++) {
    var itemName = Object.keys(cart[i]).shift()
    var itemPrice = cart[i][itemName];
    cart2.push(itemPrice)
  }
  for (var n = 0; n < cart.length; n++) {
    sum += cart2[n]
  }
 return sum
}




function removeFromCart(item) {
  let itemInCart = false;

  for(let i=0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)){
      itemInCart = true;
      cart = cart.slice(0, i).concat(cart.slice(i + 1));
    }
  }
  if(!itemInCart) {
    console.log("That item is not in your cart.")
  }
  return cart
}




function placeOrder(cardNumber) {
  var cost2 = total()
  if (cardNumber >= 1) {
    console.log("Your total cost is $" + cost2 + ", which will be charged to the card " + cardNumber + ".");
    cart = cart.slice(1,1)
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
