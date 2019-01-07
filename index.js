var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var groceryItemPrice = new Object();
  groceryItemPrice[item] = getPrice(100);
  cart.push(groceryItemPrice);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var c = cart.slice(0,cart.length);
  var intro = "In your cart, you have";
  var separator = "";
  var final_prefix = ""
  var output = "";
  var name = "";
  var price = 0;
  var tmpGroceryObj = {};

  //console.log(`cart length = ${c.length}`);
  if ( c.length === 0 ) {
    console.log("Your shopping cart is empty.");
  }
  else if ( c.length > 0 ) {
    let i = 0;
    if ( c.length > 2) {
      separator = ",";
    }
    output = intro;
    while (c.length > 0) {
      if (c.length === 1) {
        separator = "";
        if (cart.length > 1) {
           final_prefix = " and";
        }
      }
      tmpGroceryObj = c.shift();
      name = Object.keys(tmpGroceryObj).shift();
      price = tmpGroceryObj[name];
      output = output + final_prefix + " " + name + " at $" + price + separator;
    }
    output = output + ".";
  }

  console.log(output);

}

function total() {
  var c = cart.slice(0,cart.length);
  var totPrice = 0;
  var tmpGroceryObj = {};
  var name = "";

  while (c.length > 0) {
    tmpGroceryObj = c.shift();
    name = Object.keys(tmpGroceryObj).shift();
    totPrice += tmpGroceryObj[name];
  }
  return totPrice;
}

function removeFromCart(item) {
  for ( var i=0; i<cart.length; i++ ) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      return cart;
    }
  }

  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}

function getPrice(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
