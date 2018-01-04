var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item] : Math.ceil(100*Math.random(1))});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  
  if (cart.length===0) {
    console.log("Your shopping cart is empty.");
    return cart;
  }
  var txt = "In your cart, you have ";
  var items = [];
  for (var i in cart){
    for (var k in cart[i]){
      items.push(k + " at $" + cart[i][k]);
    }
  }
  if (items.length == 1) txt += items[0] + ".";
  if (items.length == 2) txt += items[0] + " and " + items[1] + ".";
  if (items.length > 2) txt += items.slice(0,-1).join(", ") + `, and ${items[items.length-1]}.`;
  console.log(txt);
  return cart;
}

function total() {
  var sum = 0;
  for (var i in cart){
    for (var k in cart[i]) {
      sum += cart[i][k];
    }
  }
  return sum;
}

function removeFromCart(item) {
  for (var i in cart){
    for (var k in cart[i]) {
      if(k === item) {
        cart.splice(i,1);
        return cart;
      }
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (!cardNumber) console.log("Sorry, we don't have a credit card on file for you.");
  var msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  cart = [];
  console.log(msg);
  return cart;
}