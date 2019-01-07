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
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getCart() {
return cart;
}

function addToCart(item) {
  var price = Math.random() * 100;
  var obj = {[item]: Math.floor(price)};
  cart.push(obj);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  for (var i = 0, l=cart.length; i < l; i++){
    var obj = cart[i]
	var item = Object.keys(obj)
        itemlist = (i > 0) ? itemlist + ` ${item} at $${obj[item]}` : ` ${item} at $${obj[item]}`
      var itemlist = (i===l -1) ? itemlist + "." : itemlist + ","
  }
 var string = (!itemlist) ? "Your shopping cart is empty." : `In your cart, you have${itemlist}`
 console.log(string)
}

function removeFromCart(item) {
  var l = cart.length;
  if (!l) {console.log("That item is not in your cart.")} else {
  for (let i=0;i < l;i++) {
  switch (true) {
  case (cart[i].hasOwnProperty(item)):
      cart.splice(i);
      console.log(`${item} has been removed from your cart`);
  }
  }
  if (l === cart.length) {console.log('That item is not in your cart.');}
  }
  }

function placeOrder(CC) {
if (!CC) {
  console.log("We don't have a credit card on file for you to place your order.")
} else
{var t = total()
console.log(`Your total cost is $${t}, which will be charged to the card ${CC}.`)
  setCart([]);
}
}
